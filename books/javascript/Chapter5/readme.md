# 《你不知道的javascript上》学习杂记
## 第五章
### 作用域闭包
5.1 闭包无处不在，需要的是识别并加以利用。
5.2 实质问题
  当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用 域之外执行。
  eg：
    function foo() {
      var a = 2;
      function bar() {
        console.log( a ); // 2 
      }
      bar(); 
    }
    foo()；
  解析：
    基于词法作用域的查找规则(RHS引用查询)。
    *词法作用域查找规则只是闭包的一部分。
  eg：
    function foo() {
      var a = 2;
      function bar() { 
        console.log( a ); 
      }
      return bar; 
      }
      var baz = foo(); 
      baz(); // 2 —— 朋友，这就是闭包的效果
  解析：
    在 foo() 执行后，其返回值（也就是内部的 bar() 函数）赋值给变量 baz 并调用 baz()，实际上只是通过不同的标识符引用调用了内部的函数 bar()。