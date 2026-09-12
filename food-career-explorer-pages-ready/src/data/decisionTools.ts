export type CityProfile = {
  id:string;
  name:string;
  opportunity:string;
  livingCost:string;
  strengths:string[];
  bestFor:string;
  caution:string;
};

export const cityProfiles:CityProfile[] = [
  {id:'shanghai',name:'上海',opportunity:'总部 / 研发 / 法规岗位较集中',livingCost:'高',strengths:['品牌总部','研发应用','法规合规','供应链'],bestFor:'想积累总部平台、品牌和跨部门经验',caution:'不要只看月薪数字，要同时算房租、通勤和是否提供住宿。'},
  {id:'suzhou-wuxi',name:'苏州 / 无锡',opportunity:'食品制造、配料与研发资源较密集',livingCost:'中高',strengths:['食品研发','质量体系','生产制造','配料应用'],bestFor:'想兼顾产业机会和生活成本',caution:'同一城市里“园区总部岗”和“郊区工厂岗”的工作体验差别很大。'},
  {id:'guangzhou-shenzhen',name:'广州 / 深圳',opportunity:'品牌、消费品、供应链和华南制造机会多',livingCost:'高',strengths:['研发','供应链','采购','市场/销售'],bestFor:'接受快节奏、想进入消费品牌或华南产业链',caution:'深圳食品工厂岗位相对分散，广州及周边制造与研发选择往往更丰富。'},
  {id:'wuhan',name:'武汉',opportunity:'高校科研、食品企业和区域总部兼具',livingCost:'中',strengths:['研发','检测','质量','考公考编'],bestFor:'希望兼顾读研、就业和生活成本',caution:'岗位上限与企业层级差异较大，找工作时要看公司业务和岗位权限。'},
  {id:'chengdu-chongqing',name:'成都 / 重庆',opportunity:'消费食品、餐饮供应链与制造岗位较多',livingCost:'中',strengths:['质量','供应链','研发','生产管理'],bestFor:'重视生活成本和西南地区长期发展',caution:'部分高薪岗位会更偏销售、渠道或供应链，不一定是纯食品技术岗。'},
  {id:'qingdao',name:'青岛 / 烟台',opportunity:'海洋食品、制造与检测相关机会较突出',livingCost:'中',strengths:['水产食品','质量检测','生产','研发'],bestFor:'对海洋、水产、制造型企业有兴趣',caution:'如果目标是互联网式总部岗位或高密度品牌岗位，选择会比一线城市少。'},
];

export const undergraduateRoadmap = [
  {year:'大一',title:'先建立专业底盘',actions:['学好化学、微生物、统计等基础课','第一次去实验室/工厂参观，建立真实工作感','开始记录自己喜欢和讨厌的工作环境']},
  {year:'大二',title:'开始做方向排除',actions:['至少尝试一次实验、竞赛或老师项目','学 Excel / 数据整理 / 基础统计','了解 QC、QA、研发、生产、供应链的日常差异']},
  {year:'大三',title:'用实习验证方向',actions:['做 1 段尽量贴近目标岗位的实习','如果考研，3–6 月完成选校和科目核对','如果考公，先做真题并核对专业可报岗位']},
  {year:'大四',title:'把选择变成行动',actions:['就业：秋招集中投递并比较 offer','考研：初试后马上准备复试和备用方案','考公：国考、省考、事业单位分开看，不把一次考试当唯一出口']},
];

export type SchoolPreference = {
  school:string;
  region:'华北'|'华东'|'华中'|'华南'|'西北';
  strengths:string[];
  styles:string[];
};

export const schoolPreferences:SchoolPreference[] = [
  {school:'中国农业大学',region:'华北',strengths:['科研平台','食品安全','升学深造'],styles:['科研优先','平台优先']},
  {school:'江南大学',region:'华东',strengths:['食品研发','产业联系','食品工程'],styles:['产业研发','专业优先']},
  {school:'南昌大学',region:'华东',strengths:['食品学科','科研平台','性价比'],styles:['专业优先','均衡']},
  {school:'南京农业大学',region:'华东',strengths:['农产品','食品安全','农业交叉'],styles:['科研优先','专业优先']},
  {school:'浙江大学',region:'华东',strengths:['综合平台','科研平台','跨学科'],styles:['平台优先','科研优先']},
  {school:'华中农业大学',region:'华中',strengths:['食品安全','农产品','生命科学交叉'],styles:['科研优先','专业优先']},
  {school:'华南理工大学',region:'华南',strengths:['工程产业化','食品研发','华南产业'],styles:['产业研发','平台优先']},
  {school:'天津科技大学',region:'华北',strengths:['食品专业','工程实践','行业特色'],styles:['专业优先','产业研发']},
  {school:'上海海洋大学',region:'华东',strengths:['水产食品','上海就业','海洋交叉'],styles:['产业研发','城市优先']},
  {school:'中国海洋大学',region:'华东',strengths:['海洋食品','科研平台','水产交叉'],styles:['科研优先','平台优先']},
  {school:'西北农林科技大学',region:'西北',strengths:['农业科研','食品安全','科研平台'],styles:['科研优先','平台优先']},
  {school:'华南农业大学',region:'华南',strengths:['农产品','食品安全','华南就业'],styles:['专业优先','城市优先']},
];
