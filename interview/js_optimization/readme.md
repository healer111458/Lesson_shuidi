## 性能优化

- http://www.baidu.com  发生什么？
  全栈启用https
  
  状态码:
    304 
    301 永久性跳转
    302 临时性的跳转 
        GET跳转不会有问题
        POST -> 会降级为GET
    307 临时重定向，不会从 POST 变为 GET
        api请求时 POST也会转为GET

        点击一个a 不跳转：
        prevent  除了prevent 还有 status code

        状态码： 
            1xx: 目前正常 客户端可以继续发送请求或忽略这个响应
            101： Swithching Protocol
            http 升级为 websocket 时使用
            2xx:
            204代表没有返回 单请求成功
            205 不返回内容 但要求刷新视图  应用场景：表单不要多次提交  规避了
            206 应用场景 用于大文件上传(断点续传)，多文件上传
            3xx
            301 永久跳转 http -> https  有的老域名废弃 老用户从老域名出来
            302 临时跳转
            304 Not Modified
                If-Modified-Since 
            4xx:
            400 Bad Request 报文存在错误
            401 Unauthorized
            403 请求被拒绝
            404 
            405 Method Not Allowed
            408 Request Timeout
            409 多个请求冲突
            413 请求体数据过大
            429 客户端发送太多请求
            431 请求头的字段内容太大
            5xx：
            500 Internal Server Error
            501 Not Implemented
            502 Bad Gateway
            503 服务忙
            404 Not Find
- js 优化
  - eval  with 都不适用
    eval 可以把任何的js 文本运行起来  曾经是黑科技
    但eval特别消耗性能 
    安全性不足  容易遭受 XSS攻击
    cookie 里面可能有用户的身份信息，如果用户信息被劫持 eval 拿到文本文件 js 里面存放 cookie 信息  ajax 发给他自己的服务器jsonp 用户的cookie就可以拿到。
  - 如何解决：
      - cookie 中有 httpOnly 方法  核心的cookie加上httpOnly
      - 用户输入，进行前后端转义 encodeURIComponent <script> ''
      - 加载的顺序：
        css 放在 head 中，因为需要尽快看到页面
        script 阻塞  加上 defer、async 属性 取消阻塞 <script src="" dafer>
        js 文件时动态代码  动态的操作DOM 引入 script 标签时需要下载并执行
        js 文件从下载开始  放在 body 的尾部 有阻塞
        css 雪碧图 现在的需求 可以减少 http 请求 缺点是：第一次下载中比较慢
        雪碧图 css background-position 不好维护，css难写
        alley iconfont 为什么不会影响性能 可以用到 cdn 缓存 阿里：部署 cdn 集群 img1.taobao.com 解析时会选择离本地最近的服务器 可直接走 cdn 服务器
        背景图 直接img src="" 增加了 http 请求 没有http请求，已经被 webpack 打包成 base64
        现在如果有请求，是因为 http 协议更新了对它的请求 http协议版本 0.9 1.0 1.1 2.0 3.0