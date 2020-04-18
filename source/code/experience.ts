const Experience = [
  {
    company: "广州滴普科技有限公司",
    post: "前端工程师",
    date: "2019.05 - 至今",
    overview: "参与了多个项目的开发，前端，Vue 组件，Node 后端，Flutter 移动端均有实践",
    projects: [
      {
        name: "DCP 移动端项目",
        content: `
          DCP 移动端是滴普数字化管控的移动端项目，主要功能是审批公司部门的人力计划，员工工时/休假等申请。目前版本是 v1.9.0，在蒲公英上分发。
          这个项目使用 Flutter 框架开发，编程语言为 Dart，主要用到的插件有网络请求插件 Dio，数据存储 Hive，状态管理 Provider。
          这个项目从接到需求开始，我完成了项目的开发规划，功能迭代，测试修复，构建发布，上架分发等工作，从零到一的完成了整个项目，对项目全权负责。
          期间遇到过多级部门树结构在移动端如何显示的问题，经过搜索资料和与设计师沟通得到最终实现方案。
        `,
      },
      {
        name: "DCP 后端",
        content: `
          DCP 后端是滴普数字化管控的后端接口服务，使用 Node.js 开发，框架为 Egg.js，我参与了部门每周任务，月度总结，部门周报等多个模块的开发。
          主要任务是设计后端数据模型，数据表字段设计，接口服务开发等。同时优化了部门人力资源，项目人力资源，部门福利申请等多个接口请求响应时间。
          给项目添加通用的 token 验证，错误处理的中间件，分页数据格式化函数。
        `,
      },
      {
        name: "文件上传服务",
        content: `
          这个接口是为了给前端上传组件提供一个安全的上传服务，避免上传 SDK 的配置信息在前端暴露，同时给公司各项目组提供一个统一的上传服务。
          限制了上传文件格式和请求域名，返回文件上传后的 CDN 地址。项目使用 Egg.js 框架开发，语言为 Typescript，使用 Docker 部署。
        `,
      },
      {
        name: "统一身份认证系统 IAM",
        content: `
          这个系统是为企业实现从账号数据集中管理、访问权限控制、账号生命周期管理、到安全审计的统一身份认证管理平台。
          负责了其中应用管理，成员管理，Api 管理等模块，使用 Nuxt.js 框架开发，提出了 Nuxt.js 应用中的面包屑导航方案。
        `,
      },
      {
        name: "移动端推送服务",
        content: `
          这个接口是为了给移动端提供推送消息的服务，使用极光推送的 Node.js SDK，使用了 Express 框架开发。
        `,
      },
      {
        name: "Severless-console",
        content: `
          公司前端内容统一入口，主要负责页面打开的速度优化，做了减少 js/css 资源请求，减小项目打包体积，ServerWorker 缓存，Audits 测试评分等措施。
        `,
      },
      {
        name: "create-nuxt-app 模板",
        content: `
          公司前端 Nuxt 项目开发模板，添加了项目面包屑导航方案，支持动态面包屑，支持 svg icon，支持 optional-chaining 和 nullish-coalescing-operator 语法。
        `,
      },
    ]
  },
  {
    company: "珠海市魅族科技有限公司",
    post: "前端工程师",
    date: "2018.10 ~ 2019.02",
    overview: "参与了多个项目的前端开发, 学习了项目多环境发布流程, 编写测试单, Git 工作流等知识。",
    projects: [
      {
        name: "魅族官网",
        content: `
          负责开发以及维护官网 PC 端和移动端页面, 使用的技术有 jQuery, Sass, Webpack 等;
          编写 shell 脚本, 实现了自动化发布页面到多环境（测试，灰度，生产）, 提高工作效率。
        `,
      },
      {
        name: "魅族商城",
        content: `
          开发了新的商品列表页面, 修复了购物车页面上包邮价格显示错误, 使用的技术栈为 Typescript, React。
        `,
      },
      {
        name: "阿拉丁活动配置后台",
        content: `
          这个项目是一个为运营人员提供的配置促销活动页面的后台项目, 主要负责开发配置活动页面所需要的组件, 如轮播图组件, Banner 图组件等, 使用的是 React 技术栈。
        `,
      },
      {
        name: "魅友卡",
        content: `
          为用户提供 '魅友卡' 实名认证及激活服务，负责开发了 PC 端及移动端页面以及与后端对接接口, 使用的是 Vue.js 技术栈。
        `,
      },
    ]
  },
  {
    company: "珠海唯美美妆",
    post: "前端开发组长",
    date: "2017.09 ~ 2018.08",
    overview: "负责公司前端项目开发, 前端人员面试, 前端任务分配等工作, 推行了 YApi 工具进行前后端数据接口的对接和管理。",
    projects: [
      {
        name: "唯美梳妆台小程序",
        content: `
          公司的电商小程序项目，主要开发了用户个性首页，VIP 会员，梳妆节活动，店铺管理等页面;
          解决了首页瀑布流加载卡顿不流畅, 结算页面付款价格显示错误, 小程序 Webview 组件内页面无法跳转到小程序内部页面等问题.
        `,
      },
      {
        name: "BOSS 管理后台项目",
        content: `
          公司内部数据管理平台，采用前后端分离的开发模式，使用 Vue.js 技术栈。我负责了前端项目的搭建, 前端路由管理, 全局状态管理等任务。
        `,
      },
    ]
  },
  {
    company: "珠海远光软件",
    post: "前端开发",
    date: "2016.03 ~ 2017.08",
    overview: "负责前端页面开发工作。",
    projects: [
      {
        name: "电 123 网上营业厅",
        content: `
          移动端 Web 应用，开发了项目的全部功能模块，使用 Vue.js 技术栈。
        `,
      },
      {
        name: "电 123 购售电交易平台",
        content: `
          PC 端后台管理项目，使用的技术有 Angular.js 框架以及 jQuery, Bootstrap 等。
        `,
      },
    ]
  }
]