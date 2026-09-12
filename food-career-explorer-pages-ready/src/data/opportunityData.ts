export type SoeRecruitmentSample={
  id:string; org:string; channel:string; ownership:string; type:string; region:string[];
  role:string; degree:string[]; majors:string[]; match:'明确匹配'|'大类匹配'|'需逐岗确认';
  headcount:string; status:string; year:string; note:string; sourceLabel:string; sourceUrl:string;
};

export const soeRecruitmentSamples:SoeRecruitmentSample[]=[
  {
    id:'ah-tobacco-tech-food',org:'安徽中烟工业有限责任公司',channel:'中国烟草系统',ownership:'中央驻皖国有企业（烟草系统）',type:'烟草系统',region:['安徽','合肥'],
    role:'技术中心 · 质量分析与控制',degree:['硕士'],majors:['食品科学与工程'],match:'明确匹配',headcount:'1 人',status:'2026 校招样本（已结束）',year:'2026',
    note:'2026 招聘计划表中该岗位明确接受研究生专业“食品科学与工程（0832）”。烟草岗位专业代码审核较严，下一届必须重新看计划表。',
    sourceLabel:'安徽中烟 2026 高校毕业生招聘公告/计划表',sourceUrl:'https://ah.huatu.com/2026/0318/3215713.html'
  },
  {
    id:'ah-tobacco-production',org:'安徽中烟工业有限责任公司',channel:'中国烟草系统',ownership:'中央驻皖国有企业（烟草系统）',type:'烟草系统',region:['安徽','合肥','芜湖','蚌埠','滁州','阜阳'],
    role:'卷烟厂 · 生产 / 工艺 / 质量相关入口',degree:['本科','硕士'],majors:['食品科学与工程类','工科相关专业'],match:'需逐岗确认',headcount:'多岗位',status:'2026 校招样本（已结束）',year:'2026',
    note:'并非所有卷烟厂岗位都接受食品专业；2026 公告还明确提示卷烟厂录用人员原则上长期在生产一线。适合愿意接受工厂现场与班次的人。',
    sourceLabel:'安徽中烟 2026 高校毕业生招聘公告',sourceUrl:'https://ah.huatu.com/2026/0318/3215713.html'
  },
  {
    id:'cofco-food-rd',org:'中粮集团及所属企业',channel:'农粮食品央企',ownership:'国务院国资委央企',type:'央企',region:['全国','长三角','华北','华南'],
    role:'食品研发 / 粮油加工 / 质量安全 / 检测化验',degree:['本科','硕士'],majors:['食品科学与工程','食品质量与安全','粮食工程','生物与食品相关'],match:'明确匹配',headcount:'多板块多岗位',status:'2026 校招方向样本',year:'2026',
    note:'中粮的“食品岗位”分散在不同专业化公司。投递时要按子公司、工作地点和岗位职责筛，不要只看集团名称。',
    sourceLabel:'中粮集团招聘与校园招聘信息',sourceUrl:'https://www.cofco.com/cn/JoinCOFCO/'
  },
  {
    id:'cofco-supply',org:'中粮集团及所属企业',channel:'农粮食品央企',ownership:'国务院国资委央企',type:'央企',region:['全国'],
    role:'采购 / 供应链 / 仓储物流 / 生产运营',degree:['本科','硕士'],majors:['食品科学与工程类','物流管理','供应链相关','管理与工科相关'],match:'大类匹配',headcount:'多板块多岗位',status:'长期关注',year:'2026',
    note:'食品背景在采购、供应商质量、仓储与生产计划也有优势，但专业限制通常比研发岗更宽，要结合岗位 JD 判断。',
    sourceLabel:'中粮集团人才招聘入口',sourceUrl:'https://www.cofco.com/cn/JoinCOFCO/'
  },
  {
    id:'sinograin-quality',org:'中国储备粮管理集团有限公司',channel:'粮食储备央企',ownership:'国务院国资委央企',type:'央企',region:['全国','安徽'],
    role:'仓储保管 / 质量检验 / 粮油质量安全',degree:['本科','硕士'],majors:['食品科学与工程类','食品质量与安全','粮食工程','农产品相关'],match:'大类匹配',headcount:'按直属库批次',status:'年度招聘批次关注',year:'2026',
    note:'地点常在直属库和基层库点。稳定性较强，但工作环境、值班和一线作业情况必须在投递前确认。',
    sourceLabel:'中储粮人才招聘入口',sourceUrl:'https://www.sinograin.com.cn/list4.html?navId=37&navPid=7&pgnow=1'
  },
  {
    id:'ccic-food-test',org:'中国检验认证（集团）有限公司及区域公司',channel:'检验检测认证央企',ownership:'国务院国资委央企',type:'央企',region:['全国','华东','安徽周边'],
    role:'食品 / 农产品检验检测、认证审核、实验室质量',degree:['本科','硕士'],majors:['食品质量与安全','食品科学与工程','化学','生物相关'],match:'明确匹配',headcount:'区域公司分散招聘',status:'滚动关注区域公司招聘',year:'2026',
    note:'专业对口度高。实验室检测、认证审核、客户技术服务是不同工作形态，后两者往往沟通和出差更多。',
    sourceLabel:'中国中检集团与区域公司招聘/业务信息',sourceUrl:'https://www.ccic.com/gywm/index.html'
  },
  {
    id:'china-salt-quality',org:'中国盐业集团有限公司及所属企业',channel:'食品工业央企',ownership:'中央企业',type:'央企',region:['全国'],
    role:'质量管理 / 调味食品研发 / 生产工艺',degree:['本科','硕士'],majors:['食品科学与工程类','食品质量与安全','化学相关'],match:'大类匹配',headcount:'按所属企业批次',status:'长期关注',year:'2026',
    note:'总部与子公司招聘节奏可能不同，食品专业更应关注生产、质量、研发和技术岗位。',
    sourceLabel:'中国盐业集团官网',sourceUrl:'https://www.chinasalt.com.cn/'
  },
  {
    id:'crc-food',org:'华润集团食品饮料相关业务单元',channel:'消费品央企',ownership:'国务院国资委央企',type:'央企',region:['全国','长三角','华南'],
    role:'质量 / 生产技术 / 供应链 / 产品研发',degree:['本科','硕士'],majors:['食品科学与工程类','食品质量与安全','生物与化学相关'],match:'需逐岗确认',headcount:'按业务单元',status:'校招 / 社招滚动关注',year:'2026',
    note:'华润业务跨度很大，必须先锁定具体业务单元和子公司，再看专业限制与地点。',
    sourceLabel:'华润集团招聘平台',sourceUrl:'https://careers.crc.com.cn/index.html'
  },
  {
    id:'anhui-farms-food',org:'安徽省农垦集团有限公司及所属企业',channel:'现代农业与农产品加工',ownership:'安徽省属国有企业',type:'安徽省属国企',region:['安徽'],
    role:'粮食加工 / 食品生产 / 农产品质量 / 供应链',degree:['本科','硕士'],majors:['食品科学与工程类','食品质量与安全','农产品加工相关'],match:'明确匹配',headcount:'按所属企业批次',status:'2026 招聘样本 / 长期关注',year:'2026',
    note:'对想留安徽的人实用度较高，但所属企业和项目地点较分散，很多岗位更靠近产业和生产一线。',
    sourceLabel:'安徽农垦集团招聘信息',sourceUrl:'https://www.ahnk.com.cn/display.php?id=16829'
  },
  {
    id:'bright-food',org:'光明食品（集团）有限公司及所属企业',channel:'地方大型食品国企',ownership:'上海市属国有企业',type:'地方国企',region:['上海','长三角'],
    role:'食品研发 / 品控 / 供应链 / 工厂运营',degree:['本科','硕士'],majors:['食品科学与工程类','食品质量与安全','供应链相关'],match:'大类匹配',headcount:'按子公司批次',status:'长期关注',year:'2026',
    note:'适合想留上海或长三角、又希望进入大型食品产业集团的人。具体专业限制随子公司和岗位变化。',
    sourceLabel:'光明食品集团官方信息',sourceUrl:'https://www.brightfood.com/'
  }
];

