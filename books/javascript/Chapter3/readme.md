# 《你不知道的javascript上》学习杂记
## 第三章
### 函数作用域和块作用域
3. 作用域 "气泡" 包含系列气泡互相嵌套排列，如何生成新的气泡：函数生成...
 3.1 函数中的作用域
    不只有函数可以生成作用域
    eg:
      function foo(a) {
        var b = 2; 
        // 一些代码
        function bar() { 
            // ... 
            }
        // 更多的代码
        var c = 3; 
      }
      
      全局访问：
       bar(); // 失败 
       console.log( a, b, c ); // 三个全都失败
       但是，这些标识符（a、b、c、foo 和 bar）在 foo(..) 的内部都是可以被访问的，同样在 bar(..) 内部也可以被访问（假设 bar(..) 内部没有同名的标识符声明）。

    解析:
      函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复 用（事实上在嵌套的作用域中也可以使用）。
  3.2 隐藏内部实现
     从所写的代码中挑选出一个任意的片段，然后用函数声明对它进行包装，实际 上就是把这些代码“隐藏”起来了。也就是说这段代码中的任 何声明（变量或函数）都将绑定在这个新创建的包装函数的作用域中，而不是先前所在的 作用域中。
     eg:
        function doSomething(a) { 
            b = a + doSomethingElse( a * 2 ); 
            console.log( b * 3 ); 
            }
        function doSomethingElse(a) {
            return a - 1; 
            }
        var b; 
        doSomething( 2 ); // 输出：15

        解析： b 与 doSomethingElse() 都暴露在doSomething() 作用域外，但实际上它们都是doSomething()内部具体要实现的内容。
            合理设计：
            function doSomething(a) {
                function doSomethingElse(a) {
                    return a - 1; 
                    }
                var b; 
                b = a + doSomethingElse( a * 2 ); 
                console.log( b * 3 ); 
                }
                doSomething( 2 ); // 输出：15
            这样 b 和 doSomethingElse(..) 都无法从外部被访问，而只能被 doSomething(..) 所控制。
      *规避冲突:
           “隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突， 两个标识符可能具有相同的名字但用途却不一样，无意间可能造成命名冲突。冲突会导致 变量的值被意外覆盖。
             eg:
               function foo() {
                   
                  function bar(a) {
                     i = 3; // 修改 for 循环所属作用域中的 i console.log( a + i ); 
                  }

                  for (var i=0; i<10; i++) { 
                    bar( i * 2 ); // 糟糕，无限循环了！ 
                  } 
               }
               foo();