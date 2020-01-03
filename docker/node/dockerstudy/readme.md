- Koa 是最流行的node 轻量级框架  
   egg.基于koa的二次开发
- koa new -> app -> listen 
   /bin/www 
   www文件就是网站项目的启动文件
   http.createServer(app.callback())     //创建一个服务器


- 模板
   views
   koa-views()
   app.use()启用views中间件
   模板引擎 pug
- 路由 分层
   ruotes/index.js 
   koa-routes()    //返回router对象
   .get .post
   index.routes()
   交由app.use()
- logger
   koa-logger + app.use()
- 出错模块
- https://img.bosszhipin.com/    //图片域名
  https://bosszhipin.com/        //网页域名   
  静态资源  服务器端资源
  - IP
     静态资源   img.bosszhipin.com   dns解析->访问网络供应商（中国移动）->提供解析列表
     互联网公司会在网络供应商机房中装载cdn  如果网络供应商本地没有->渠道中央服务器请求一次->缓存到供应商本地
- koa-static
- 表单提交
   koa-bodyparser
      GET  请求头  head url?a=1&b=2   //明文传输
      POST  head[url body.length] + body

## node的发布
   docker 容器化
    node项目，写完后->测试工程师（环境）
   让项目再不同的机器里，享用相同的环境，跑起来  只需安装Docker
   