export type PostgradSchoolEvidence={
  id:string;school:string;city:string;program:string;code:string;year:string;grade:string;
  examSubjects:string;retestLine:string;plan:string;admission:string;ratio:string;weight:string;
  interpretation:string; sourceLabel:string; sourceUrl:string; extraSourceLabel?:string; extraSourceUrl?:string;
};

export const postgradSchoolEvidence:PostgradSchoolEvidence[]=[
  {
    id:'cau-0832',school:'中国农业大学',city:'北京',program:'食品科学与工程',code:'083200',year:'2026',grade:'A+',
    examSubjects:'学校 2026 专业目录以官方 XLS 为准；报考前必须重新核对当年科目与方向',
    retestLine:'学院自划线，见 2026 食品学院官方分数线附件',plan:'招生计划随推免和正式指标调整',
    admission:'2026 一志愿普通计划拟录取 38 人；该批初试成绩约 360–408，中位数约 378',ratio:'学校复试原则：差额一般不低于 120%',weight:'复试成绩占总成绩一般 30%–50%',
    interpretation:'A+ 学科，但真正难度要看统考剩余名额。2026 普通计划拟录取名单的初试分布能帮助你判断“进复试后”的竞争强度，但下一年不能直接照搬。',
    sourceLabel:'中国农大食品学院 2026 一志愿拟录取名单',sourceUrl:'https://spxy.cau.edu.cn/art/2026/4/3/art_51298_1106165.html',
    extraSourceLabel:'中国农大 2026 硕士招生章程',extraSourceUrl:'https://yz.cau.edu.cn/art/2025/10/9/art_41733_1121083.html'
  },
  {
    id:'jiangnan-0832',school:'江南大学',city:'无锡',program:'食品科学与工程',code:'083200',year:'2026',grade:'A+',
    examSubjects:'101 思想政治理论 + 201 英语（一） + 302 数学（二） + 801 生物化学',
    retestLine:'311（单科 35 / 53）',plan:'2026 拟招生 77 人（实际以最终计划为准）',
    admission:'食品学院 2026 三个硕士专业合计 440 余名考生参加复试',ratio:'实行差额复试',weight:'总成绩 = 初试成绩 + 复试成绩；复试含专业课、综合面试、实验操作',
    interpretation:'食品学科很强，2026 学硕线 311 不是“录取稳线”。计划数、复试人数、复试结构和实验操作都要一起看。',
    sourceLabel:'江南大学食品学院 2026 复试录取细则',sourceUrl:'https://foodsci.jiangnan.edu.cn/info/1172/18986.htm',
    extraSourceLabel:'江南大学 2026 复试分数线',extraSourceUrl:'https://yz.jiangnan.edu.cn/info/1029/3750.htm'
  },
  {
    id:'ncu-0832',school:'南昌大学',city:'南昌',program:'食品科学与工程',code:'083200',year:'2026',grade:'A',
    examSubjects:'101 思想政治理论 + 201 英语（一） + 302 数学（二） + 817 食品生物化学',
    retestLine:'按学院 2026 复试名单 / 学校要求执行',plan:'总计划 101；已录推免 73；拟统考计划 28',
    admission:'2026 统考计划 28 人',ratio:'食品科学与工程复试比例 1:1.5',weight:'以学院当年复试录取细则为准',
    interpretation:'这组数据最能说明为什么“总招生 101”不能直接理解成统考好考：2026 学硕 101 个总计划里，73 个已由推免占用，统考拟招 28。',
    sourceLabel:'南昌大学食品学院 2026 复试录取细则',sourceUrl:'https://sfst.ncu.edu.cn/info/1842/20321.htm',
    extraSourceLabel:'南昌大学 2026 招生专业目录',extraSourceUrl:'https://yjsy.ncu.edu.cn/info/1012/23946.htm'
  },
  {
    id:'njau-0832',school:'南京农业大学',city:'南京',program:'食品科学与工程',code:'083200',year:'2026',grade:'A-',
    examSubjects:'以南京农业大学 2026 招生专业目录中食品科技学院条目为准',
    retestLine:'学院按学校复试要求和当年生源制定',plan:'专业目录计划含推免，统考名额会随实际推免人数调整',
    admission:'学校 2026 硕士总体预计约 3500 人；食品学院需看学院复试细则与拟录取名单',ratio:'分类差额复试 / 分类录取',weight:'统考生按初试与复试综合总成绩排序录取',
    interpretation:'南农专业实力强、产业联系好，但只看学校总招生规模没有意义。应直接追食品科技学院的当年目录、推免结果、复试名单和拟录取名单。',
    sourceLabel:'南京农业大学 2026 硕士招生专业目录',sourceUrl:'https://zsgz.njau.edu.cn/info/1007/1693.htm',
    extraSourceLabel:'南京农业大学 2026 复试录取办法',extraSourceUrl:'https://zsgz.njau.edu.cn/info/1007/1717.htm'
  },
  {
    id:'hfut-0832',school:'合肥工业大学',city:'合肥',program:'食品科学与工程',code:'083200',year:'2026',grade:'安徽重点参考',
    examSubjects:'以合工大 2026 招生目录与考试大纲为准',
    retestLine:'350（单科 35 / 53）',plan:'2026 统考招生计划 16 人（已扣除推免）',
    admission:'学院 083200 计划 16 人；食品工程 086003 全日制计划 79 人',ratio:'学院复试比例 130%',weight:'总成绩 = 初试折合百分制 ×70% + 复试折合百分制 ×30%',
    interpretation:'如果目标是安徽/合肥，这组数据很有参考价值：学硕名额不大且分数线较高，专硕食品工程的计划明显更大，择校时应把“学硕/专硕”一起比较。',
    sourceLabel:'合肥工业大学 2026 分专业招生计划',sourceUrl:'https://yjszs.hfut.edu.cn/2026/0320/c13524a317910/page.htm',
    extraSourceLabel:'合工大食品学院 2026 复试录取细则',extraSourceUrl:'https://spysw.hfut.edu.cn/info/1093/5199.htm'
  },
  {
    id:'ahau-0972',school:'安徽农业大学',city:'合肥',program:'食品科学与工程',code:'097200',year:'2026',grade:'安徽本地参考',
    examSubjects:'以安徽农业大学 2026 学术型专业目录与自命题参考书目为准',
    retestLine:'达到学校一志愿复试基本要求后进入学院复试',plan:'学校公布分专业计划，需结合推免与调剂最终名单核对',
    admission:'2026 设 097200 食品科学与工程、095500 食品与营养等方向',ratio:'按学校及学院当年细则执行',weight:'学院复试为综合素质、专业素质与外语能力考查',
    interpretation:'适合希望留安徽、重视农业食品体系和相对务实报考策略的人。这里更值得比较的是专业方向、导师和最终计划，而不是只看学校层级。',
    sourceLabel:'安徽农业大学 2026 招生专业目录',sourceUrl:'https://yjs.ahau.edu.cn/info/1005/50214.htm',
    extraSourceLabel:'食品与营养学院 2026 复试安排',extraSourceUrl:'https://yjs.ahau.edu.cn/info/1295/53554.htm'
  }
];
