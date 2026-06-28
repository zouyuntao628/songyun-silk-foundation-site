const navItems = [
  ["index.html", "首页"],
  ["project.html", "专题导览"],
  ["maming.html", "认识马鸣村"],
  ["researcher.html", "研究者"],
  {
    href: "image-analysis.html",
    label: "图像看马鸣",
    children: [
      ["fieldwork.html", "影像档案"],
      ["symbols.html", "视觉符号"]
    ]
  },
  ["papers.html", "研究文章"],
  ["aigc-lab.html", "AI图像"],
  ["education-tourism.html", "游学体验"],
  ["updates.html", "更新记录"],
  ["sources.html", "信息资料"],
  ["literature.html", "文献综述"],
  ["industry.html", "蚕丝被"]
];

function renderNavItem(item, active) {
  if (Array.isArray(item)) {
    const [href, label] = item;
    return `<a class="${active === href ? "active" : ""}" href="${href}">${label}</a>`;
  }
  const isActive = active === item.href || item.children.some(([href]) => active === href);
  return `
    <div class="nav-group ${isActive ? "active" : ""}">
      <a class="nav-parent ${active === item.href ? "active" : ""}" href="${item.href}">${item.label}</a>
      <div class="subnav">
        ${item.children.map(([href, label]) => `<a class="${active === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
      </div>
    </div>`;
}

function injectShell(active) {
  const topbar = document.querySelector("[data-topbar]");
  if (topbar) {
    topbar.innerHTML = `
      <div class="nav">
        <a class="brand" href="index.html">
          <span>马鸣村宋韵丝绸文化</span>
          <small>蚕桑记忆 / 江南水乡 / 蚕丝被 / 影像与研究</small>
        </a>
        <div class="navlinks">
          ${navItems.map(item => renderNavItem(item, active)).join("")}
        </div>
      </div>`;
  }
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <span>马鸣村宋韵丝绸文化展示：蚕桑、村落、影像、文献与蚕丝被故事</span>
        <span>面向对马鸣村、江南蚕桑文化和宋韵生活美学感兴趣的读者。</span>
      </div>`;
  }
}

const papers = [
  {
    title: "从都城审美到乡村记忆：南宋畿辅视域下宋韵丝绸文化的地方化表达",
    status: "拟写 / 总论型论文",
    focus: "建立“临安都城-浙北畿辅-蚕桑乡村-当代转化”的解释框架。",
    materials: "宋代文献、地方志、丝绸史、区域文化研究、马鸣村田野材料。"
  },
  {
    title: "浙北蚕桑乡村宋韵丝绸文化的视觉符号体系与影像转译研究",
    status: "优先推进 / 中期成果",
    focus: "把桑、蚕、丝、织、寝居、村落、水网、身体劳动等材料转化为艺术学对象。",
    materials: "田野照片、短视频、老物件、蚕丝被制作过程、展陈和品牌影像样本。"
  },
  {
    title: "从“泛古风”到文化真实性：AIGC生成宋韵丝绸影像的误读机制与评价标准",
    status: "重点打造 / 前沿论文",
    focus: "分析AIGC图像中的泛古风化、历史错置、劳动消失、产品空心化与跨文化误读。",
    materials: "提示词实验、AI图像样本、真实田野影像对照、专家和受众评价。"
  },
  {
    title: "从功能寝具到文化产品：蚕丝被品牌叙事的宋韵丝绸文化转化机制",
    status: "拟写 / 应用转化",
    focus: "研究蚕丝被如何从材质功能卖点转向地方文化、工艺信任和生活美学叙事。",
    materials: "企业访谈、产品包装、直播短视频、电商页面、文旅体验路线。"
  },
  {
    title: "影像民族志视域下蚕桑乡村文化记忆的档案建构研究：以桐乡马鸣村为例",
    status: "材料积累 / 个案论文",
    focus: "讨论影像档案如何保存村民口述、身体技艺、物件记忆和村落空间。",
    materials: "口述史、村落空间记录、老照片、蚕具图像、声音和影像资料。"
  },
  {
    title: "仪式、身体与水乡空间：蚕花水会及高杆船技的影像叙事研究",
    status: "专题储备",
    focus: "从仪式叙事、身体表演和水乡空间三方面分析节庆影像的传播价值。",
    materials: "蚕花水会影像、非遗资料、短视频样本、现场访谈。"
  }
];

const literatureNeeds = [
  ["宋韵文化理论论文", "界定宋韵文化的概念、精神实质、生活美学和当代价值，避免把宋韵写成普通古风。", "宋韵文化与生活美学", "8-10篇", "高", "已列线索，需补正式引文"],
  ["南宋临安 / 两浙区域文化论文", "说明临安都城审美、两浙区域支撑、杭嘉湖水网和浙北乡村之间的文脉关系。", "南宋临安、两浙区域与地方文脉", "6-8篇", "高", "需补地方史与区域文化论文"],
  ["蚕桑丝绸史与非遗保护论文", "回答蚕桑丝绸如何构成生产、工艺、民俗、工具和生活用品相互连接的文化系统。", "蚕桑丝绸、非遗民俗与地方记忆", "10-12篇", "高", "已有部分权威来源，需补论文"],
  ["桐乡 / 嘉兴 / 杭嘉湖地方文化论文", "补足马鸣村、桐乡、嘉兴和杭嘉湖平原的地方文献基础，避免只有宏观宋韵叙述。", "南宋临安、两浙区域与地方文脉", "6-8篇", "高", "待重点检索地方志和地方研究"],
  ["影像民族志与视觉人类学论文", "为田野影像、口述档案、空间记录、身体技艺和物件图像分析提供方法论。", "影像民族志、视觉符号与传播方法", "6-8篇", "中高", "已有方法入口，需补中文研究"],
  ["非遗影像传播与短视频传播论文", "解释蚕花水会、高杆船技和蚕桑技艺在纪录影像、短视频和展陈影像中的叙事机制。", "节庆民俗、身体技艺与共同体记忆", "5-6篇", "中高", "待补非遗传播案例论文"],
  ["AIGC / 数字文化遗产 / 文化真实性论文", "支撑AI生成传统文化图像时的偏差识别、真实性评价、提示词规范和误读类型分析。", "AIGC、数字文化与传统文化真实性", "6-8篇", "高", "已有英文前沿来源，需补中文论文"],
  ["文旅融合、地方品牌与文化产品转化论文", "说明地方文化如何进入体验设计、品牌叙事、公共美育和乡村文旅传播链条。", "文旅传播、产业转化与蚕丝被叙事", "6-8篇", "中", "已有资料线索，需补学术论文"],
  ["蚕丝被产业、寝居生活美学和品牌叙事论文", "把蚕丝被从功能寝具推进为材料信任、工艺信任、地方信任和宋韵生活美学的文化产品。", "文旅传播、产业转化与蚕丝被叙事", "4-6篇", "中高", "需重点补产业与品牌研究"],
  ["跨文化传播与东方生活美学论文", "为丝绸文化、蚕丝被和宋韵生活美学的国际传播提供表达边界和视觉转译依据。", "文旅传播、产业转化与蚕丝被叙事", "3-5篇", "中", "后续扩展采集"]
];

const literature = [
  ["宋韵文化", "宋代审美、宋画、器物、园林、服饰、生活美学", "说明既有研究多集中于都城审美和经典艺术对象。", 16],
  ["南宋临安与畿辅", "临安城市文化、两浙区域、水网交通、地方供给", "支撑“都城-畿辅-乡村”的文脉解释。", 12],
  ["蚕桑丝绸文化", "蚕桑史、丝绸史、嘉兴湖州蚕桑传统、民俗信仰", "说明丝绸文化作为宋韵地方化研究的中介对象。", 14],
  ["非遗与地方记忆", "蚕花水会、高杆船技、村落节庆、口述史", "支撑马鸣村及周边文化资源的活态研究。", 10],
  ["影像民族志", "纪录影像、乡村影像、身体技艺、影像档案", "为田野影像采集、叙事分析和档案建构提供方法。", 10],
  ["数字文化与AIGC", "AI图像生成、传统文化数字化、文化真实性、误读风险", "支撑AIGC审美边界和评价标准研究。", 10],
  ["文旅传播", "乡村文旅、体验设计、地方品牌、公共美育", "支撑“参观-体验-拍摄-消费-分享”的传播路径。", 10],
  ["产业转化与国际传播", "文化产品、品牌叙事、跨境电商视觉、东方生活美学", "支撑蚕丝被品牌叙事和出海传播研究。", 10]
];

const resources = [
  ["村落空间", "马鸣村村道、水系、庭院、桑园、蚕房、作坊、民宿与展陈空间", "空间影像、路线叙事、文旅动线设计"],
  ["蚕桑生产", "采桑、喂蚕、剥茧、拉丝、铺被、缝制、包装等生产环节", "劳动影像、身体符号、产品工艺叙事"],
  ["地方记忆", "村民口述、老照片、家族记忆、旧工具、奖状证书、地方传说", "口述史、影像档案、展陈文本"],
  ["节庆民俗", "蚕花水会、高杆船技、祈丰收仪式、集体观看和地方表演", "仪式叙事、短视频样本、非遗传播研究"],
  ["蚕丝被产业", "企业展厅、包装、直播间、产品详情页、品牌短片、客户评价", "产业传播样本库、品牌叙事模型"],
  ["文旅体验", "参观、制作体验、民宿寝居场景、伴手礼、研学活动、游客分享", "文旅传播路径、公共美育课程"]
];

const interviewGroups = [
  ["老蚕农与村民长者", "采集蚕桑生产记忆、家庭经验、村落变化与地方称谓。"],
  ["蚕丝被手艺人与女工", "记录剥茧、拉丝、铺被、缝制等身体技艺与材料知识。"],
  ["蚕丝被企业主与品牌负责人", "了解产业链、产品定位、传播策略、销售渠道与出海想法。"],
  ["村干部与文旅运营者", "了解村庄资源、文旅规划、活动组织和公共空间建设。"],
  ["非遗传承人与节庆组织者", "记录蚕花水会、高杆船技等仪式、表演和地方意义。"],
  ["游客与研学参与者", "了解体验感受、文化理解、消费动机和分享意愿。"],
  ["民宿经营者与乡村创业者", "观察宋韵丝绸文化如何进入寝居、空间和生活方式场景。"],
  ["高校师生与公共美育参与者", "评估影像档案、视觉符号库和AIGC实验的教育转化价值。"]
];

