# material design 来自google 的UI风格
   苹果 UI 拟物设计 扁平设计
   安卓 materrial design

   特色：
     从css风格 -> 组件化 -> react入门

   波浪感click：
     css

- material design 特点在于对交互的创新
    波浪感 进度的进度感
    移动端的细节 cursor: pointer 用的是非button  组件
                user-select: none
                stylus 嵌入式::after(伪类) :active::after(伪状态)


     1.background-image
        背景图片 url 引入的方式 渐变可生成
        即生成了背景 同时又不使用图片
        10% 白， 1%的透明
        transform: scale(12)
- 制作一堆的按钮  
    为开发准备好基础组件小程序里面使用过组件
    要用到的按钮，这里都会有：warning bigger block型
    提供 通用的 可变的 可兼容 各种常见要求(70%的业务开发) 就叫组件
    自己写下这个组件 以后可以复用
    css 可能发生变化(状态, promary circle block)  如何将变化封装进去？
    html:区别
    1. 把样式封装进去
        组件 样式分离
        组件(组合html cs js) 成为一个组件
- ReactDOM react 与 DOM 交互
  基本语法:
    组件功能众多：定义一个button组件
      type 文字 block ... 有通用性的需求
      <Boyfriend /> <Grilfriend />
      1. ReactDOM.render(<div><Button></Button></div>, document.getElementById('root))
      JSX语法
      才可以在root  里面显示组件 组件需要编译
      2. function Button () {
        let {  } = props
        return (
          <div></div>
        )
      }
      3. 只需要写一次  以后就可以直接使用