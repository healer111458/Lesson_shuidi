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
   