const symbols = [
  ["物象符号", "桑叶、蚕茧、丝线、织物、蚕丝被、蚕具、被胎、包装材料", "建立材料真实性和产品文化识别。"],
  ["空间符号", "桑园、蚕房、庭院、水网、村道、作坊、展厅、民宿、直播间", "形成从村落到文旅体验的空间叙事。"],
  ["身体符号", "采桑、喂蚕、剥茧、拉丝、铺被、折叠、触摸、试睡", "突出劳动、手感和身体技艺，避免景观空心化。"],
  ["仪式符号", "蚕花水会、高杆船技、祈丰收、集体观看、节庆行进", "连接蚕桑信仰、村落共同体和影像传播。"],
  ["审美符号", "素雅、清润、轻盈、含蓄、自然材料、日常生活美学", "区分宋韵丝绸审美与泛古风、国潮风、江南滤镜。"],
  ["传播符号", "短视频封面、品牌标识、电商详情页、直播场景、英文页面", "分析传统文化如何进入当代传播和消费系统。"]
];

const brandSamples = [
  ["电商详情页", "材质、克重、价格、保暖性、舒适度", "地方文化和工艺叙事弱，常缺少村落与人。", "加入蚕桑来源、手工过程、寝居美学和文化故事。"],
  ["短视频平台", "开箱、拉丝、燃烧测试、直播讲解", "流量强但叙事碎片化，容易停留在验证真假。", "用人物、空间、工艺和产品使用场景构成系列短片。"],
  ["企业展厅", "产品陈列、证书、生产流程、品牌荣誉", "文化层次常与销售展示分离。", "把蚕桑记忆、宋韵审美和马鸣村空间纳入展陈线索。"],
  ["文旅伴手礼", "礼盒、轻量产品、民宿体验、研学活动", "产品和游线之间缺少连续叙事。", "建立“看见蚕桑-触摸丝绸-带走文化”的转化链。"],
  ["跨境页面", "natural silk、premium bedding、comfort、healthy sleep", "海外受众难理解中国蚕桑文化和宋韵生活美学。", "用材料、工艺、安睡生活和heritage silk替代刻板东方符号。"]
];

const imageAnalyses = [
  {
    image: "assets/analysis-village.svg",
    title: "村落空间图像分析",
    type: "空间影像",
    question: "马鸣村的水网、村道、庭院、桑园和作坊如何构成蚕桑文化的空间叙事？",
    points: "重点观察入口路径、生产空间、生活空间和展示空间之间的关系，分析游客如何在行走中理解蚕桑文化。"
  },
  {
    image: "assets/analysis-craft.svg",
    title: "蚕丝被工艺图像分析",
    type: "身体与材料",
    question: "剥茧、拉丝、铺被、缝制等动作如何让蚕丝被从功能寝具转化为有工艺记忆的文化产品？",
    points: "重点分析手部动作、材料质感、劳动节奏和人物叙述，避免产品传播只剩白底图和参数卖点。"
  },
  {
    image: "assets/analysis-symbol.svg",
    title: "宋韵丝绸符号图像分析",
    type: "视觉符号",
    question: "桑叶、蚕茧、丝线、水网、素雅色彩和寝居场景如何共同形成宋韵丝绸文化的视觉识别？",
    points: "重点区分宋韵丝绸审美与普通古风、国潮风、江南滤镜，建立可用于影像、展陈和品牌设计的符号规范。"
  },
  {
    image: "assets/analysis-aigc.svg",
    title: "AIGC生成图像误读分析",
    type: "数字生成",
    question: "AI生成宋韵丝绸文化图像时，为什么容易出现泛古风化、历史错置、劳动消失和产品空心化？",
    points: "重点比较真实田野图像与AI生成图像，建立历史准确性、地方真实性、劳动可见性和跨文化理解度等评价维度。"
  }
];

const publicPhotos = [
  {
    image: "assets/maming-panorama.png",
    title: "马鸣村全景图",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察马鸣村的水乡肌理、聚落布局和江南村落整体气质。"
  },
  {
    image: "assets/maming-street.png",
    title: "马鸣老街街景",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察老街尺度、街巷生活、传统店铺和日常烟火气。"
  },
  {
    image: "assets/maming-teahouse.jpg",
    title: "马鸣老街茶馆",
    source: "浙江新闻《洲泉镇马鸣村：江南古村时光慢》",
    url: "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    note: "适合观察老街清晨生活、茶馆社交和村民日常节奏。"
  },
  {
    image: "assets/maming-temple.jpg",
    title: "马鸣老庙",
    source: "浙江新闻《洲泉镇马鸣村：江南古村时光慢》",
    url: "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    note: "适合观察村名传说、庙宇空间和地方记忆之间的关系。"
  },
  {
    image: "assets/maming-waterway.png",
    title: "村落水乡空间",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察水、桥、岸、房屋之间的关系，以及水网如何塑造村落体验。"
  },
  {
    image: "assets/maming-lotus.jpg",
    title: "野林滩荷塘",
    source: "浙江新闻《洲泉镇马鸣村：江南古村时光慢》",
    url: "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    note: "适合扩展马鸣村周边湿地、荷塘和乡村游线的生态图像。"
  },
  {
    image: "assets/maming-wetland.jpg",
    title: "野林滩湿地",
    source: "浙江新闻《洲泉镇马鸣村：江南古村时光慢》",
    url: "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    note: "适合观察马鸣村周边水乡生态、湿地景观和乡村旅游延展。"
  },
  {
    image: "assets/maming-cinema-museum.jpeg",
    title: "光影故事馆",
    source: "浙江在线《一线行丨一方老银幕让乡村焕发新生机》",
    url: "https://zjnews.zjol.com.cn/yc/qmt/202506/t20250621_31067560.shtml",
    note: "适合观察乡村电影记忆、放映机展陈和马鸣村光影叙事。"
  },
  {
    image: "assets/cuz-maming-field-1.png",
    title: "文化特派员进入马鸣村现场",
    source: "浙江传媒学院《省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作》",
    url: "https://www.cuz.edu.cn/info/1481/224742.htm",
    note: "适合观察文化特派员、地方干部和高校团队进入村庄现场的工作场景。"
  },
  {
    image: "assets/cuz-maming-field-2.png",
    title: "马鸣村调研交流现场",
    source: "浙江传媒学院《省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作》",
    url: "https://www.cuz.edu.cn/info/1481/224742.htm",
    note: "适合观察高校、地方和村庄围绕乡村文化建设展开对接的场景。"
  },
  {
    image: "assets/cuz-maming-field-3.png",
    title: "马鸣村村落参观与调研",
    source: "浙江传媒学院《省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作》",
    url: "https://www.cuz.edu.cn/info/1481/224742.htm",
    note: "适合观察马鸣村现场调研、村落空间和文化特派员实践之间的关系。"
  },
  {
    image: "assets/cuz-maming-field-4.png",
    title: "文化特派员座谈交流",
    source: "浙江传媒学院《省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作》",
    url: "https://www.cuz.edu.cn/info/1481/224742.htm",
    note: "适合观察文化特派员机制如何通过座谈、对接和地方协作展开。"
  },
  {
    image: "assets/cuz-maming-field-5.png",
    title: "马鸣村文化特派员工作合影",
    source: "浙江传媒学院《省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作》",
    url: "https://www.cuz.edu.cn/info/1481/224742.htm",
    note: "适合记录研究者、地方和高校协同推进马鸣村文化建设的工作节点。"
  },
  {
    image: "assets/maming-folk.png",
    title: "马鸣村民俗与日常场景",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察村落公共空间、民俗活动和地方生活的可见方式。"
  },
  {
    image: "assets/maming-gaogan.png",
    title: "高杆船技展示",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察身体技艺、仪式表演和水乡民俗如何被影像化。"
  },
  {
    image: "assets/maming-water-stage.png",
    title: "蚕花水会中的水上戏台",
    source: "央广网《中国传统村落丨浙江桐乡洲泉镇马鸣村》",
    url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    note: "适合观察节庆观看关系、船台空间和江南水上民俗。"
  },
  {
    image: "assets/canhua-2025-gaogan.jpg",
    title: "2025蚕花水会高杆船技",
    source: "新华网《江南水乡举办春季民俗“蚕花水会”》",
    url: "https://www.news.cn/photo/20250404/cd0b491ec2f046f583bf1c3f72cbca35/c.html",
    note: "适合观察高杆船技的身体平衡、水面表演和节庆现场。"
  },
  {
    image: "assets/canhua-2025-dragon.jpg",
    title: "2025蚕花水会舞龙活动",
    source: "新华网《江南水乡举办春季民俗“蚕花水会”》",
    url: "https://www.news.cn/photo/20250404/cd0b491ec2f046f583bf1c3f72cbca35/c.html",
    note: "适合观察蚕花水会中的巡游、表演和群众性节庆气氛。"
  },
  {
    image: "assets/canhua-2025-parade.jpg",
    title: "2025蚕花巡游",
    source: "新华网《江南水乡举办春季民俗“蚕花水会”》",
    url: "https://www.news.cn/photo/20250404/cd0b491ec2f046f583bf1c3f72cbca35/c.html",
    note: "适合观察请蚕花、祭蚕花、游蚕花等民俗活动的影像表达。"
  },
  {
    image: "assets/canhua-2025-dragonboat.jpg",
    title: "2025蚕花水会龙舟竞渡",
    source: "新华网《江南水乡举办春季民俗“蚕花水会”》",
    url: "https://www.news.cn/photo/20250404/cd0b491ec2f046f583bf1c3f72cbca35/c.html",
    note: "适合观察水上竞渡、集体参与和水乡节庆空间。"
  },
  {
    image: "assets/tongxiang-canhua-1.jpg",
    title: "桐乡蚕花水会现场",
    source: "浙江在线/嘉兴频道报道",
    url: "https://jx.zjol.com.cn/202304/t20230406_25603389.shtml",
    note: "适合观察蚕花水会作为清明时节蚕桑民俗活动的传播场景。"
  },
  {
    image: "assets/tongxiang-canhua-2.jpg",
    title: "高杆船技与节庆观看",
    source: "浙江在线/嘉兴频道报道",
    url: "https://jx.zjol.com.cn/202304/t20230406_25603389.shtml",
    note: "适合观察高杆船技的身体风险、观看人群和短视频传播潜力。"
  },
  {
    image: "assets/silk-quilt-craft-1.png",
    title: "手工蚕丝被拉制",
    source: "公开网页图片：洲泉蚕丝被手工制作相关报道",
    url: "https://house.leju.com/",
    note: "适合观察丝绵拉制、多人协作和手工蚕丝被的材料转化过程。"
  },
  {
    image: "assets/silk-quilt-craft-2.png",
    title: "丝绵被胎整理",
    source: "公开网页图片：洲泉蚕丝被手工制作相关报道",
    url: "https://house.leju.com/",
    note: "适合观察丝绵铺展、被胎整理和产品工艺可信度。"
  },
  {
    image: "assets/silk-quilt-craft-3.png",
    title: "蚕丝被作坊场景",
    source: "公开网页图片：洲泉蚕丝被手工制作相关报道",
    url: "https://house.leju.com/",
    note: "适合观察作坊空间、手工劳动和产业传播图像。"
  },
  {
    image: "assets/ifeng-silk-quilt-cover.png",
    title: "蚕丝被品牌传播封面",
    source: "凤凰网凰家尚品蚕丝被报道",
    url: "https://mall.ifeng.com/c/8dwZCIo6AKS",
    note: "适合观察蚕丝被在电商和内容营销中如何被包装为高品质家居产品。"
  },
  {
    image: "assets/ifeng-silk-quilt-product-1.jpg",
    title: "蚕丝被产品展示",
    source: "凤凰网凰家尚品蚕丝被报道",
    url: "https://mall.ifeng.com/c/8dwZCIo6AKS",
    note: "适合观察产品图片如何突出柔软、洁白和寝居体验。"
  },
  {
    image: "assets/ifeng-silk-quilt-product-2.jpg",
    title: "蚕丝被家居场景",
    source: "凤凰网凰家尚品蚕丝被报道",
    url: "https://mall.ifeng.com/c/8dwZCIo6AKS",
    note: "适合观察蚕丝被如何从功能寝具转化为家居生活方式图像。"
  },
  {
    image: "assets/ifeng-silk-quilt-detail.jpg",
    title: "蚕丝被材料细节",
    source: "凤凰网凰家尚品蚕丝被报道",
    url: "https://mall.ifeng.com/c/8dwZCIo6AKS",
    note: "适合观察丝绵、材质细节和产品可信度如何在图像中表达。"
  },
  {
    image: "assets/ifeng-silk-quilt-scene.jpg",
    title: "蚕丝被生活场景",
    source: "凤凰网凰家尚品蚕丝被报道",
    url: "https://mall.ifeng.com/c/8dwZCIo6AKS",
    note: "适合观察寝居场景如何把蚕丝被转化为生活美学消费。"
  }
];

