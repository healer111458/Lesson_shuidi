## React 学习

- React 优点：
    生态强大：现在没有哪个框架比React的生态体系好的，几乎所有开发需求都有成熟的解决方案。

    上手简单: 你甚至可以在几个小时内就可以上手React技术，但是他的知识很广，你可能需要更多的时间来完全驾驭它。

    社区强大：你可以很容易的找到志同道合的人一起学习，因为使用它的人真的是太多了。

- React & Vue
    React.js相对于Vue.js它的灵活性和协作性更好一点，所以我在处理复杂项目或公司核心项目时，React都是我的第一选择。而Vue.js有着丰富的API，实现起来更简单快速，所以当团队不大，沟通紧密时，我会选择Vue，因为它更快速更易用。

- JSX 语法
    JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析。在JSX中也是可以使用js语法。

- 组件外层包裹原则
    React 要求必须在组件的最外层进行包裹，Fragment 标签：当组件最外层不能有包裹元素时， Fragment 标签可以为我们解决这一问题。

- 响应式设计和数据绑定
    React 不建议你直接操作DOM元素,而是要通过数据进行驱动，改变界面中的效果。React 会根据数据的变化，自动的帮助你完成界面的改变。所以在写 React 代码时，你无需关注 DOM 相关的操作，只需要关注数据的操作就可以了。
    * 在进行数据绑定时我们需要重新用 bind 设置一下指向。
    * React 中改变值需要使用 this.setState 方法。

- 扩展运算符
    '...' 这个是ES6的新语法，叫做扩展运算符。意思就是把 list 数组进行了分解，形成了新的数组，然后再进行组合。
    * apply() & call()

- JSX 中 html 各类问题
    1. html 解析问题：使用 dangerouslySetInnerHTML 属性解决输入 html 标签渲染问题
    2. <label> 标签的 htmlfor 属性，解决 label 点击问题

- React 组件拆分
    组件拆分按父子组件拆分。(优先)

- React 父子组件传值
    1. 父组件向子组件传值：属性传值法：父组件向子组件传递内容，靠属性的形式传递。
    2. 子组件向父组件传值：React 中子组件不能直接修改父组件数据，需要通过父组件传递修改数据的方法，子组件调用修改方法传递数据。

- React 单向数据流
    组件不会改变接收的数据，它们只会监听数据的变化，当数据发生变化时它们会使用接收到的新值，而不是去修改已有的值。当组件的更新机制触发后，它们只是使用新值进行重新渲染而已。

- 面试：函数式编程的好处是什么？
    1. 函数式编程让我们的代码更清晰，一个功能就是一个函数。
    2. 函数式编程为我们的代码测试带来了极大的方便，更容易实现前端自动化测试。

- React 校验传递值
    PropTypes React 为校验传递值而开发的方法。必传值：isRequired 在某个必须要传递值的属性后面加上 isRequired

- ref 用法
    ref 是用来代替原来的 e.target.value 而 ref 的使用使得代码更直观，更语义化。
    * 问题：ref绑定获取数量需要异步，因为 setState 是一个异步函数，虚拟DOM的渲染要后执行 setState 提供了第二函数进行改良: this.setState({
        --------------
    },() => {
        console.log('-------')
    })

- React 生命周期函数
    生命周期四大阶段：
        1. Initalization: 初始化阶段
        2. Mounting: 挂在阶段
        3. Updation: 更新阶段
        4. Unmounting: 销毁阶段
        
        1. Initalization:定义属性（props）和状态(state)的阶段
        2. Mounting：挂载阶段，伴随着整个虚拟DOM的生成，它里边有三个小的生命周期函数：componentWillMount、render、componentDidMount。这也是生命周期的顺序，三者没有前后顺序。
        * 注意的问题
            componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化才会执行。
        3. Updation：组件发生改变的更新阶段，它有两个基本部分组成，一个是props属性改变，一个是state状态改变。
            shouldComponentUpdate 函数会在组件更新之前，自动被执行。它要求返回一个布尔类型的结果，必须有返回值。返回true，就同意组件更新;返回false,就反对组件更新。
            componentWillUpdate 在组件更新之前，但在shouldComponenUpdate 执行之后被执行。但是如果shouldComponentUpdate 返回false，这个函数就不会被执行了。
            componentDidUpdate 在组件更新之后执行，它是组件更新的最后一个环节。
            * componentWillReceiveProps 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。
        4. Unmounting：componentWillUnmount 它是在组件去除时执行。

- React - axios 数据请求
    可以在componentDidMount生命周期函数里请求ajax，我也建议在componentDidMount函数里执行，因为在render里执行，会出现很多问题，比如一直循环渲染；在componentWillMount里执行，在使用RN时，又会有冲突。所以强烈建议在componentDidMount函数里作ajax请求。

- axios 请求 EasyMock
    模拟数据叫做 mock

- css3 react动画
    