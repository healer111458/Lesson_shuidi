- electron 是 js 在 exe 的应用，在前端效率上的开发非常有帮助。
  - 滴滴 内部的即时通讯应用 ...
  - electron 是可跨平台  属于全端开发
  - RN Flutter Electron
  
  前端能力：
    Chromium / V8 js 技能优化

  1. chrome navigator.userAgent 为什么有 mozilla 字段
    Mozilla j开拓了浏览器内置devtool
    js 视野的能力
    红宝书 + 小黄书 + 阮一峰es6   前端 js + es6
    深入浅出node.js  全栈能力 node
    electron  chromium(chrome开源版本)
    使用 electron = chromium(UI) + node(系统:fs net ) 桌面应用  支持浏览器
    用web技术html/css/js 来做桌面应用  开发效率高  比同类开发语言(java/c#)要快很多

  2. 浏览器的进化历史：
    - 1989 互联网诞生 伯纳斯·李
    - 1990 Nexus 伯纳斯·李开发了第一个浏览器  不能显示图片 HTTP 0.9版本  实验级浏览器
    - 1993 NSCA 图片可见
    - 1994 网景Netscape  Mozilla 诞生  提供对 frame(框架) 的支持--框架嵌入<iframe>  嵌入第三方的页面 -> 商业广告
      *网关  运维 会在服务器端根据userAgent(HTTP1.0开始支持) 来判断是否是 Mozilla 从而提供iframe 页面

    - 1994 IE 浏览器  win95 在自己的 userAgent 中加入 Mozilla 的声明
      JavaScript 的开发
    - 2002 Mozilla 新版本出现
    - 2008 基于firefox的 chrome 出现，以简洁，多进程的快速稳定 10倍速的V8引擎
    - 2009 Ryan Dahl V8引擎(JS的解析工作) 通过c++的接口，可以操作硬件/设备驱动   js的非阻塞IO -> node js区别于PHP、python
    - 2011 英特尔 王文睿开发 node-webkit 使得浏览器与 node 结合
    - 2012 electron 组件复用 react/vue
        electron = chromium(UI) + node(系统:fs net 底层操作能力 npm ) 桌面应用 + NativeAPI(跨平台：Windows linux 右键复制能力 不同操作系统的兼容性)  从而使之能力再一次延申  加快了开发速度

    - 移动互联网
      React/vue   DOM 的 API性能低 代码复用
      React Native/Flutter/UniApp 的混合开发在 IOS/Android两个平台可以进行代码复用。

    *JS工程师可以进行前端开发 由于V8可以解析 js 使得 node/桌面端NW electron/App RN/Flutter/Uni语言开发 
    目前的应用开发是用 Android/IOS 作为壳子
    而代码的复用(组件化技术) 使得开发成本、开发效率的大大优化。

    美团/顺丰 需要 electron 因为浏览器容易被关闭

    - electron 项目的架构
        mvc模式   B/S结构的架构
        mvvm模式  react/vue的架构 用网页解析js  
        全栈应用：
        Native 