const Koa = require('./lib/application');
let app = new Koa();

app.use((req, res) => { // ctx 对象的构建放弃了
  res.end('hello world');
})

app.listen(3000)