const projectModules = [
  ["历史文脉", "梳理南宋临安都城文化、两浙区域和浙北蚕桑乡村之间的历史关联，建立“都城-畿辅-乡村”的解释框架。"],
  ["田野档案", "采集马鸣村及周边蚕桑文化的口述史、空间影像、物件图像、节庆影像和蚕丝被产业传播材料。"],
  ["视觉符号", "提取桑、蚕、丝、织、寝居、村落、水网、身体劳动等视觉符号，形成宋韵丝绸文化视觉符号体系。"],
  ["影像叙事", "分析纪录影像、短视频、展陈影像、品牌影像和AIGC图像如何组织地方文化记忆。"],
  ["文旅传播", "围绕参观、体验、拍摄、消费、分享和公共美育构建马鸣村蚕桑文化传播路径。"],
  ["产业转化", "以蚕丝被为当代产品载体，研究其如何从功能寝具转化为东方生活美学和地方文化产品。"]
];

const aigcExperiments = [
  ["宋韵丝绸文化场景生成", "测试AI是否能理解宋韵审美、江南水网、丝绸材料和乡村生活之间的关系。", "容易把宋韵简化为汉服、灯笼、亭台楼阁和柔光古风。"],
  ["蚕桑乡村空间生成", "测试AI能否生成桑园、蚕房、村道、水系、作坊和真实乡村空间。", "容易生成网红古镇或旅游景区，缺少生产性和地方性。"],
  ["蚕丝被制作工艺生成", "测试AI能否呈现剥茧、拉丝、铺被、缝制等真实身体动作。", "容易让劳动消失，只留下白色被子、柔光卧室和产品摆拍。"],
  ["宋韵寝居生活生成", "测试AI如何表达清润、素雅、轻盈、含蓄的寝居生活美学。", "容易混入明清家具、日式侘寂或现代酒店空间。"],
  ["海外传播视觉生成", "测试AI如何为海外受众表达中国丝绸寝居产品。", "容易使用龙、红金、宫廷、神秘东方等刻板符号。"]
];

const educationTourism = [
  ["公共美育课程", "面向高校学生、中小学研学和社区公众，设计宋韵丝绸文化图像观察、田野摄影、短视频创作和AIGC生成工作坊。"],
  ["村落影像展陈", "将口述史、老照片、蚕具图像、工艺视频和AIGC对比图像组织为村落展陈或流动展览。"],
  ["蚕桑体验路线", "设计“看见蚕桑-触摸丝绸-理解工艺-带走文化”的体验路线，连接桑园、作坊、展厅、民宿和产品。"],
  ["短视频传播脚本", "围绕人物、工艺、空间、节庆和产品五类叙事，形成适合抖音、小红书和视频号的系列脚本。"],
  ["文旅伴手礼叙事", "把蚕丝被及丝绸小件从普通商品转化为承载马鸣村记忆、宋韵审美和东方寝居文化的文旅产品。"],
  ["国际传播素材包", "形成英文关键词、跨文化图像规范、产品故事和海外页面视觉建议，避免刻板东方化表达。"]
];

const updates = [
  ["2026", "网站搭建", "建立“马鸣村宋韵丝绸文化”网站，形成首页、认识马鸣村、研究者、图像看马鸣、影像档案、视觉符号、文献综述和蚕丝被等页面。"],
  ["2026", "论文储备", "形成“地方化表达”“视觉符号与影像转译”“AIGC审美边界”“蚕丝被品牌叙事”等论文选题谱系。"],
  ["2026", "资料框架", "建立马鸣村及周边蚕桑文化资源清单、访谈对象清单、文献综述结构和蚕丝被品牌传播样本库。"],
  ["后续", "田野更新", "持续追加真实田野照片、访谈摘录、蚕丝被工艺影像、节庆记录和村落空间图像。"],
  ["后续", "成果发布", "持续追加论文发表信息、会议交流、展览活动、公共美育课程、短视频样片和文旅合作成果。"]
];

const paperImages = [
  "assets/maming-panorama.png",
  "assets/cuz-maming-field-3.png",
  "assets/analysis-aigc.svg",
  "assets/ifeng-silk-quilt-detail.jpg",
  "assets/maming-cinema-museum.jpeg",
  "assets/canhua-2025-gaogan.jpg"
];

const interviewImages = [
  "assets/maming-teahouse.jpg",
  "assets/silk-quilt-craft-1.png",
  "assets/ifeng-silk-quilt-cover.png",
  "assets/cuz-maming-field-4.png",
  "assets/canhua-2025-gaogan.jpg",
  "assets/maming-lotus.jpg",
  "assets/ifeng-silk-quilt-scene.jpg",
  "assets/cuz-maming-field-2.png"
];

const projectModuleImages = [
  "assets/maming-panorama.png",
  "assets/cuz-maming-field-1.png",
  "assets/analysis-symbol.svg",
  "assets/maming-cinema-museum.jpeg",
  "assets/maming-teahouse.jpg",
  "assets/ifeng-silk-quilt-scene.jpg"
];

const educationImages = [
  "assets/cuz-maming-field-3.png",
  "assets/maming-cinema-museum.jpeg",
  "assets/silk-quilt-craft-2.png",
  "assets/canhua-2025-parade.jpg",
  "assets/ifeng-silk-quilt-product-2.jpg",
  "assets/analysis-aigc.svg"
];

const aigcImages = [
  "assets/analysis-symbol.svg",
  "assets/maming-waterway.png",
  "assets/silk-quilt-craft-3.png",
  "assets/ifeng-silk-quilt-scene.jpg",
  "assets/analysis-aigc.svg"
];

const updateImages = [
  "assets/maming-panorama.png",
  "assets/cuz-maming-field-5.png",
  "assets/maming-cinema-museum.jpeg",
  "assets/silk-quilt-craft-1.png",
  "assets/canhua-2025-dragon.jpg"
];

const sourceHighlightImages = [
  "assets/tongxiang-canhua-1.jpg",
  "assets/maming-street.png",
  "assets/canhua-2025-gaogan.jpg",
  "assets/cuz-maming-field-1.png",
  "assets/analysis-village.svg"
];

const infoGroupImages = {
  "马鸣村信息": "assets/maming-waterway.png",
  "蚕桑非遗": "assets/tongxiang-canhua-2.jpg",
  "节庆民俗": "assets/canhua-2025-dragonboat.jpg",
  "文化特派员": "assets/cuz-maming-field-2.png",
  "美育文旅": "assets/maming-cinema-museum.jpeg",
  "产业传播": "assets/ifeng-silk-quilt-detail.jpg",
  "学术线索": "assets/analysis-symbol.svg"
};

function imageAt(images, index) {
  return images[index % images.length];
}

function sourceImage(item, index = 0) {
  const text = `${item.title}${item.type}${item.org}${item.summary}${item.use}`;
  if (/电影|光影|放映|故事馆/.test(text)) return "assets/maming-cinema-museum.jpeg";
  if (/高杆船技/.test(text)) return "assets/canhua-2025-gaogan.jpg";
  if (/蚕花水会|蚕花会|民俗|节庆|水上庙会/.test(text)) return "assets/canhua-2025-parade.jpg";
  if (/蚕丝被|丝绵|产业|电商|品牌|出海/.test(text)) return "assets/ifeng-silk-quilt-detail.jpg";
  if (/文化特派员|丁瑶瑶|丁摇摇|高校/.test(text)) return "assets/cuz-maming-field-1.png";
  if (/博物馆|展陈|图片展|美育|艺术乡建|礼堂/.test(text)) return "assets/maming-cinema-museum.jpeg";
  if (/非遗|UNESCO|桑蚕丝织|蚕桑丝织/.test(text)) return "assets/tongxiang-canhua-1.jpg";
  if (/马鸣村|传统村落|老街|水网|规划/.test(text)) return "assets/maming-waterway.png";
  return imageAt(sourceHighlightImages, index);
}

