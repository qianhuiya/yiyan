# SongQiEn-Blog 通用网站导航

## About | 关于

![](https://img.shields.io/badge/Base-Vue2.2-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vue--Cli3-orange.svg)
![](https://img.shields.io/badge/Installer-Npm/Yarn-red.svg)

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。兼容了多平台的显示效果（基于Flex布局），方便游客浏览您的个人网站.

页面分为两部分，一个是全屏的展示页，一个是导航抽屉页，阅读下面的“使用方法”来为您的网站配置基本信息与导航信息，[点击查看网站示例](https://qianhuiya.github.io/)。

![](https://i2.tiimg.com/729639/e901cc2f218d5e32.png)
![](https://i1.fuimg.com/729639/f9f5b430dfcac45e.png)

## How to use | 使用方法

安装依赖：

```shell
npm install # 如果安装出错请使用cnpm安装
```

开发模式：

```shell
npm run serve
```

本项目中，提供了两种使用方法：

一种是只需要将网站的相关信息按要求填入配置文件，之后再编译整个项目就可以生成一个适用于你的网站的静态导航页面；

另一种则是为页面添加后台数据支持，详情请参阅下文的第2步。

### 1. 配置信息

在 `/src/config.js` 存放了项目的基本配置信息，配置示例如下：

```js
const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Song-QiEn"; // 个人网站名字

const BASICS_LOGO = "https://i2.tiimg.com/729639/a15b88932e446a70.png" //引导页默认LOGO,此项添加需将下一项置为空,本地照片引用require
const LOGO_CENTER = ""; //更换引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url,留空为默认背景色
  "https://i1.fuimg.com/729639/3ad10bcd8f7d4f81.jpg",
  "https://i1.fuimg.com/729639/aa108f67c64ccf4b.jpg",
  "https://i1.fuimg.com/729639/a85ee5b40c9e4ae8.jpg",
  "https://i1.fuimg.com/729639/36f1104c8677ba2b.jpg",
  "https://i1.fuimg.com/729639/baa837ef4257e592.jpg",
  "https://i1.fuimg.com/729639/7728fce9de1d3970.jpg"
];

const SLOGAN = [  // Logo下方显示的标题
  "我们都留在美丽的经年",
  "还有温度,还似迷途",
  "我追着风  抓不住一个梦",
  "你说幸福会缤纷",
  "那些期盼在渐行渐远",
  "多少次跌跌撞撞才学会坚强"
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const BASICS_ICONFONT = "https://i1.fuimg.com/729639/73a88a33ab843bd3.png" //默认图标

const SORT_DATA = [ // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写
  { sortId: 1, title: "MyFavorite" },
  { sortId: 2, title: "AboutMe" }
];

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "翻译",
    subtitle: "百度翻译",
    url: "https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/",
    icon: "",
  },
  {
    pageId: 2,
    sortId: 1,
    title: "花瓣",
    subtitle: "图片素材网",
    url: "https://huaban.com/",
    icon: "",
  }, {
    pageId: 3,
    sortId: 1,
    title: "CSDN",
    subtitle: "开发者社区",
    url: "http://www.YourWebPage.com/",
    icon: "",
  }, {
    pageId: 4,
    sortId: 1,
    title: "Github",
    subtitle: "Github",
    url: "https://github.com/",
    icon: "",
  }, {
    pageId: 1,
    sortId: 2,
    title: "Github",
    subtitle: "Song-QiEn  Github",
    url: "https://qianhuiya.github.io/",
    icon: "http://i1.fuimg.com/729639/41efabb79a58bcd4.png",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Gitee",
    subtitle: "Song-QiEn  Gitee",
    url: "https://gitee.com/qianhuiya/",
    icon: "https://i1.fuimg.com/729639/8397da6493ce8e09.jpg",
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写
//无icon图标则为默认图标-BASICS_ICONFONT

```

### 2. 添加服务器支持（可选）
如果想要使用后台服务器来加加载和管理数据，请将 `SERVE` 设置为 `true` 并将 `HOST` 填写为你的服务器接口地址，这样前台页面就会使用Ajax来向你添加的服务器地址来请求数据。同时你需要按照 [API.md](./API.md) 规范来编写后台API接口，以及按照 [DataBase.md](./DataBase.md) 规范来创建数据库。

> 连接后台后则无需填写 `config.js` 中的 `PAGES_DATA` 和 `SORT_DATA` 数据。

### 3. 编译
确保已安装 `npm` 以及安装好了项目依赖之后运行：

```
$ npm run build
```

生成的文件将存放在 `/dist` 目录下，Enjoy!

## Log | 更新日志

2020.11.:

- 变化：动态添加右上角徽标,每次进入切换不同背景图
