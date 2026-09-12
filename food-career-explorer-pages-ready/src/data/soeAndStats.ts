export type SoeProfile={
  id:string; name:string; group:string; ownership:string; region:string[]; match:'很高'|'高'|'中高';
  entry:string[]; evidence:string; degree:string; reality:string; process:string[];
  sourceLabel:string; sourceUrl:string; sourceDate:string; tags:string[];
};

export const soeProfiles:SoeProfile[]=[
  {
    id:'anhui-tobacco',name:'安徽中烟工业有限责任公司',group:'中国烟草系统',ownership:'中央驻皖国有企业（烟草系统）',region:['安徽'],match:'高',
    entry:['技术中心：质量分析与控制（硕士；食品科学与工程 0832 可报）','卷烟厂：生产 / 工艺方向','再造烟叶：工艺方向'],
    evidence:'2026 年高校毕业生招聘 153 人；其中技术中心“质量分析与控制”招 1 人，硕士及以上，专业明确包含食品科学与工程（0832）。另有生产 / 工艺类入口，但要逐岗位核对专业。',
    degree:'本科 / 硕士，具体岗位差异很大',
    reality:'烟草系统竞争通常不低，而且部分卷烟厂、营销中心岗位录用后原则上长期在生产一线或营销一线。不要只看“单位名气”，要逐岗位看培养方向、工作地点和一线要求。',
    process:['官网公告 / 招聘平台报名','资格初审与筛选','笔试','面试','体检 / 考察','公示录用'],
    sourceLabel:'2026 安徽中烟招聘公告与计划表',sourceUrl:'https://ah.huatu.com/2026/0318/3215713.html',sourceDate:'2026-03',tags:['安徽','应届','质量','工艺','技术中心']
  },
  {
    id:'cofco',name:'中粮集团',group:'农粮食品',ownership:'国务院国资委央企',region:['全国'],match:'很高',
    entry:['食品研发','质量安全','检测化验','粮油加工','仓储物流','采购供应链'],
    evidence:'2026 届校园招聘公开岗位类别明确包含食品研发、粮油加工、检测化验、质量安全等。',
    degree:'本科及以上，按岗位核对专业',
    reality:'业务板块很多，同是“中粮”工作内容可能从实验室、工厂到供应链完全不同。更应该按子公司与岗位筛，不要只按集团名投。',
    process:['校招官网投递','简历筛选','综合测评','面试','录用通知'],
    sourceLabel:'中粮 2026 届校园招聘',sourceUrl:'https://campus.51job.com/cofco/about2.html',sourceDate:'2026-06',tags:['全国','校招','研发','质量','检测','供应链']
  },
  {
    id:'sinograin',name:'中国储备粮管理集团',group:'粮食储备',ownership:'国务院国资委央企',region:['全国'],match:'高',
    entry:['仓储保管','质量检验','购销统计 / 轮换管理','粮油质量安全'],
    evidence:'2026 招聘中可见仓储保管等岗位直接接受食品科学与工程类，部分岗位覆盖食品质量与安全。',
    degree:'本科及以上较常见',
    reality:'稳定与粮食安全属性强，但不少岗位在库区或基层直属库，地点、值班、现场作业和职业发展路径要提前确认。',
    process:['中储粮招聘平台投递','资格审查','笔试 / 测评','面试','体检考察','录用'],
    sourceLabel:'中储粮人才招聘入口',sourceUrl:'https://www.sinograin.com.cn/list4.html?navId=37&navPid=7&pgnow=1',sourceDate:'2026',tags:['全国','粮食','仓储','检测','基层']
  },
  {
    id:'ccic',name:'中国检验认证（集团）',group:'检验检测认证',ownership:'国务院国资委央企',region:['全国'],match:'很高',
    entry:['农食安全检测','食品 / 农产品认证','体系审核','实验室质量','客户技术服务'],
    evidence:'集团官方业务明确包含“农食安全”，并拥有 500 多家实验室与广泛检验检测认证网络。',
    degree:'本科 / 硕士，技术岗位按资质与专业要求核对',
    reality:'专业对口度高，但“检测、认证、审核、客户服务”是不同工作形态；审核认证岗位往往沟通和出差更多。',
    process:['招聘公告 / 校招投递','资格筛选','笔试或测评','面试','体检 / 背调','录用'],
    sourceLabel:'中国中检集团简介',sourceUrl:'https://www.ccic.com/gywm/index.html',sourceDate:'2026',tags:['全国','检测','认证','食品安全','实验室']
  },
  {
    id:'china-salt',name:'中国盐业集团',group:'食品 / 盐业',ownership:'中央企业',region:['全国'],match:'中高',
    entry:['质量管理','食品 / 调味品研发','生产工艺','供应链与销售'],
    evidence:'属于食品工业相关中央企业，就业入口更依赖当批次子企业招聘，专业要求需逐岗位核对。',
    degree:'本科及以上，视岗位',
    reality:'“集团招聘”与“子企业招聘”可能分开发布；食品专业更值得关注生产、研发、质量与技术岗位，而不是只搜索集团总部。',
    process:['集团 / 子企业公告','网申','测评 / 笔试','面试','体检背调','录用'],
    sourceLabel:'中国盐业集团官网',sourceUrl:'https://www.chinasalt.com.cn/',sourceDate:'2026',tags:['全国','食品','质量','生产','研发']
  },
  {
    id:'crc',name:'华润集团食品饮料相关板块',group:'消费品 / 食品饮料',ownership:'国务院国资委央企',region:['全国'],match:'中高',
    entry:['质量管理','生产技术','供应链','研发 / 产品','销售与品牌'],
    evidence:'华润为国务院国资委央企，集团招聘平台覆盖多业务板块；食品专业应重点盯具体消费品、食品饮料子公司岗位。',
    degree:'本科及以上，按业务单元与岗位',
    reality:'集团业务极多，“华润”本身不是一个统一工种。需要先锁定子公司，再看专业、地点和岗位属性。',
    process:['华润招聘平台选业务单元','网申','在线测评','多轮面试','录用'],
    sourceLabel:'华润集团招聘平台',sourceUrl:'https://careers.crc.com.cn/index.html',sourceDate:'2026',tags:['全国','消费品','质量','供应链','品牌']
  },
  {
    id:'anhui-farms',name:'安徽省农垦集团',group:'现代农业 / 农产品加工',ownership:'安徽省属国有企业',region:['安徽'],match:'高',
    entry:['粮食加工','农产品质量','茶 / 酒 / 食品生产','农业产业运营','供应链'],
    evidence:'2026 上半年人才招聘面向应届生和社会人员；集团业务公开涵盖粮食加工、茶业、酒业、养殖和农业服务等。',
    degree:'本科 / 硕士，按所属企业岗位',
    reality:'对于想留安徽的人值得长期关注，但集团所属企业地点分散，岗位往往更贴近产业和基层生产。',
    process:['集团招聘公告','邮件 / 在线报名','资格审查','笔试或面试','考察体检','公示录用'],
    sourceLabel:'安徽农垦 2026 招聘公告',sourceUrl:'https://www.ahnk.com.cn/display.php?id=16829',sourceDate:'2026-05',tags:['安徽','省属国企','粮食','农产品','生产']
  }
];

