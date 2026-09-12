export type ImportedPosition = {
  id:string;
  sourceName:string;
  exam:string;
  region:string;
  agency:string;
  role:string;
  code:string;
  headcount:string;
  education:string;
  degree:string;
  major:string;
  political:string;
  experience:string;
  note:string;
  match:'明确匹配'|'相关匹配'|'不限专业'|'需人工确认'|'不匹配';
};

type Table = string[][];
type NamedTable = {name:string;rows:Table};

const clean=(v:unknown)=>String(v??'').replace(/\u00a0/g,' ').replace(/\s+/g,' ').trim();
const norm=(v:string)=>clean(v).replace(/[：:（）()\s]/g,'').toLowerCase();

function parseCsv(text:string):Table{
  const rows:string[][]=[];let row:string[]=[];let cur='';let quoted=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(quoted){
      if(ch==='"'&&text[i+1]==='"'){cur+='"';i++;}
      else if(ch==='"') quoted=false;
      else cur+=ch;
    }else{
      if(ch==='"') quoted=true;
      else if(ch===','){row.push(clean(cur));cur='';}
      else if(ch==='\n'){row.push(clean(cur.replace(/\r$/,'')));rows.push(row);row=[];cur='';}
      else cur+=ch;
    }
  }
  if(cur||row.length){row.push(clean(cur));rows.push(row)}
  return rows.filter(r=>r.some(Boolean));
}

function colIndex(ref:string){const m=/^([A-Z]+)/i.exec(ref);if(!m)return 0;let n=0;for(const c of m[1].toUpperCase())n=n*26+c.charCodeAt(0)-64;return n-1}