const sourceItems = [
  {
    "title": "Sericulture and silk craftsmanship of China",
    "type": "国际非遗",
    "org": "UNESCO",
    "url": "https://ich.unesco.org/en/RL/sericulture-and-silk-craftsmanship-of-china-00197",
    "summary": "联合国教科文组织非遗名录页面说明，中国蚕桑丝织技艺分布于浙江、江苏、四川等地，具有悠久历史。",
    "use": "用于理解马鸣村背后的世界非遗背景、丝绸文化国际传播和跨文化表达问题。"
  },
  {
    "title": "中国传统桑蚕丝织技艺",
    "type": "国家非遗资料",
    "org": "中国非物质文化遗产网",
    "url": "https://www.ihchina.cn/sangcansi.html",
    "summary": "页面将传统桑蚕丝织技艺界定为栽桑、养蚕、缫丝、染色、丝织及相关工具、产品和民俗活动的整体系统。",
    "use": "支撑视觉符号库中物象、身体、仪式、工艺和传播符号的分类。"
  },
  {
    "title": "天蚕灵机：中国蚕桑丝织技艺非物质文化遗产展",
    "type": "博物馆展陈",
    "org": "中国丝绸博物馆",
    "url": "https://www.chinasilkmuseum.com/zz/info_17.aspx?itemid=31423",
    "summary": "中国丝绸博物馆介绍该常设展览覆盖蚕桑习俗、制丝印染、织绣技艺等内容，2024年8月1日改造提升后重新开放。",
    "use": "为本网站的展陈转化、公共美育和图像分析提供参照。"
  },
  {
    "title": "浙江桐乡蚕桑文化系统保护与发展规划",
    "type": "规划资料",
    "org": "公开规划PDF",
    "url": "https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3159/site/attach/0/f9d0254c63ab4363921ce477e994a780.pdf",
    "summary": "规划资料涉及马鸣村马鸣老街、蚕桑博物馆、桑园观光游等节点，并提到桐乡蚕丝加工产品包括蚕丝被和濮绸。",
    "use": "支撑马鸣村空间、游线、产业和文化资源清单。"
  },
  {
    "title": "浙江省桐乡市马鸣村",
    "type": "村落介绍",
    "org": "联盟中国",
    "url": "https://union.china.com.cn/zhuanti/txt/2019-11/07/content_40951075.html",
    "summary": "村落介绍资料提到马鸣村建有蚕桑丝织展示馆，馆内包含蚕丝被、丝绵制品等展示和购物空间。",
    "use": "支撑马鸣村作为蚕桑文化展示和蚕丝被产业观察样本。"
  },
  {
    "title": "浙江桐乡举办“蚕花水会” 再现非遗“高杆船技”",
    "type": "新闻报道",
    "org": "新华社",
    "url": "https://h.xinhuaxmt.com/vh512/share/11958826",
    "summary": "报道介绍双庙渚蚕花水会在桐乡和嘉兴具有知名度，旧时蚕农于清明时节祈祷桑蚕丰收。",
    "use": "支撑节庆民俗、仪式影像和文旅传播研究。"
  },
  {
    "title": "桐乡高杆船技传承人屠松根亮相央视",
    "type": "新闻报道",
    "org": "浙江新闻",
    "url": "https://zjnews.zjol.com.cn/zjnews/jxnews/201904/t20190408_9850414.shtml",
    "summary": "报道提到高杆船技起源于明末清初，2011年列入第三批国家级非遗名录，并常在清明期间双庙渚蚕花水会中亮相。",
    "use": "支撑高杆船技的非遗地位、身体技艺和仪式传播分析。"
  },
  {
    "title": "让村里的蚕桑文化有意思有活力",
    "type": "文化特派员案例",
    "org": "浙江日报 / 浙江在线",
    "url": "https://zjnews.zjol.com.cn/zjnews/202501/t20250107_30756575.shtml",
    "summary": "文章记录文化特派员围绕八泉村桑蚕丝被和蚕桑文化开展传创实践，体现文化特派员机制与丝绸产品转化的结合。",
    "use": "为研究者文化特派员实践、蚕丝被产品叙事和地方文化转化提供参照案例。"
  },
  {
    "title": "从三场艺术展到一本新书，看洲泉如何以艺术乡建赋能乡村振兴",
    "type": "艺术乡建新闻",
    "org": "潮新闻",
    "url": "https://tidenews.com.cn/news.html?id=3336268",
    "summary": "报道提到洲泉作为“中国蚕丝被名镇”的地方产业背景，并涉及马鸣村艺术乡建线索。",
    "use": "支撑美育文旅、艺术乡建和产业转化板块的外部语境。"
  },
  {
    "title": "宋韵文化的概念界定与认识维度",
    "type": "理论参考",
    "org": "社科在线 / 浙江在线",
    "url": "https://skzx.zjol.com.cn/ch133/system/2024/01/17/034508732.shtml",
    "summary": "文章强调清晰界定宋韵文化概念、形态、精神实质和当代价值，是推进宋韵文化传世工程的重要基础。",
    "use": "支撑专题导览中对宋韵文化概念边界和当代转化的说明。"
  },
  {
    "title": "浙江丝绸文化与旅游融合发展创新路径探索",
    "type": "论文线索",
    "org": "SciEngine开放PDF",
    "url": "https://www.sciengine.com/doi/pdfView/389D6FEE72AE458F9C9C10833F272467",
    "summary": "论文从浙江丝绸文化出发讨论丝绸文化与旅游融合，涉及蚕桑文化园、企业展示中心和丝绸市场等文旅形态。",
    "use": "支撑文旅传播路径和产业展示中心研究。"
  },
  {
    "title": "影像民族志：人类学知识生产过程与实践",
    "type": "方法论文",
    "org": "中国民俗学网",
    "url": "https://www.chinesefolklore.org.cn/web/index.php?NewsID=16020",
    "summary": "文章从方法论角度讨论影像民族志的知识生产和实践价值。",
    "use": "支撑田野档案、图像分析和影像叙事研究方法。"
  },
  {
    "title": "AIGC视域下的非遗视觉重构",
    "type": "前沿论文",
    "org": "FCI Publication",
    "url": "https://www.fcipub.org/articleDetail/3778?periodicalId=7",
    "summary": "论文讨论AIGC语境下非遗视觉重构，从形态模仿转向文化基因和视觉语义提取。",
    "use": "支撑AIGC实验室中对传统文化图像生成边界和视觉语义的讨论。"
  },
  {
    "title": "省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作",
    "type": "文化特派员报道",
    "org": "浙江传媒学院",
    "url": "https://www.cuz.edu.cn/info/1481/224742.htm",
    "summary": "学校报道介绍丁瑶瑶担任省级文化特派员赴桐乡马鸣村开展工作，提到马鸣村水网、手工蚕丝被制作加工技艺、光影故事馆、桃花岛和马鸣老街等线索。",
    "use": "作为研究者介绍、文化特派员实践、乡村影像记录、文化品牌打造和农工文旅融合板块的重要信息。"
  },
  {
    "title": "中国传统村落调研——浙江省桐乡市洲泉镇马鸣村",
    "type": "学术网页/村落调研",
    "org": "中国传统村落数字博物馆相关期刊平台",
    "url": "https://www.dosct.cn/article/doi/10.3969/j.issn.1009-1483.2025.12.016",
    "summary": "文章摘要介绍马鸣村位于桐乡市洲泉镇西部、地处杭嘉湖平原腹地和京杭大运河桐乡段西侧，水系塑造出村落空间肌理，并滋养蚕桑文化与稻作文明。",
    "use": "支撑马鸣村空间格局、水网叙事、传统村落保护和蚕桑文化空间分析。"
  },
  {
    "title": "中国传统村落丨浙江桐乡洲泉镇马鸣村",
    "type": "村落报道",
    "org": "央广网",
    "url": "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml",
    "summary": "报道以中国传统村落为切入，介绍马鸣村的江南水乡气质、传统村落风貌和历史文化底蕴。",
    "use": "支撑马鸣村首页和村落空间叙事，补充传统村落传播语境。"
  },
  {
    "title": "洲泉镇马鸣村：江南古村时光慢",
    "type": "村落报道",
    "org": "浙江新闻",
    "url": "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    "summary": "报道介绍马鸣老街、马鸣村、猪舍里乐园、野林滩湿地、稻香人家等游线，呈现马鸣村作为江南古村和乡村旅游节点的形象。",
    "use": "支撑美育文旅页面中的文旅路线、空间节点和游客体验线索。"
  },
  {
    "title": "蒋文龙主编/《乡村寻根》桐乡洲泉五村：水乡复活再现“江南好”",
    "type": "乡村文化报道",
    "org": "浙江大学品牌传播研究中心",
    "url": "https://www.brand.zju.edu.cn/2024/1121/c57339a2990315/page.htm",
    "summary": "文章讨论洲泉五村水乡复兴和水上精品线，提到蚕桑文化是西片区五村的精髓，并涉及义马织造局、制丝工艺和丝织品展示等设想。",
    "use": "支撑马鸣村所在区域的水乡精品线、蚕桑文化展示和文旅空间转化研究。"
  },
  {
    "title": "文化荟萃｜深情梳理蚕桑文化根脉！专著《蚕花剪纸》新书在洲泉首发",
    "type": "文化活动报道",
    "org": "搜狐号转载/地方文化资讯",
    "url": "https://www.sohu.com/a/971385635_121106832",
    "summary": "报道介绍“水映洲泉 光影润心”艺术乡建成果巡礼暨《蚕花剪纸》新书首发活动在马鸣村举行，并提到水乡电影纪程展、人文图景画展和蚕乡文化剪纸展。",
    "use": "支撑美育文旅、影像展陈、艺术乡建和蚕桑文化公共传播板块。"
  },
  {
    "title": "丝绸之路文化寻根图片展活动方案",
    "type": "博物馆展陈资料",
    "org": "中国丝绸博物馆",
    "url": "https://www.chinasilkmuseum.com/info_151.aspx?itemid=26370",
    "summary": "中国丝绸博物馆与桐乡文化馆、桐乡市非遗保护中心合作，将蚕桑文化图片展送至桐乡多个乡镇图书馆和农村文化礼堂，覆盖洲泉等地。",
    "use": "支撑公共美育、村落展陈、流动展览和蚕桑文化传播方式设计。"
  },
  {
    "title": "2021 蚕桑习俗（含山轧蚕花）“3+N”保护行动工作总结（桐乡市文化馆）",
    "type": "非遗网页资料",
    "org": "非遗保护行动信息平台",
    "url": "https://iidos.cn/3N/info.aspx?itemid=11008&parent=",
    "summary": "资料介绍桐乡围绕省级蚕桑丝织文化传承生态保护区创建，开展蚕桑民俗活动、保护规划、传承人培养和展示展演研究等工作。",
    "use": "支撑桐乡蚕桑习俗保护体系、非遗传承生态和本站非遗民俗板块。"
  },
  {
    "title": "中国节日志编辑部工作人员赴浙江桐乡开展“蚕花会”田野调查",
    "type": "田野调查资讯",
    "org": "中国民俗学会相关平台",
    "url": "https://www.cefla.org.cn/plan/detail?id=952",
    "summary": "资料介绍蚕花会主要在清明期间举行，是杭嘉湖平原特有的、以蚕桑养殖和种植产业为依托、由蚕神信仰派生出的江南水上庙会。",
    "use": "支撑蚕花会仪式背景、节庆田野调查和民俗影像分析。"
  },
  {
    "title": "桐乡洲泉持续擦亮“中国蚕丝被名镇”金名片",
    "type": "产业报道",
    "org": "新浪财经转载/地方经济新闻",
    "url": "https://finance.sina.com.cn/jjxw/2024-12-29/doc-inecaqyf2593255.shtml",
    "summary": "报道关注洲泉蚕丝被产业升级，提到推动蚕丝被向高端化、系列化、品牌化方向发展，打造更有影响力的洲泉蚕丝被区域品牌。",
    "use": "支撑蚕丝被品牌传播、产业升级和文化产品转化研究。"
  },
  {
    "title": "过上像城市人一样的生活 从夜明村的巨变看获得感",
    "type": "产业与乡村治理报道",
    "org": "浙江在线",
    "url": "https://cs.zjol.com.cn/zjbd/jx16506/201809/t20180907_8211820.shtml",
    "summary": "报道介绍洲泉镇蚕丝被家庭作坊、手工剥茧传统以及产业发展与水环境治理之间的关系。",
    "use": "作为洲泉蚕丝被产业、家庭作坊、劳动记忆和生态治理的区域参照。"
  },
  {
    "title": "屠霁彦20年磨一剑：以洲泉为起点的“丝绸之路”越走越宽",
    "type": "人物访谈/产业报道",
    "org": "总裁网",
    "url": "https://zgcyjia.com.cn/news/interview/2023-06-21/5898.html",
    "summary": "访谈提到洲泉镇非遗产品和马鸣村非遗资源，并以“家家皆养蚕，户户织绸缎”的民谣描述当地桑蚕特点。",
    "use": "补充洲泉丝绸产业、地方非遗资源和访谈对象线索。"
  },
  {
    "title": "蚕丝被产业重镇：桐乡洲泉镇",
    "type": "产业网页资讯",
    "org": "蚕丝被行业网站",
    "url": "https://www.cansibei.cn/1461/",
    "summary": "网页介绍洲泉镇蚕桑与蚕丝被产业链，涉及养蚕、制绵、生产、销售和机器替代部分手工工序等产业信息。",
    "use": "作为蚕丝被产业链、生产工序和品牌传播样本采集的辅助线索。"
  },
  {
    "title": "老底子手艺！藏在秀洲那一“丝”细腻里的璀璨",
    "type": "区域蚕桑报道",
    "org": "潮新闻",
    "url": "https://tidenews.com.cn/news.html?id=2700717",
    "summary": "报道从秀洲水乡蚕桑传统进入，介绍水乡河港、蚕桑生产和丝绸手艺，为嘉兴区域蚕桑文化提供横向参照。",
    "use": "支撑浙北蚕桑乡村区域比较和嘉兴蚕桑文化背景。"
  },
  {
    "title": "农村文化礼堂：浙江乡村文化精神新地标",
    "type": "乡村文化报道",
    "org": "光明网",
    "url": "https://news.gmw.cn/2018-04/27/content_28518007.htm",
    "summary": "文章介绍浙江农村文化礼堂作为乡村文化空间的建设经验，包括文化长廊、文体活动和地方资源展示等功能。",
    "use": "为马鸣村公共美育、文化礼堂、村落展陈和乡村文化空间转化提供参照。"
  },
  {
    "title": "马鸣村电影机展示馆相关报道",
    "type": "村落文化报道",
    "org": "浙江新闻",
    "url": "https://zjnews.zjol.com.cn/zjnews/jxnews/201704/t20170419_3481696.shtml",
    "summary": "同一报道提到马鸣村电影机展示馆收藏近百台经典放映机，提示马鸣村具有光影记忆和影像展陈资源。",
    "use": "支撑图像看马鸣、影像档案和文化特派员影像实践板块。"
  }
];