export const postgraduateApplicantTrend=[
  {year:'2023',value:474,label:'474 万',source:'教育部'},
  {year:'2024',value:438,label:'438 万',source:'教育部'},
  {year:'2025',value:388,label:'388 万',source:'教育部'},
  {year:'2026',value:343,label:'343 万',source:'教育部'}
];

export const postgraduateStats=[
  {value:'343 万',label:'2026 研考报名人数',note:'较 2025 年减少 45 万；连续第三年下降。'},
  {value:'-131 万',label:'2023 → 2026 报名变化',note:'474 万降至 343 万，热度下降不等于目标院校更容易。'},
  {value:'看院校',label:'真正有用的数据',note:'统考名额、复试线、进复试人数、拟录取最低分、考试科目，比全国报名数更直接。'}
];

export const civilExamStats=[
  {value:'20,714',label:'2026 国考职位数',note:'计划招录 38,119 人。'},
  {value:'371.8 万',label:'通过资格审查',note:'按计划数粗看约 98:1，但这是全国平均，不能代替具体岗位竞争。'},
  {value:'283.1 万',label:'实际参加笔试',note:'与录用计划数之比约 74:1。'},
  {value:'7,195',label:'2026 安徽省考计划',note:'省直 592 人，市以下机关 6,603 人。'}
];
