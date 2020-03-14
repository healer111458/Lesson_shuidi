const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/index',(ctx,next) => {
    ctx.body = 'healer'
})
app.use(router.routes())

app.listen(3000,()  => {
    console.log('serverr at port 3000')
})