const sourceHighlights = [
  ["世界非遗背景", "UNESCO与中国非遗网均将中国蚕桑丝织技艺理解为生产技艺、工具产品和民俗活动构成的整体系统。"],
  ["马鸣村空间依据", "公开规划和村落介绍资料显示，马鸣村与蚕桑展示、马鸣老街、蚕丝被和丝绵制品展示销售空间相关。"],
  ["节庆与身体技艺", "新华社、浙江新闻等报道为双庙渚蚕花水会和高杆船技的仪式性、身体性和非遗传播提供材料。"],
  ["文化特派员参照", "浙江日报关于八泉村桑蚕丝被实践的报道，为理解文化特派员机制和蚕丝被转化实践提供同类案例。"],
  ["论文与方法支撑", "丝绸文旅融合、影像民族志、AIGC非遗视觉重构等论文线索，可支撑更深入的专题阅读和方法论理解。"]
];

const literatureReferences = [
  { id: "ref-songyun-01", group: "宋韵文化", code: "R01", title: "The Problem of Beauty: Aesthetic Thought and Pursuits in Northern Song Dynasty China", source: "Stanford University, East Asian Languages and Cultures", note: "用于支撑宋代审美、生活美学和文化精神的概念界定。", url: "https://ealc.stanford.edu/publications/problem-beauty-aesthetic-thought-and-pursuits-northern-song-dynasty-china", jump: "topic-songyun" },
  { id: "ref-songyun-02", group: "宋韵文化", code: "R02", title: "The Aesthetics of Witheredness and Artistic Creations in the Song Dynasty", source: "ResearchCommons", note: "用于补充宋代审美范式、视觉经验和艺术创造的讨论。", url: "https://tsla.researchcommons.org/journal/vol41/iss1/7/", jump: "topic-songyun" },
  { id: "ref-songyun-03", group: "宋韵文化", code: "R03", title: "Empresses, Art, and Agency in Song Dynasty China", source: "University of Washington Press", note: "用于连接宋代艺术、制度与视觉文化。", url: "https://uwapress.uw.edu/book/9780295989631/empresses-art-and-agency-in-song-dynasty-china/", jump: "topic-songyun" },
  { id: "ref-local-01", group: "南宋畿辅与区域文脉", code: "R04", title: "浙江桐乡蚕桑文化系统保护与发展规划", source: "公开规划PDF", note: "用于马鸣老街、桑园观光、蚕桑展示与产业空间论证。", url: "https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3159/site/attach/0/f9d0254c63ab4363921ce477e994a780.pdf", jump: "topic-city" },
  { id: "ref-local-02", group: "南宋畿辅与区域文脉", code: "R05", title: "中国传统村落丨浙江桐乡洲泉镇马鸣村", source: "央广网", note: "用于马鸣村空间、水乡肌理和传统村落背景的可视化引用。", url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml", jump: "topic-city" },
  { id: "ref-local-03", group: "南宋畿辅与区域文脉", code: "R06", title: "省级文化特派员丁瑶瑶博士赴桐乡马鸣村开展工作", source: "浙江传媒学院", note: "用于文化特派员实践、影像记录和农工文旅融合的背景说明。", url: "https://www.cuz.edu.cn/info/1481/224742.htm", jump: "topic-city" },
  { id: "ref-seri-01", group: "蚕桑丝绸文化", code: "R07", title: "Sericulture and silk craftsmanship of China", source: "UNESCO Intangible Cultural Heritage", note: "用于说明中国蚕桑丝织技艺的整体性与国际传播背景。", url: "https://ich.unesco.org/en/RL/sericulture-and-silk-craftsmanship-of-china-00197", jump: "topic-silk" },
  { id: "ref-seri-02", group: "蚕桑丝绸文化", code: "R08", title: "中国传统桑蚕丝织技艺", source: "中国非物质文化遗产网", note: "用于界定栽桑、养蚕、缫丝、织造与相关民俗的系统边界。", url: "https://www.ihchina.cn/sangcansi.html", jump: "topic-silk" },
  { id: "ref-seri-03", group: "蚕桑丝绸文化", code: "R09", title: "天蚕灵机：中国蚕桑丝织技艺非物质文化遗产展", source: "中国丝绸博物馆", note: "适合支撑展陈转化、公共美育和视觉叙事。", url: "https://www.chinasilkmuseum.com/zz/info_17.aspx?itemid=31423", jump: "topic-silk" },
  { id: "ref-heritage-01", group: "非遗民俗与地方记忆", code: "R10", title: "浙江桐乡举办“蚕花水会” 再现非遗“高杆船技”", source: "新华社", note: "用于蚕花水会、高杆船技及节庆传播分析。", url: "https://h.xinhuaxmt.com/vh512/share/11958826", jump: "topic-heritage" },
  { id: "ref-heritage-02", group: "非遗民俗与地方记忆", code: "R11", title: "中国节日志编辑部工作人员赴浙江桐乡开展“蚕花会”田野调查", source: "中国民俗学会相关平台", note: "用于节庆仪式背景、田野调查和民俗影像分析。", url: "https://www.cefla.org.cn/plan/detail?id=952", jump: "topic-heritage" },
  { id: "ref-heritage-03", group: "非遗民俗与地方记忆", code: "R12", title: "2021 蚕桑习俗（含山轧蚕花）“3+N”保护行动工作总结（桐乡市文化馆）", source: "非遗保护行动信息平台", note: "用于桐乡蚕桑习俗保护体系、传承生态和网页板块补充。", url: "https://iidos.cn/3N/info.aspx?itemid=11008&parent=", jump: "topic-heritage" },
  { id: "ref-visual-01", group: "影像民族志与视觉方法", code: "R13", title: "Visual Anthropology", source: "Taylor & Francis", note: "用于界定视觉人类学和影像民族志的方法位置。", url: "https://www.tandfonline.com/journals/gvan20", jump: "topic-visual" },
  { id: "ref-visual-02", group: "影像民族志与视觉方法", code: "R14", title: "The last 20 years of visual anthropology – a critical review", source: "Visual Studies", note: "可作为影像方法的理论回顾与批判参照。", url: "https://www.tandfonline.com/doi/full/10.1080/14725860500244027", jump: "topic-visual" },
  { id: "ref-aigc-01", group: "数字文化与AIGC", code: "R15", title: "Tracing the bias loop: AI, cultural heritage and bias-mitigating in practice", source: "AI & Society / Springer Nature", note: "用于讨论AI生成文化图像中的偏差识别与修正。", url: "https://link.springer.com/article/10.1007/s00146-025-02349-z", jump: "topic-aigc" },
  { id: "ref-aigc-02", group: "数字文化与AIGC", code: "R16", title: "A review of the development and application of generative technology in digital museums", source: "npj Heritage Science / Nature", note: "适合支撑AIGC、数字博物馆和文化传播的关系。", url: "https://www.nature.com/articles/s40494-025-02164-1", jump: "topic-aigc" },
  { id: "ref-local-04", group: "文旅传播与产业转化", code: "R17", title: "浙江桐乡举办“蚕花水会” 再现非遗“高杆船技”", source: "新华社", note: "同时可作为地方节庆、村落记忆和传播案例的补充来源。", url: "https://h.xinhuaxmt.com/vh512/share/11958826", jump: "topic-tourism" },
  { id: "ref-tourism-01", group: "文旅传播与产业转化", code: "R18", title: "中国传统村落丨浙江桐乡洲泉镇马鸣村", source: "央广网", note: "用于传统村落、文旅路线和空间叙事的基础来源。", url: "https://china.cnr.cn/gdgg/20230602/t20230602_526272930.shtml", jump: "topic-tourism" },
  { id: "ref-tourism-02", group: "文旅传播与产业转化", code: "R19", title: "浙江桐乡蚕桑文化系统保护与发展规划", source: "公开规划PDF", note: "用于文旅空间、产业空间和蚕桑展示的策划依据。", url: "https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web3159/site/attach/0/f9d0254c63ab4363921ce477e994a780.pdf", jump: "topic-tourism" }
];

const literatureReferenceMap = literatureReferences.reduce((map, ref) => {
  if (!map[ref.group]) map[ref.group] = [];
  map[ref.group].push(ref);
  return map;
}, {});

const literatureTable = [
  [
    1,
    "宋韵文化",
    "宋韵文化的概念界定与认识维度",
    "待补作者",
    "2024",
    "学术论文",
    "界定宋韵文化概念、形态与当代价值",
    "待核验"
  ],
  [
    2,
    "宋韵文化",
    "试论宋韵文化的认识维度、精神实质和当代价值",
    "待补作者",
    "2023",
    "学术论文",
    "支撑宋韵文化精神实质和当代转化表述",
    "待核验"
  ],
  [
    3,
    "宋韵文化",
    "宋韵文化再认识",
    "待补作者",
    "2023",
    "学术论文",
    "补充宋韵文化价值维度和理论边界",
    "待核验"
  ],
  [
    4,
    "宋韵文化",
    "宋代美学思想研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑宋韵审美、含蓄、清雅和日常美学论述",
    "待检索"
  ],
  [
    5,
    "宋韵文化",
    "宋代生活美学研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑寝居、器物、服饰和日常生活美学分析",
    "待检索"
  ],
  [
    6,
    "宋韵文化",
    "宋代服饰文化研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑丝绸、服饰与宋韵审美关系",
    "待检索"
  ],
  [
    7,
    "宋韵文化",
    "宋画中的物质文化与日常生活研究",
    "待补作者",
    "待补",
    "学术论文",
    "为图像分析提供宋代视觉参照",
    "待检索"
  ],
  [
    2,
    "宋韵文化",
    "试论宋韵文化的认识维度、精神实质和当代价值",
    "待补作者",
    "2023",
    "学术论文",
    "支撑宋韵文化精神实质和当代转化表述",
    "待核验"
  ],
  [
    3,
    "宋韵文化",
    "宋韵文化再认识",
    "待补作者",
    "2023",
    "学术论文",
    "补充宋韵文化价值维度和理论边界",
    "待核验"
  ],
  [
    4,
    "宋韵文化",
    "宋代美学思想研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑宋韵审美、含蓄、清雅和日常美学论述",
    "待检索"
  ],
  [
    5,
    "宋韵文化",
    "宋代生活美学研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑寝居、器物、服饰和日常生活美学分析",
    "待检索"
  ],
  [
    6,
    "宋韵文化",
    "宋代服饰文化研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑丝绸、服饰与宋韵审美关系",
    "待检索"
  ],
  [
    7,
    "宋韵文化",
    "宋画中的物质文化与日常生活研究",
    "待补作者",
    "待补",
    "学术论文",
    "为图像分析提供宋代视觉参照",
    "待检索"
  ],
  [
    8,
    "宋韵文化",
    "宋代城市生活与消费文化研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑都城消费与丝绸产品关系",
    "待检索"
  ],
  [
    9,
    "宋韵文化",
    "南宋临安城市文化研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑临安都城文化背景",
    "待检索"
  ],
  [
    10,
    "宋韵文化",
    "宋韵文化数字化传播研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑宋韵文化在数字媒介中的转译研究",
    "待检索"
  ],
  [
    11,
    "南宋畿辅",
    "《梦粱录》",
    "吴自牧",
    "南宋",
    "古籍",
    "提供南宋临安城市生活、风俗与物质文化线索",
    "待版本核验"
  ],
  [
    12,
    "南宋畿辅",
    "《武林旧事》",
    "周密",
    "南宋",
    "古籍",
    "提供临安都城生活、节俗与消费场景线索",
    "待版本核验"
  ],
  [
    13,
    "南宋畿辅",
    "《西湖老人繁胜录》",
    "西湖老人",
    "南宋",
    "古籍",
    "补充南宋临安市井生活和城市景观",
    "待版本核验"
  ],
  [
    14,
    "南宋畿辅",
    "《咸淳临安志》",
    "潜说友等",
    "南宋",
    "地方志",
    "支撑临安都城空间和制度背景",
    "待版本核验"
  ],
  [
    15,
    "南宋畿辅",
    "《嘉兴府志》",
    "地方志编纂者",
    "多版本",
    "地方志",
    "检索嘉兴蚕桑、丝织、交通和村镇资料",
    "待检索"
  ],
  [
    16,
    "南宋畿辅",
    "《湖州府志》",
    "地方志编纂者",
    "多版本",
    "地方志",
    "检索湖州蚕桑丝织传统和区域文脉",
    "待检索"
  ],
  [
    17,
    "南宋畿辅",
    "《桐乡县志》",
    "地方志编纂者",
    "多版本",
    "地方志",
    "检索桐乡马鸣、蚕桑、乡村产业和民俗资料",
    "待检索"
  ],
  [
    18,
    "南宋畿辅",
    "Commerce and Society in Sung China",
    "Shiba Yoshinobu",
    "1970",
    "英文专著",
    "支撑宋代商业、区域经济和城市消费背景",
    "待核验"
  ],
  [
    19,
    "南宋畿辅",
    "Daily Life in China on the Eve of the Mongol Invasion, 1250-1276",
    "Jacques Gernet",
    "1962/1982",
    "英文专著",
    "提供南宋生活史和物质文化参照",
    "待核验"
  ],
  [
    20,
    "南宋畿辅",
    "The Pattern of the Chinese Past",
    "Mark Elvin",
    "1973",
    "英文专著",
    "支撑江南经济、技术和区域社会长时段背景",
    "待核验"
  ],
  [
    21,
    "蚕桑丝绸",
    "Science and Civilisation in China, Vol. 5, Part 9: Textile Technology: Spinning and Reeling",
    "Dieter Kuhn",
    "1988",
    "英文专著",
    "支撑蚕桑、缫丝和丝织技术史",
    "待核验"
  ],
  [
    22,
    "蚕桑丝绸",
    "Chinese Silk: A Cultural History",
    "Shelagh Vainker",
    "2004",
    "英文专著",
    "支撑中国丝绸文化史和国际传播背景",
    "待核验"
  ],
  [
    23,
    "蚕桑丝绸",
    "Treasures in Silk",
    "Zhao Feng",
    "1999",
    "图录/专著",
    "支撑丝绸纹样、织物和博物馆图像资料",
    "待核验"
  ],
  [
    24,
    "蚕桑丝绸",
    "Technology and Gender: Fabrics of Power in Late Imperial China",
    "Francesca Bray",
    "1997",
    "英文专著",
    "支撑纺织、性别、劳动和家庭生产关系",
    "待核验"
  ],
  [
    25,
    "蚕桑丝绸",
    "中国丝绸史",
    "待补作者",
    "待补",
    "中文专著",
    "提供丝绸制度、工艺和贸易史背景",
    "待检索"
  ],
  [
    26,
    "蚕桑丝绸",
    "浙江丝绸史研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑浙江丝绸文化和地方产业背景",
    "待检索"
  ],
  [
    27,
    "蚕桑丝绸",
    "浙江蚕桑史研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑浙江蚕桑传统和地方产业背景",
    "待检索"
  ],
  [
    28,
    "蚕桑丝绸",
    "嘉兴蚕桑文化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑嘉兴区域蚕桑文化脉络",
    "待检索"
  ],
  [
    29,
    "蚕桑丝绸",
    "湖州丝绸文化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑浙北丝绸文化区域比较",
    "待检索"
  ],
  [
    30,
    "蚕桑丝绸",
    "中国传统桑蚕丝织技艺保护研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑丝织技艺的整体性保护论述",
    "待检索"
  ],
  [
    31,
    "非遗民俗",
    "高杆船技非遗保护研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑高杆船技的身体技艺和传承机制分析",
    "待检索"
  ],
  [
    32,
    "非遗民俗",
    "蚕花水会民俗文化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕花水会的仪式性、节庆性和地方认同分析",
    "待检索"
  ],
  [
    33,
    "非遗民俗",
    "江南蚕桑民俗研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑蚕桑信仰、蚕花娘娘和乡村民俗体系",
    "待检索"
  ],
  [
    34,
    "非遗民俗",
    "蚕花娘娘信仰与江南蚕桑民俗研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑信仰和仪式符号研究",
    "待检索"
  ],
  [
    35,
    "非遗民俗",
    "江南水乡民俗节庆的影像传播研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕花水会短视频和展陈影像分析",
    "待检索"
  ],
  [
    36,
    "非遗民俗",
    "非物质文化遗产活态传承研究",
    "待补作者",
    "待补",
    "专著/论文",
    "支撑非遗从保护到转化的理论框架",
    "待检索"
  ],
  [
    37,
    "非遗民俗",
    "传统手工艺非遗的生产性保护研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕丝被工艺和产业转化关系",
    "待检索"
  ],
  [
    38,
    "非遗民俗",
    "地方节庆与乡村文旅融合研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑节庆民俗转化为文旅体验",
    "待检索"
  ],
  [
    39,
    "非遗民俗",
    "非遗传播中的身体性与仪式性研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑高杆船技、蚕花水会的影像叙事",
    "待检索"
  ],
  [
    40,
    "非遗民俗",
    "非遗影像传播与地方文化认同研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑非遗影像和地方认同关系",
    "待检索"
  ],
  [
    41,
    "地方资料",
    "浙江桐乡蚕桑文化系统保护与发展规划",
    "规划编制单位",
    "待核验",
    "研究报告/规划",
    "支撑马鸣老街、桑园观光、蚕桑展示和产业空间线索",
    "待核验"
  ],
  [
    42,
    "地方资料",
    "《桐乡市志》",
    "地方志编纂委员会",
    "待补",
    "地方志",
    "支撑桐乡蚕桑、丝织、文旅和产业发展背景",
    "待检索"
  ],
  [
    43,
    "地方资料",
    "《洲泉镇志》",
    "地方志编纂委员会",
    "待补",
    "地方志",
    "支撑洲泉区域产业、蚕桑传统和马鸣村空间",
    "待检索"
  ],
  [
    44,
    "地方资料",
    "马鸣村村志或村史资料",
    "村委/地方档案",
    "待补",
    "地方志/档案",
    "核验村落历史、产业演变和地方记忆",
    "待采集"
  ],
  [
    45,
    "地方资料",
    "桐乡蚕桑文化系统农业文化遗产研究",
    "待补作者",
    "待补",
    "学术论文/报告",
    "支撑蚕桑文化系统与乡村资源保护",
    "待检索"
  ],
  [
    46,
    "地方资料",
    "桐乡蚕丝被产业发展研究",
    "待补作者",
    "待补",
    "学术论文/行业报告",
    "支撑蚕丝被产业链和品牌传播研究",
    "待检索"
  ],
  [
    47,
    "地方资料",
    "洲泉蚕丝被产业集群研究",
    "待补作者",
    "待补",
    "学术论文/行业报告",
    "支撑蚕丝被名镇、产业集群和地方品牌研究",
    "待检索"
  ],
  [
    48,
    "地方资料",
    "乡村文化资源调查方法研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑马鸣村资源清单和田野调查方法",
    "待检索"
  ],
  [
    49,
    "地方资料",
    "地方志资料在区域文化研究中的应用",
    "待补作者",
    "待补",
    "学术论文",
    "支撑地方志和口述史结合的方法论",
    "待检索"
  ],
  [
    50,
    "地方资料",
    "农业文化遗产视域下蚕桑文化系统保护研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑文化系统保护和文旅转化",
    "待检索"
  ],
  [
    51,
    "影像叙事",
    "影像民族志：人类学知识生产过程与实践",
    "雷亮中",
    "2016",
    "学术论文",
    "支撑影像民族志、田野影像和知识生产方法",
    "待核验"
  ],
  [
    52,
    "影像叙事",
    "民族志电影的知识生产",
    "待补作者",
    "待补",
    "学术论文",
    "补充影视人类学和地方知识生产层次",
    "待检索"
  ],
  [
    53,
    "影像叙事",
    "Visual Anthropology: Photography as a Research Method",
    "John Collier Jr.; Malcolm Collier",
    "1986",
    "英文专著",
    "支撑摄影作为田野研究方法",
    "待核验"
  ],
  [
    54,
    "影像叙事",
    "The Ethnographic Eye: Ways of Seeing in Anthropology",
    "Anna Grimshaw",
    "2001",
    "英文专著",
    "支撑影像观看、民族志和视觉方法",
    "待核验"
  ],
  [
    55,
    "影像叙事",
    "Visual Methodologies",
    "Gillian Rose",
    "2001/多版",
    "英文专著",
    "支撑视觉材料分析和图像方法",
    "待核验"
  ],
  [
    56,
    "影像叙事",
    "Doing Visual Ethnography",
    "Sarah Pink",
    "2001/多版",
    "英文专著",
    "支撑视觉民族志和感官田野研究",
    "待核验"
  ],
  [
    57,
    "影像叙事",
    "非遗纪录片影像叙事研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑非遗纪录影像分析",
    "待检索"
  ],
  [
    58,
    "影像叙事",
    "乡村短视频传播与地方文化再生产研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑马鸣村短视频传播路径研究",
    "待检索"
  ],
  [
    59,
    "影像叙事",
    "展陈影像与地方文化记忆研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑展示馆和村落展陈影像设计",
    "待检索"
  ],
  [
    60,
    "影像叙事",
    "品牌影像叙事与文化产品传播研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕丝被品牌影像和产品叙事",
    "待检索"
  ],
  [
    61,
    "AIGC与数字文化",
    "AIGC视域下的非遗视觉重构——从“形”的模仿到“神”的参数化提取",
    "徐贮琅、蔡青",
    "2026",
    "学术论文",
    "支撑AIGC非遗视觉语义和文化基因提取",
    "待核验"
  ],
  [
    62,
    "AIGC与数字文化",
    "AIGC“转译”经典艺术的生成模式与视觉叙事建构",
    "待核验作者",
    "2025",
    "学术论文",
    "支撑AIGC作为文化图像转译器的分析",
    "待核验"
  ],
  [
    63,
    "AIGC与数字文化",
    "AIGC驱动下非遗文化的NFT艺术转化与网络营销创新研究",
    "朱然",
    "2025",
    "学术论文",
    "支撑AIGC、非遗、数字资产和网络营销关系",
    "待核验"
  ],
  [
    64,
    "AIGC与数字文化",
    "传统文化数字化保护中的真实性问题研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑AIGC生成中的文化真实性边界",
    "待检索"
  ],
  [
    65,
    "AIGC与数字文化",
    "生成式人工智能与文化遗产数字传播研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑AI时代文化遗产传播机制",
    "待检索"
  ],
  [
    66,
    "AIGC与数字文化",
    "人工智能生成图像的审美评价研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑图像生成评价维度设计",
    "待检索"
  ],
  [
    67,
    "AIGC与数字文化",
    "AI艺术中的风格迁移与文化误读研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑泛古风化、历史错置和符号拼贴分析",
    "待检索"
  ],
  [
    68,
    "AIGC与数字文化",
    "数字人文视域下地方文化资源可视化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑田野材料数据库和视觉符号库建设",
    "待检索"
  ],
  [
    69,
    "AIGC与数字文化",
    "非遗数字化传播中的视觉符号转译研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑非遗图像生成和传播符号规范",
    "待检索"
  ],
  [
    70,
    "AIGC与数字文化",
    "跨文化语境下AI生成中国传统文化图像的误读研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑海外传播和东方主义化风险分析",
    "待检索"
  ],
  [
    71,
    "文旅与产业转化",
    "浙江丝绸文化与旅游融合发展创新路径探索",
    "待核验作者",
    "待补",
    "学术论文",
    "支撑浙江丝绸文化文旅融合路径",
    "待核验"
  ],
  [
    72,
    "文旅与产业转化",
    "丝绸之路旅游研究文献综述",
    "待补作者",
    "待补",
    "综述论文",
    "提供丝绸旅游研究的综述参照",
    "待核验"
  ],
  [
    73,
    "文旅与产业转化",
    "杭州文旅融合创新路径探究——基于资源与市场的双重视角",
    "吾思怡",
    "2025",
    "学术论文",
    "支撑浙江区域文旅融合和宋韵文化节语境",
    "待核验"
  ],
  [
    74,
    "文旅与产业转化",
    "乡村文旅融合与地方品牌塑造研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑马鸣村文旅传播和地方品牌建构",
    "待检索"
  ],
  [
    75,
    "文旅与产业转化",
    "文化产品叙事与消费认同研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕丝被从功能商品到文化产品转化",
    "待检索"
  ],
  [
    76,
    "文旅与产业转化",
    "农文旅融合背景下非遗资源活化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕桑非遗、乡村体验和消费转化",
    "待检索"
  ],
  [
    77,
    "文旅与产业转化",
    "跨境电商视觉传播与中国品牌出海研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕丝被海外页面和跨文化视觉传播",
    "待检索"
  ],
  [
    78,
    "文旅与产业转化",
    "东方生活美学与当代品牌传播研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑蚕丝被寝居美学和国际传播表达",
    "待检索"
  ],
  [
    79,
    "文旅与产业转化",
    "公共美育视域下地方传统文化转化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑宋韵丝绸文化课程、工作坊和展陈转化",
    "待检索"
  ],
  [
    80,
    "文旅与产业转化",
    "文化特派员机制下乡村文化资源转化研究",
    "待补作者",
    "待补",
    "学术论文",
    "支撑文化特派员实践、地方服务和成果转化",
    "待检索"
  ]
];

function renderPapers() {
  const node = document.querySelector("[data-papers]");
  if (!node) return;
  node.innerHTML = papers.map((p, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${imageAt(paperImages, index)}" alt="${p.title}" loading="lazy">
      <div class="media-body">
        <div class="meta-row"><span class="tag gold">${p.status}</span></div>
        <strong>${p.title}</strong>
        <span>${p.focus}</span>
        <span><b>材料基础：</b>${p.materials}</span>
      </div>
    </article>`).join("");
}

function renderLiteratureNeeds() {
  const node = document.querySelector("[data-literature-needs]");
  if (!node) return;
  node.innerHTML = literatureNeeds.map(row => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td></tr>`).join("");
}

function renderLiterature() {
  const node = document.querySelector("[data-literature]");
  if (!node) return;
  node.innerHTML = literature.map(row => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}篇</td></tr>`).join("");
}

function renderResources() {
  const node = document.querySelector("[data-resources]");
  if (!node) return;
  node.innerHTML = resources.map(row => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("");
}

function renderInterviews() {
  const node = document.querySelector("[data-interviews]");
  if (!node) return;
  node.innerHTML = interviewGroups.map((row, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${imageAt(interviewImages, index)}" alt="${row[0]}" loading="lazy">
      <div class="media-body">
        <span class="tag river">对象 ${index + 1}</span>
        <strong>${row[0]}</strong>
        <span>${row[1]}</span>
      </div>
    </article>`).join("");
}

function renderSymbols() {
  const node = document.querySelector("[data-symbols]");
  if (!node) return;
  node.innerHTML = symbols.map(row => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("");
}

function renderBrandSamples() {
  const node = document.querySelector("[data-brand-samples]");
  if (!node) return;
  node.innerHTML = brandSamples.map(row => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("");
}

function renderImageAnalyses() {
  const node = document.querySelector("[data-image-analyses]");
  if (!node) return;
  node.innerHTML = imageAnalyses.map(item => `
    <article class="analysis-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="analysis-body">
        <span class="tag river">${item.type}</span>
        <h3>${item.title}</h3>
        <p><b>分析问题：</b>${item.question}</p>
        <p><b>分析要点：</b>${item.points}</p>
      </div>
    </article>`).join("");
}

function renderPublicPhotos() {
  const node = document.querySelector("[data-public-photos]");
  if (!node) return;
  node.innerHTML = publicPhotos.map(photo => `
    <article class="photo-card">
      <img src="${photo.image}" alt="${photo.title}" loading="lazy">
      <div class="photo-body">
        <span class="tag">${photo.source}</span>
        <strong>${photo.title}</strong>
        <span>${photo.note}</span>
        <a class="text-link" href="${photo.url}" target="_blank" rel="noopener">查看原始报道</a>
      </div>
    </article>`).join("");
}

function renderProjectModules() {
  const node = document.querySelector("[data-project-modules]");
  if (!node) return;
  node.innerHTML = projectModules.map((row, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${imageAt(projectModuleImages, index)}" alt="${row[0]}" loading="lazy">
      <div class="media-body">
        <span class="tag">${String(index + 1).padStart(2, "0")}</span>
        <strong>${row[0]}</strong>
        <span>${row[1]}</span>
      </div>
    </article>`).join("");
}

function renderAigcExperiments() {
  const node = document.querySelector("[data-aigc-experiments]");
  if (!node) return;
  node.innerHTML = aigcExperiments.map((row, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${imageAt(aigcImages, index)}" alt="${row[0]}" loading="lazy">
      <div class="media-body">
        <span class="tag clay">生成实验 ${index + 1}</span>
        <strong>${row[0]}</strong>
        <span><b>测试目标：</b>${row[1]}</span>
        <span><b>常见误读：</b>${row[2]}</span>
      </div>
    </article>`).join("");
}

function renderEducationTourism() {
  const node = document.querySelector("[data-education-tourism]");
  if (!node) return;
  node.innerHTML = educationTourism.map((row, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${imageAt(educationImages, index)}" alt="${row[0]}" loading="lazy">
      <div class="media-body">
        <span class="tag gold">转化方向</span>
        <strong>${row[0]}</strong>
        <span>${row[1]}</span>
      </div>
    </article>`).join("");
}

function renderUpdates() {
  const node = document.querySelector("[data-updates]");
  if (!node) return;
  node.innerHTML = updates.map((row, index) => `
    <div class="step">
      <div class="date">${row[0]}</div>
      <div class="card media-card">
        <img class="media-banner" src="${imageAt(updateImages, index)}" alt="${row[1]}" loading="lazy">
        <div class="media-body">
          <span class="tag river">${row[1]}</span>
          <p>${row[2]}</p>
        </div>
      </div>
    </div>`).join("");
}

function renderSourceItems() {
  const node = document.querySelector("[data-source-items]");
  if (!node) return;
  node.innerHTML = sourceItems.map((item, index) => `
    <article class="item media-item">
      <img class="media-thumb" src="${sourceImage(item, index)}" alt="${item.title}" loading="lazy">
      <div class="media-body">
        <div class="meta-row">
          <span class="tag">${item.type}</span>
          <span class="tag river">${item.org}</span>
        </div>
        <strong>${item.title}</strong>
        <span>${item.summary}</span>
        <span><b>用于网站：</b>${item.use}</span>
        <a class="text-link" href="${item.url}" target="_blank" rel="noopener">查看来源</a>
      </div>
    </article>`).join("");
}

function renderSourceHighlights() {
  const node = document.querySelector("[data-source-highlights]");
  if (!node) return;
  node.innerHTML = sourceHighlights.map((row, index) => `
    <article class="card media-card">
      <img class="media-banner" src="${imageAt(sourceHighlightImages, index)}" alt="${row[0]}" loading="lazy">
      <div class="media-body">
        <span class="tag gold">${row[0]}</span>
        <p>${row[1]}</p>
      </div>
    </article>`).join("");
}

function renderLiteratureReferences() {
  const node = document.querySelector("[data-literature-refs]");
  if (!node) return;
  node.innerHTML = literatureReferences.map(ref => `
    <article class="item" id="${ref.id}">
      <div class="meta-row">
        <span class="tag">${ref.group}</span>
        <span class="tag river">${ref.code}</span>
      </div>
      <strong>${ref.title}</strong>
      <span>${ref.source}</span>
      <span>${ref.note}</span>
      <div class="meta-row">
        <a class="text-link" href="${ref.url}" target="_blank" rel="noopener">打开来源</a>
        ${ref.jump ? `<a class="text-link" href="#${ref.jump}">回到综述</a>` : ""}
      </div>
    </article>`).join("");
}

function renderLiteratureReferenceLinks() {
  document.querySelectorAll("[data-litrefs]").forEach(node => {
    const refs = literatureReferenceMap[node.dataset.litrefs] || [];
    node.innerHTML = refs.map(ref => `<a class="text-link" href="#${ref.id}">${ref.code}</a>`).join(" ");
  });
}

function groupSourcesByType(items) {
  const order = ["马鸣村信息", "蚕桑非遗", "节庆民俗", "文化特派员", "美育文旅", "产业传播", "学术线索"];
  const groups = {};
  order.forEach(key => groups[key] = []);
  items.forEach(item => {
    let key = "学术线索";
    if (/马鸣村|村落|规划/.test(item.title + item.type + item.summary)) key = "马鸣村信息";
    if (/UNESCO|非物质文化遗产网|传统桑蚕|非遗资料/.test(item.org + item.title + item.type)) key = "蚕桑非遗";
    if (/蚕花水会|高杆船技/.test(item.title + item.summary)) key = "节庆民俗";
    if (/文化特派员/.test(item.title + item.summary + item.use)) key = "文化特派员";
    if (/中国丝绸博物馆|展陈|艺术乡建|美育|文旅/.test(item.title + item.summary + item.use)) key = "美育文旅";
    if (/蚕丝被|产业|出海|品牌|电商/.test(item.title + item.summary + item.use)) key = "产业传播";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return order.map(key => [key, groups[key]]).filter(([, items]) => items.length);
}

function renderInfoGroups() {
  const node = document.querySelector("[data-info-groups]");
  if (!node) return;
  node.innerHTML = groupSourcesByType(sourceItems).map(([group, items]) => `
    <section class="info-group">
      <div class="section-head slim">
        <h2>${group}</h2>
        <p>共 ${items.length} 条信息资料。用于补充马鸣村研究、蚕桑非遗背景、文化特派员实践和成果转化语境。</p>
      </div>
      <figure class="group-visual">
        <img src="${infoGroupImages[group] || "assets/maming-panorama.png"}" alt="${group}" loading="lazy">
        <figcaption>${group}相关图像线索</figcaption>
      </figure>
      <div class="list">
        ${items.map((item, index) => `
          <article class="item media-item compact-media">
            <img class="media-thumb" src="${sourceImage(item, index)}" alt="${item.title}" loading="lazy">
            <div class="media-body">
              <div class="meta-row">
                <span class="tag">${item.type}</span>
                <span class="tag river">${item.org}</span>
              </div>
              <strong>${item.title}</strong>
              <span>${item.summary}</span>
              <span><b>用于网站：</b>${item.use}</span>
              <a class="text-link" href="${item.url}" target="_blank" rel="noopener">查看信息来源</a>
            </div>
          </article>`).join("")}
      </div>
    </section>`).join("");
}

function renderLiteratureTable() {
  const node = document.querySelector("[data-literature-table]");
  if (!node) return;
  node.innerHTML = literatureTable.map(row => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3]}</td>
      <td>${row[4]}</td>
      <td>${row[5]}</td>
      <td>${row[6]}</td>
      <td>${row[7]}</td>
    </tr>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  injectShell(document.body.dataset.active || "index.html");
  renderPapers();
  renderLiteratureNeeds();
  renderLiterature();
  renderResources();
  renderInterviews();
  renderSymbols();
  renderBrandSamples();
  renderImageAnalyses();
  renderPublicPhotos();
  renderProjectModules();
  renderAigcExperiments();
  renderEducationTourism();
  renderUpdates();
  renderSourceItems();
  renderSourceHighlights();
  renderLiteratureReferences();
  renderLiteratureReferenceLinks();
  renderLiteratureTable();
  renderInfoGroups();
});
