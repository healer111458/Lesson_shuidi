## 模块化：
    JavaScript 模块化
    模块化种类(三种)：ESModules，commonjs，



    ESModule
        1. import/exorpt 语句优先执行
        2. tree-shaking: webpack 中打包时优化代码
        3. 方便 JS 引擎做静态分析(在代码还没有运行时)，从而可以得知引入了哪些模块
        4. import 引入的是一个引用

        *静态分析：在代码还没有运行时
    CommonJS
        1. 可以放置于逻辑代码块中
        2. 不可以做静态分析
        3. 引入的是一个拷贝