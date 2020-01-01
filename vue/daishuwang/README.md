- 组件式开发
    页面由z组件构成（拼乐高），而非标签ian（传统切页面）
    Facebook 由一万多个组件拼起来，复用
    components/header/header  效力于多个页面
- Object.assign({},.......)   对象由assign构建
    来自ES6
- 组件化思维
    表面上一个页面由多个组件构成，页面开发可以划分任务
    催生的是大量的团队合作
    每个组件要解耦
    - scoped （作用域）
        .app[data-v-a2e3d4]
- VUE 禁止DOM操作，
    ref = ""  //票据
    this.$refs.   //查找元素