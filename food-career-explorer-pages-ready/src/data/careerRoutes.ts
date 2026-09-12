export type CareerRoute = {
  id:string;
  name:string;
  subtitle:string;
  fit:string[];
  notFit:string[];
  entry:string[];
  middle:string[];
  senior:string[];
  skills:string[];
  jobIds:string[];
  mobility:string;
  reality:string;
};

export const careerRoutes:CareerRoute[] = [
  {
    id:'quality',name:'质量管理线',subtitle:'从检验 / 现场品控，走到 QA、SQE 和质量负责人',
    fit:['细致、规则意识强','愿意跑现场并推动整改','能接受“问题来了先找质量”的责任感'],
    notFit:['非常排斥记录、审核和追责','完全不想进工厂或门店现场'],
    entry:['QC / 微生物检验','在线品控','中央厨房品控'],middle:['QA / 质量体系','供应商质量 SQE','客诉与质量改进'],senior:['质量经理','供应链质量负责人','食品安全负责人'],
    skills:['HACCP / ISO 22000','CAPA 与根因分析','审核与供应商管理','统计与质量工具'],
    jobIds:['qc','microbiology-tech','online-qc','central-kitchen-qc','qa','supplier-quality','quality-improvement','chain-food-safety','cold-chain-quality'],
    mobility:'可转法规、认证审核、采购质量、连锁食品安全；制造业之间迁移性较强。',
    reality:'入门岗位数量多，但现场、倒班和文档工作常见。真正拉开差距的是“能不能把异常闭环”，而不是只会检验。'
  },
  {
    id:'rd',name:'研发技术线',subtitle:'从打样和工艺验证，走到项目负责人和研发管理',
    fit:['喜欢实验、配方和产品','能接受失败与反复验证','愿意补统计、工艺、法规和项目管理'],
    notFit:['希望每天工作完全固定','不喜欢长期做实验和复盘数据'],
    entry:['食品研发助理','工艺研发 / 技术员','感官 / 消费者研究'],middle:['研发工程师','应用研发 / 技术服务','营养健康研发'],senior:['高级研发 / 项目负责人','研发经理','创新平台主管'],
    skills:['配方与工艺设计','感官 / 稳定性 / 货架期','DOE / 数据分析','成本与量产导入'],
    jobIds:['food-rd','process-rd','application-engineer','sensory-research','nutrition-rd','packaging-developer'],
    mobility:'可转产品经理、技术销售、法规注册，也可向工艺、包装、应用研发分化。',
    reality:'硕士在部分研发中心更有优势，但不是所有研发都必须读研。能独立做项目、能量产、能降成本，比“做过很多小试”更值钱。'
  },
  {
    id:'testing-reg',name:'检测 · 法规 · 认证线',subtitle:'从实验室与标准入手，逐渐形成法规和第三方专业壁垒',
    fit:['喜欢标准、证据链和文档','耐心，愿意持续查法规','希望减少倒班、增加专业壁垒'],
    notFit:['非常讨厌文档和法规','不愿持续学习标准更新'],
    entry:['食品检验检测','微生物检验','实验室质量'],middle:['食品法规专员','特殊食品注册','体系审核 / 认证顾问'],senior:['法规经理','实验室技术负责人','高级审核员 / 技术经理'],
    skills:['GB 标准与标签法规','实验室质量体系','法规检索与申报','审核准则 / 风险判断'],
    jobIds:['food-testing','microbiology-tech','lab-quality','food-regulatory','label-compliance','export-compliance','special-food-registration','certification-auditor','food-consulting'],
    mobility:'可转 QA、注册、合规、第三方咨询；有英语和海外法规能力后，可进入出口合规。',
    reality:'起薪未必最高，但经验会积累成壁垒。法规/注册最怕“只会搜标准、不懂业务”，检测最怕“只会按 SOP 做、不会判断异常”。'
  },
  {
    id:'production',name:'生产 · 工程 · 工厂管理线',subtitle:'从生产工艺和现场改善，走到车间、制造和工厂运营管理',
    fit:['执行力强、抗压','愿意从现场开始','对设备、效率和流程改善有兴趣'],
    notFit:['完全不能接受工厂环境和轮班','不喜欢带人或处理突发问题'],
    entry:['生产管培生','生产工艺 / 技术员','设备 / 自动化工程师'],middle:['工艺工程师','生产主管','精益 / 持续改善'],senior:['生产经理','制造经理','工厂运营负责人'],
    skills:['工艺参数与异常分析','OEE / 损耗 / 良率','班组管理','精益改善与项目管理'],
    jobIds:['production-trainee','process-rd','equipment-engineer','production-tech','production-supervisor'],
    mobility:'可转质量、供应链、工艺研发和工厂运营。现场经验对制造型食品企业很有价值。',
    reality:'发展上限不低，但前几年通常辛苦。班次、工厂地点和管理压力，要在 offer 阶段就问清楚。'
  },
  {
    id:'supply',name:'供应链 · 采购线',subtitle:'从计划、采购、冷链与供应商协同，走向端到端供应链管理',
    fit:['喜欢数据和协调','对成本、库存、交付敏感','能接受频繁变化和跨部门沟通'],
    notFit:['希望工作完全不被别人打断','不喜欢谈判和处理突发交付问题'],
    entry:['供应链计划','原料采购','冷链 / 仓储质量'],middle:['品类采购','高级计划','供应商开发 / 质量'],senior:['采购经理','供应链经理','S&OP / 运营负责人'],
    skills:['Excel / SQL / 数据分析','需求与库存管理','谈判与成本拆解','供应商绩效管理'],
    jobIds:['supply-planner','procurement','cold-chain-quality','supplier-quality','supplier-development'],
    mobility:'可转运营、质量、品类管理和商业岗位；食品专业能帮助你理解原料风险与质量约束。',
    reality:'专业匹配度看起来没有研发/QC高，但发展空间常常更宽。真正难的是同时平衡成本、质量、库存和交付。'
  },
  {
    id:'business',name:'产品 · 市场 · 商业线',subtitle:'把食品专业知识转化成产品、客户和增长能力',
    fit:['沟通强、对消费者和商业有兴趣','能接受目标和结果压力','愿意补数据、营销和财务常识'],
    notFit:['只想做纯技术、不想接触业务','不能接受业绩或项目结果考核'],
    entry:['技术销售','产品专员','品类 / 电商运营'],middle:['大客户经理','产品经理','品类运营经理'],senior:['销售总监','品类负责人','业务 / 产品负责人'],
    skills:['客户需求洞察','产品定义与项目推进','商业分析','谈判 / 演示 / 销售漏斗'],
    jobIds:['technical-sales','key-account-sales','product-manager','category-operations','application-engineer'],
    mobility:'可在研发、销售、产品、运营之间形成“T 型”能力；食品技术背景是差异化，不是唯一门槛。',
    reality:'收入和上升弹性更大，但波动也更大。不要只看“工资高”，要看提成口径、客户资源、出差和 KPI。'
  },
  {
    id:'public',name:'体制 · 公共服务线',subtitle:'国考、省考、事业单位、公共检测与监管方向',
    fit:['看重稳定和公共服务价值','能长期准备考试','愿意接受地区、岗位限制和严格流程'],
    notFit:['只因为“不想找工作”而考公','完全不能接受基层、一线或执法岗位'],
    entry:['海关食品监管 / 查检','市场监管','公共检验检测'],middle:['业务骨干','专业技术岗负责人','基层 / 科室骨干'],senior:['按职级与岗位发展','专业技术负责人','管理岗位'],
    skills:['行测 / 申论','职位表筛选与政策阅读','食品安全法规','材料表达与面试'],
    jobIds:['regulator','food-testing'],
    mobility:'体制内与企业路线逻辑不同，优先看岗位限制、服务年限和地域，不要按企业“跳槽思路”理解。',
    reality:'专业对口职位数量有限，但不限专业职位更多。选岗往往比“知道能考什么”更重要。'
  }
];
