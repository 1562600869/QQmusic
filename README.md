# ANAN-music

> Vue.js 打造高级实战——ANAN音乐 App

## 项目树
```
.
├── README.md
├── build---项目构建相关代码
│   ├── build.js----生产环境构建代码
│   ├── check-versions.js---检查node、npm等版本
│   ├── dev-client.js----热重载相关
│   ├── dev-server.js----构建本地服务器
│   ├── utils.js----构建工具相关
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js----webpack基本配置
│   ├── webpack.dev.conf.js-------webpack开发环境配置
│   └── webpack.prod.conf.js-------webpack生产环境配置
├── config---项目开发环境配置
│   ├── dev.env.js----开发环境变量
│   ├── index.js-----项目一些配置变量
│   └── prod.env.js----生产环境变量
├── index.html------主页面
├── package.json-----配置json
├── src-----源码目录
│   ├── App.vue---主组件
│   ├── api
│   │   ├── config.js ---配置URL中携带的方式提交的参数
│   │   ├── recommend.js-- 获取轮播的json数据，并且export把它输出出去
│   │   └── singer.js----getSingerList获取qq音乐歌手页的json数据和getSingerDetail歌手详情页的json数据
│   ├── base
│   │   ├── listview---歌手页的文件
│   │   │   └── listview.vue---歌手页的组件
│   │   ├── loading----懒加载文件
│   │   │   ├── loading.gif ----懒加载时的图片
│   │   │   └── loading.vue----懒加载组件
│   │   ├── scroll-----滚动的文件
│   │   │   └── scroll.vue----scroll组件
│   │   ├── slider---轮播的文件
│   │   │   └── slider.vue---slider组件
│   │   ├── song-list---歌手详情页的文件
│   │   │   └── song-list.vue----歌手详情组件
│   ├── common---基本的配置文件
│   │   ├── fonts----字体文件
│   │   │   ├── music-icon.eot---EOT是嵌入式字体，是微软开发的技术。
│   │   │   ├── music-icon.svg---SVG是由W3C制定的开放标准的图形格式
│   │   │   ├── music-icon.ttf-----TTF是Apple公司和Microsoft公司共同推出的字体文件格式。
│   │   │   └── music-icon.woff----WOFF（Web开发字体格式）是一种专门为了Web而设计的字体格式标准
│   │   ├── image---图片
│   │   │   └── default.png
│   │   ├── js----
│   │   │   ├── cache.js
│   │   │   ├── config.js
│   │   │   ├── dom.js
│   │   │   ├── jsonp.js
│   │   │   ├── mixin.js
│   │   │   ├── singer.js
│   │   │   ├── song.js
│   │   │   └── util.js
│   │   └── stylus----stylus样式
│   │       ├── base.styl
│   │       ├── icon.styl
│   │       ├── index.styl
│   │       ├── mixin.styl
│   │       ├── reset.styl
│   │       └── variable.styl
│   ├── components----vue公共组件
│   │   ├── header----头部
│   │   │   ├── logo@2x.png---头部图片
│   │   │   ├── logo@3x.png---头部图片
│   │   │   └── header.vue----头部组件
│   │   ├── music-list
│   │   │   └── music-list.vue---歌手歌曲列表
│   │   ├── singer-detail
│   │   │   └── singer-detail.vue---歌手详情组件
│   │   ├── tab-----主切换文件
│   │       ├── geshou.vue ---- 歌手页
│   │       ├── paihang.vue----排行页
│   │       ├── Ss.vue-------搜索页
│   │       ├── tab.vue -----路由页
│   │       └── tuijian.vue  ----推荐页
│   ├── main.js----程序入口文件，加载各种公共组件
│   ├── router---路由配置文件
│   │   └── index.js---路由
│   └── store----vuex配置文件
│       ├── actions.js
│       ├── getters.js
│       ├── index.js
│       ├── mutation-types.js
│       ├── mutations.js
│       └── state.js
└── static----静态文件，比如一些图片，json数据
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    └── 5.png

```

