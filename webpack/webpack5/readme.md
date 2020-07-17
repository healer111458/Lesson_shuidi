wepack 打包完 就是一个 很大 立即执行函数

```js
(function() {

})()
```
立即执行函数，好作用域隔离。
导致其他模块比如 app2 无法引用 app1 的东西。


有了 模块联邦 允许 针对 app1 里面的 Button组件（或者其他独立的模块），
单独打包出一个 入口，允许 app2 引用它

## set up
cd app1 && cnpm i && npx webpack-dev-server
cd app2 && cnpm i && npx webpack-dev-server