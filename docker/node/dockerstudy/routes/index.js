const router = require('koa-router')();
router.get('/',async(ctx,next) => {
  //把模板读取到内存之中，之后再使用pug模板的编译
  await ctx.render('index',{title:'首页'});
});

//commonjs规格: require+module.exports
module.exports = router