export type GovernmentPosition = {
  id:string;
  exam:'2026国考'|'2026安徽省考';
  region:string;
  agency:string;
  role:string;
  code:string;
  headcount:number;
  education:string;
  major:string;
  note:string;
  sourceUrl:string;
};

export const governmentTableLinks = [
  {
    label:'2026 国考完整职位表（官方专题）',
    url:'https://bm.scs.gov.cn/kl2026',
    note:'进入“相关下载”获取《招考简章》Excel/压缩包；下一年度必须重新下载。'
  },
  {
    label:'2026 安徽省考完整职位表（官方公告附件）',
    url:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html',
    note:'公告页附件含安徽省职位表和合肥市职位表。'
  },
  {
    label:'安徽省人事考试网',
    url:'https://www.apta.gov.cn/',
    note:'安徽省考报名、准考证、成绩等官方入口。'
  },
  {
    label:'国家市场监管总局 2026 职位表 XLSX',
    url:'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/rss/art/2025/art_375c2289ca9c4ecfbbd152afd7272546.html',
    note:'市场监管总局官方公告页，附件为可直接下载的 .xlsx 职位汇总表。'
  }
];

// 下面只放食品相关的代表性岗位，帮助理解“食品质量与安全到底能报什么”。
// 完整筛岗必须重新下载当年官方 Excel，并逐条核对专业、学历、应届身份、备注和体检要求。
export const governmentPositions:GovernmentPosition[] = [
  {id:'gk-beijing-001008',exam:'2026国考',region:'北京',agency:'北京海关 · 首都机场海关',role:'食品监管四级主办及以下（一）',code:'300110001008',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、粮食工程、乳品工程、酿酒工程等',note:'口岸一线食品监管；公开职位信息显示有应届、英语、倒班、特殊体检及最低服务年限等备注，报考时必须逐项核对。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-shanghai-113003',exam:'2026国考',region:'上海',agency:'上海海关 · 徐汇海关',role:'物控查检四级主办及以下',code:'300110113003',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、食品卫生与营养学',note:'食品专业可报的海关查检类岗位示例。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-shanghai-115002',exam:'2026国考',region:'上海',agency:'上海海关 · 杨浦海关',role:'物控查检四级主办及以下',code:'300110115002',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、食品卫生与营养学',note:'岗位名称不一定写“食品”，筛表时不能只搜索“食品监管”四个字。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-nanjing-101004',exam:'2026国考',region:'江苏南京',agency:'南京海关 · 金陵海关',role:'食品、化妆品检验二级主办及以下（一）',code:'300110101004',headcount:1,education:'本科及以上',major:'食品科学与工程、食品质量与安全、粮食工程、乳品工程、酿酒工程、食品卫生与营养学等',note:'检验类岗位，食品与化妆品方向交叉。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-nanjing-101005',exam:'2026国考',region:'江苏南京',agency:'南京海关 · 金陵海关',role:'食品、化妆品检验二级主办及以下（二）',code:'300110101005',headcount:1,education:'本科及以上',major:'食品科学与工程、食品质量与安全、粮食工程、乳品工程、酿酒工程、食品卫生与营养学等',note:'同一单位会拆成不同职位代码，性别、应届、英语等备注可能不同，不能只看职位名。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-xiamen-009008',exam:'2026国考',region:'福建厦门',agency:'厦门海关 · 海沧海关',role:'食品监管四级主办及以下（一）',code:'300110009008',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、食品工程、食品加工与安全、食品安全与检测等',note:'食品监管方向，专业范围比只写“食品质量与安全”更宽。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-xiamen-009009',exam:'2026国考',region:'福建厦门',agency:'厦门海关 · 海沧海关',role:'食品监管四级主办及以下（二）',code:'300110009009',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、食品工程、食品加工与安全、食品安全与检测等',note:'同一岗位方向可能按条件分成多个代码，逐条看备注才能知道自己到底能不能报。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},
  {id:'gk-guangzhou-014003',exam:'2026国考',region:'广东广州',agency:'广州海关 · 花都海关',role:'食品监管四级主办及以下（一）',code:'300110014003',headcount:1,education:'本科或硕士研究生',major:'食品科学与工程、食品质量与安全、食品安全与检测、生物科学、生物技术',note:'公开职位信息显示为口岸一线食品安全监管，另有应届、英语、体检、服务年限等条件。',sourceUrl:'https://bm.scs.gov.cn/kl2026'},

  {id:'ah-hf-010039',exam:'2026安徽省考',region:'合肥',agency:'合肥市市场监督管理局',role:'市场监管',code:'010039',headcount:1,education:'本科及以上 / 学士及以上',major:'食品科学与工程类',note:'职位简介为食品安全监管与执法检查等工作，并提示可能有应急值守和加班。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-hf-010291',exam:'2026安徽省考',region:'合肥',agency:'蜀山区市场监督管理局',role:'市场监管',code:'010291',headcount:1,education:'本科及以上',major:'食品科学与工程类',note:'城区市场监管岗位示例；最终以官方职位表备注和咨询答复为准。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-hf-010078',exam:'2026安徽省考',region:'合肥',agency:'合肥市公安局',role:'人民警察',code:'010078',headcount:2,education:'本科及以上',major:'含食品科学与工程类，同时接受药学、化学、生物、环境等相关专业',note:'食品专业并不只去市场监管，公安食药环方向也可能开放；人民警察另有体能、体检等特殊条件。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-hf-010098',exam:'2026安徽省考',region:'合肥',agency:'肥东县公安局',role:'人民警察',code:'010098',headcount:1,education:'本科及以上 / 学士及以上',major:'环境科学与工程类、食品科学与工程、食品质量与安全、知识产权',note:'职位简介涉及食药环案件侦查与治安管理；公开信息显示为应届、基层一线且有公安专业科目/特殊体检等条件。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-sz-040015',exam:'2026安徽省考',region:'宿州',agency:'宿州市市场监督管理局',role:'市场监管',code:'040015',headcount:2,education:'本科及以上 / 学士及以上',major:'食品科学与工程类、生物科学、生物技术',note:'职位简介为食品、餐饮等领域监管执法。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-sz-040125',exam:'2026安徽省考',region:'宿州砀山',agency:'砀山县市场监督管理局',role:'市场监管',code:'040125',headcount:2,education:'本科及以上',major:'食品科学与工程类、生物工程类、计算机类、法学类、工商管理类、食品卫生与营养学',note:'县级市场监管所也是食品专业的重要去向。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-aq-160215',exam:'2026安徽省考',region:'安庆岳西',agency:'岳西县市场监督管理局',role:'食品药品监管',code:'160215',headcount:4,education:'本科及以上 / 学士及以上',major:'食品科学与工程类、药学类、知识产权',note:'招录人数 4；职位简介包括食品、药品、化妆品安全监管和知识产权保护。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
  {id:'ah-hs-170083',exam:'2026安徽省考',region:'黄山歙县',agency:'歙县市场监督管理局',role:'市场监管',code:'170083',headcount:2,education:'本科及以上 / 学士及以上',major:'电子信息类、食品科学与工程类、药学类、中药学类',note:'职位简介包含食品、药品、产品质量市场监管和行政执法。',sourceUrl:'https://www.hfxf.gov.cn/rsks/gwy/18913707.html'},
];