async function inflate(bytes:Uint8Array,method:number){
  if(method===0)return bytes;
  if(method!==8)throw new Error(`暂不支持 ZIP 压缩方式 ${method}`);
  if(typeof DecompressionStream==='undefined')throw new Error('当前浏览器不支持直接读取 XLSX，请改用 CSV。');
  const ds=new DecompressionStream('deflate-raw');
  const stream=new Blob([new Uint8Array(bytes)]).stream().pipeThrough(ds);
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function unzip(buffer:ArrayBuffer){
  const b=new Uint8Array(buffer),dv=new DataView(buffer);let eocd=-1;
  for(let i=b.length-22;i>=Math.max(0,b.length-65557);i--){if(dv.getUint32(i,true)===0x06054b50){eocd=i;break}}
  if(eocd<0)throw new Error('不是有效的 XLSX 文件。');
  const count=dv.getUint16(eocd+10,true),offset=dv.getUint32(eocd+16,true);let p=offset;
  const files=new Map<string,Uint8Array>();const decoder=new TextDecoder('utf-8');
  for(let i=0;i<count;i++){
    if(dv.getUint32(p,true)!==0x02014b50)break;
    const method=dv.getUint16(p+10,true),size=dv.getUint32(p+20,true),nameLen=dv.getUint16(p+28,true),extraLen=dv.getUint16(p+30,true),commentLen=dv.getUint16(p+32,true),local=dv.getUint32(p+42,true);
    const name=decoder.decode(b.slice(p+46,p+46+nameLen));
    const localName=dv.getUint16(local+26,true),localExtra=dv.getUint16(local+28,true),start=local+30+localName+localExtra;
    if(name.endsWith('.xml')||name.endsWith('.rels'))files.set(name,await inflate(b.slice(start,start+size),method));
    p+=46+nameLen+extraLen+commentLen;
  }
  return files;
}

const xml=(bytes?:Uint8Array)=>bytes?new DOMParser().parseFromString(new TextDecoder().decode(bytes),'application/xml'):null;

function resolveZipPath(base:string,target:string){
  if(target.startsWith('/'))return target.slice(1);
  const parts=(base+'/'+target).split('/');const out:string[]=[];
  for(const part of parts){if(!part||part==='.')continue;if(part==='..')out.pop();else out.push(part)}
  return out.join('/');
}

function sheetToTable(sheet:Document,shared:string[]):Table{
  const out:Table=[];
  for(const r of Array.from(sheet.getElementsByTagName('row'))){
    const row:string[]=[];
    for(const c of Array.from(r.getElementsByTagName('c'))){
      const idx=colIndex(c.getAttribute('r')||'A1'),type=c.getAttribute('t')||'';let value='';
      const v=c.getElementsByTagName('v')[0]?.textContent||'';
      if(type==='s')value=shared[Number(v)]||'';
      else if(type==='inlineStr')value=c.getElementsByTagName('is')[0]?.textContent||'';
      else value=v;
      row[idx]=clean(value);
    }
    if(row.some(Boolean))out.push(row.map(x=>x||''));
  }
  return out;
}

async function parseXlsx(buffer:ArrayBuffer):Promise<NamedTable[]>{
  const files=await unzip(buffer);const sharedDoc=xml(files.get('xl/sharedStrings.xml'));
  const shared=sharedDoc?Array.from(sharedDoc.getElementsByTagName('si')).map(si=>clean(si.textContent||'')):[];
  const workbook=xml(files.get('xl/workbook.xml'));const rels=xml(files.get('xl/_rels/workbook.xml.rels'));
  const relMap=new Map<string,string>();
  if(rels)for(const rel of Array.from(rels.getElementsByTagName('Relationship'))){const id=rel.getAttribute('Id'),target=rel.getAttribute('Target');if(id&&target)relMap.set(id,resolveZipPath('xl',target))}
  const sheets=workbook?Array.from(workbook.getElementsByTagName('sheet')):[];const out:NamedTable[]=[];
  for(let i=0;i<sheets.length;i++){
    const item=sheets[i],name=item.getAttribute('name')||`工作表 ${i+1}`;
    const relId=item.getAttribute('r:id')||item.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships','id');
    const path=(relId&&relMap.get(relId))||`xl/worksheets/sheet${i+1}.xml`;const doc=xml(files.get(path));
    if(doc){const rows=sheetToTable(doc,shared);if(rows.length)out.push({name,rows})}
  }
  if(!out.length){const doc=xml(files.get('xl/worksheets/sheet1.xml'));if(doc)out.push({name:'工作表 1',rows:sheetToTable(doc,shared)})}
  if(!out.length)throw new Error('没有找到可读取的工作表。');
  return out;
}
function parseHtmlOrXml(text:string):Table{
  const doc=new DOMParser().parseFromString(text,'text/html');
  const tables=Array.from(doc.querySelectorAll('table'));if(!tables.length)return [];
  const table=tables.sort((a,b)=>b.querySelectorAll('tr').length-a.querySelectorAll('tr').length)[0];
  return Array.from(table.querySelectorAll('tr')).map(tr=>Array.from(tr.querySelectorAll('th,td')).map(td=>clean(td.textContent))).filter(r=>r.some(Boolean));
}

function headerSignal(rows:Table){
  let row=0,score=-1;
  rows.slice(0,30).forEach((r,i)=>{const s=r.join('|');const current=['职位','岗位','专业','学历','招考','招录','机关','单位','代码','人数','工作地点','地区'].filter(k=>s.includes(k)).length;if(current>score){row=i;score=current}});
  return {row,score};
}
function findHeaderRow(rows:Table){return headerSignal(rows).row}
function find(headers:string[],keys:string[]){const n=headers.map(norm);return n.findIndex(h=>keys.some(k=>h.includes(norm(k))))}
function val(row:string[],i:number){return i>=0?clean(row[i]):''}
function guessExam(fileName:string,headers:string[]){const sheetHint=fileName.split('·').pop()||fileName;const h=sheetHint+headers.join('');if(/安徽/.test(h))return '安徽省考';if(/中央机关|国考|国家公务员/.test(h))return '国考';const s=fileName+headers.join('');if(/安徽/.test(s)&&!/国考/.test(sheetHint))return '安徽省考';if(/中央机关|国考|国家公务员/.test(s))return '国考';return '导入职位表'}

export function classifyMajor(requirement:string,userMajor:string,includeUnlimited=true):ImportedPosition['match']{
  const r=clean(requirement),m=clean(userMajor);
  if(!r)return '需人工确认';
  if(/不限|不限制|无专业限制|专业不限/.test(r))return includeUnlimited?'不限专业':'不匹配';
  if(r.includes(m))return '明确匹配';
  if(m==='食品质量与安全'&&/食品科学与工程类/.test(r))return '明确匹配';
  if(m==='食品科学与工程'&&/食品科学与工程类/.test(r))return '明确匹配';
  if(/食品科学与工程类|食品质量与安全|食品科学与工程|食品工程|食品加工与安全|食品安全与检测|食品卫生与营养学|食品营养与健康|粮食工程|乳品工程|酿酒工程|农产品质量与安全/.test(r))return '相关匹配';
  if(/食品|粮油|农产品质量|营养/.test(r))return '需人工确认';
  return '不匹配';
}

export function normalizePositions(rows:Table,fileName:string,userMajor='食品质量与安全',includeUnlimited=true):ImportedPosition[]{
  if(rows.length<2)return [];
  const hi=findHeaderRow(rows),headers=rows[hi].map(clean),data=rows.slice(hi+1);const exam=guessExam(fileName,headers);
  const idx={
    dept:find(headers,['部门名称','招录机关','主管部门','单位名称']),unit:find(headers,['用人司局','用人单位','招录单位']),
    role:find(headers,['招考职位','职位名称','职位','岗位名称']),code:find(headers,['职位代码','岗位代码','职位编号']),
    count:find(headers,['招考人数','计划录用人数','录用计划','招聘人数']),major:find(headers,['专业要求','专业']),education:find(headers,['学历要求','学历']),degree:find(headers,['学位要求','学位']),
    region:find(headers,['工作地点','地区','行政区域','市县','考区']),political:find(headers,['政治面貌']),experience:find(headers,['基层工作最低年限','经历要求','基层工作经历']),note:find(headers,['备注','其他条件','其他','职位简介'])
  };
  return data.map((r,i)=>{
    const major=val(r,idx.major),match=classifyMajor(major,userMajor,includeUnlimited);const dept=val(r,idx.dept),unit=val(r,idx.unit);
    return {id:`import-${i}-${val(r,idx.code)}`,sourceName:fileName,exam,region:val(r,idx.region),agency:[dept,unit].filter(Boolean).filter((x,j,a)=>a.indexOf(x)===j).join(' · '),role:val(r,idx.role),code:val(r,idx.code),headcount:val(r,idx.count),education:val(r,idx.education),degree:val(r,idx.degree),major,political:val(r,idx.political),experience:val(r,idx.experience),note:val(r,idx.note),match};
  }).filter(x=>x.role||x.agency||x.code||x.major);
}

export async function importPositionFile(file:File,userMajor='食品质量与安全',includeUnlimited=true){
  const name=file.name.toLowerCase();let positions:ImportedPosition[]=[];let totalRows=0;let sheetCount=1;
  if(name.endsWith('.csv')){
    const rows=parseCsv(await file.text());positions=normalizePositions(rows,file.name,userMajor,includeUnlimited);totalRows=Math.max(0,rows.length-1);
  }else if(name.endsWith('.xlsx')){
    const sheets=await parseXlsx(await file.arrayBuffer());
    const usable=sheets.filter(x=>x.rows.length>1&&headerSignal(x.rows).score>=2);
    const targets=usable.length?usable:sheets.sort((a,b)=>b.rows.length-a.rows.length).slice(0,1);
    sheetCount=targets.length;
    for(const sheet of targets){
      const header=findHeaderRow(sheet.rows);totalRows+=Math.max(0,sheet.rows.length-header-1);
      positions.push(...normalizePositions(sheet.rows,`${file.name} · ${sheet.name}`,userMajor,includeUnlimited));
    }
    if(!positions.length&&usable.length===0)throw new Error('没有识别到职位表表头。请确认工作表中包含职位、专业、学历、代码等字段，或另存为 CSV 后再试。');
  }else if(name.endsWith('.xls')){
    const buf=await file.arrayBuffer(),bytes=new Uint8Array(buf),head=new TextDecoder().decode(bytes.slice(0,512)).trim().toLowerCase();
    if(head.includes('<html')||head.includes('<table')||head.startsWith('<?xml')){const rows=parseHtmlOrXml(new TextDecoder().decode(bytes));positions=normalizePositions(rows,file.name,userMajor,includeUnlimited);totalRows=Math.max(0,rows.length-1)}
    else throw new Error('这个 .xls 是旧版二进制 Excel。请在 Excel/WPS 里“另存为 .xlsx”，再上传；网站不会把无法确认的旧格式硬解析。');
  }else throw new Error('支持 .xlsx、.csv；部分网页表格型 .xls 也可读取。');
  return {positions,totalRows,sheetCount};
}
