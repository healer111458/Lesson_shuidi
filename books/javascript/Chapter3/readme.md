# 《你不知道的javascript上》学习杂记
## 第三章
### 函数作用域和块作用域
3. 作用域 "气泡" 包含系列气泡互相嵌套排列，如何生成新的气泡：函数生成...等等
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
           “隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突， 两个标识符可能具有相同的名字但用途却不一样，无意间可能造成命名冲突。冲突会导致 变量的值被意外覆盖。解决方法：全局命名空间、模块管理。
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
               
               解析：
                  bar(..) 内部的赋值表达式 i = 3 意外地覆盖了声明在 foo(..) 内部 for 循环中的 i。在这 个例子中将会导致无限循环，因为 i 被固定设置为 3，永远满足小于 10 这个条件。

       1. 全局命名空间
          对容易引发变量冲突的函数或变量进行封装，让它们变成某个命名空间的属性
          eg:
             var MyReallyCoolLibrary = { 
               awesome: "stuff", 
             doSomething: function() { 
              // ... 
             },
             doAnotherThing: function() {
               // ...     
             } 
            };
       2. 模块管理
          模块化能够保持函数或变量私有、无冲突的作用域规则下。
  3.3 函数作用域
      经过函数封装的代码段就会私有化，外部无法直接访问。
      eg:
        var a = 2;
        function foo() { // <-- 添加这一行
          var a = 3; 
          console.log( a ); // 3 
        } // <-- 以及这一行 
        foo(); // <-- 以及这一行 

        console.log( a ); // 2
      解析: 将代码段“var a = 3; console.log( a );”封装与函数 foo() 中，于是在函数外部调用失败。

      但添加函数会“污染”所在作用域，其次，需要通过函数名 foo() 才能调用。
      然而，JavaScript 提供了能够不需要添加函数名的而能够封装的方法。eg:
              var a = 2;
              (function foo(){ // <-- 添加这一行
                  var a = 3; 
                  console.log( a ); // 3 
              })(); // <-- 以及这一行 
              console.log( a ); // 2
             解析：
                包装函数的声明以 (function... 而不是以function... 因此，函数会被当作函数表达式而不是一个标准的函数声明来处理。
                (functionfoo(){..})作为函数表达式意味着foo只能在..所代表的位置中被访问，外部作用域则不行。foo变量名被隐藏在自身中意味着不会非必要地污染外部作用域。


                *区分函数声明和表达式最简单的方法是看 function 关键字出现在声明中的位置（不仅仅是一行代码，而是整个声明中的位置）。如果 function 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。
                函数声明与函数表达式之间的区别在于他们的名称标识符会绑定在何处。
    3.3.1 匿名和具名
      匿名函数：
      setTimeout(function(){
        console.log("Iwaited1second!");
      },1000);
      因为function()..没有名称标识符。函数表达式可以是匿名的，而函数声明则不可以省略函数名。
      匿名函数的缺点：
        1.匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。
        2.如果没有函数名，当函数需要引用自身时只能使用已经过期的arguments.callee引用。eg：如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。
        3.匿名函数省略了对于代码可读性/可理解性很重要的函数名。一个描述性的名称可以让代码不言自明。
    3.3.2 立即执行函数表达式(IIFE)
      eg: 
        vara=2;
        (functionfoo(){
          vara=3;
          console.log(a);//3
        })();
        console.log(a);//2
      解析：
        由于函数被包含在一对()括号内部，因此成为了一个表达式，通过在末尾加上另外一个() 可以立即执行这个函数，比如(functionfoo(){..})()。第一个() 将函数变成表达式，第二个()执行了这个函数。
      进阶用法：
        1. 把它们当作函数调用并传递参数进去
          eg:
            vara=2;
            (function IIFE(global){
              var a = 3;
              console.log(a);  //3
              console.log(global.a);  //2
              })(window);
              console.log(a);  //2

        2. 倒置代码的运行顺序
          eg:
            vara=2;
            (functionIIFE(def){
              def(window);
            })(functiondef(global){
              vara=3;
              console.log(a);//3
              console.log(global.a);//2
            });
          解析：
            函数表达式def定义在片段的第二部分，然后当作参数（这个参数也叫作def）被传递进IIFE函数定义的第一部分中。最后，参数def（也就是传递进去的函数）被调用，并将window传入当作global参数的值。
  3.4 块作用域
    eg：
      for(vari=0;i<10;i++){
        console.log(i);
      }
    解析：变量 i 在块作用域 for() 中被使用
    eg:
      varfoo=true;
      if(foo){
        varbar=foo*2;
        bar=something(bar);
        console.log(bar);
      }
    解析：变量 bar 仅在 if 中使用
    
    *但是，当使用var声明变量时，它写在哪里都是一样的，因为它们最终都会属于外部作用域。
      再次考虑for循环的例子：
      for(vari=0;i<10;i++) {
        console.log(i);
      }
      为什么要把一个只在for循环内部使用（至少是应该只在内部使用）的变量i污染到整个函数作用域中呢？
    3.4.1　with
      用with从对象中创建出的作用域仅在with声明中而非外部作用域中有效。
    3.4.2　try/catch
      ES3规范中规定try/catch的catch分句会创建一个块作用域，其中声明的变量仅在catch内部有效。
        eg：
          try{
            undefined();//执行一个非法操作来强制制造一个异常
          }
          catch(err) {
            console.log(err);  //能够正常执行！
          }
          console.log(err);  //ReferenceError:errnotfound
          
          err仅存在catch分句内部，当试图从别处引用它时会抛出错误。
    3.4.3　let
      ES6引入了新的关键字 let 它可以将变量绑定到所在的任意作用域中(通常是{..}内部)。let 为其声明的变量隐式的存在于所在的块作用域。
      eg:
        varfoo=true;
        if(foo){
          letbar=foo*2;
          bar=something(bar);
          console.log(bar);
        }
        console.log(bar);  //ReferenceError
      解析：用 let 将变量附加在一个块作用域中 -> 隐式(私有化)
      eg：
        var foo = true;
        if (foo) {
           { // <-- 显式的快
              let bar = foo * 2; 
              bar = something( bar ); 
              console.log( bar ); 
           } 
        }
        console.log(bar); //ReferenceError
      解析: 在if声明内部显式地创建了一个块，如果需要对其进行重构，整个块都可以被方便地移动而不会对外部if声明的位置和语义产生任何影响。

        let的重要功能：
          1. 垃圾收集
          2. let循环
    3.4.4 const
      ES6引入了const，可以创建块作用域变量，但其值是固定常量。之后任何试图修改值的操作都会引起错误。
      eg:
        varfoo=true;
        if(foo){
          var a=2;
          const b=3;//包含在if中的块作用域常量
          a=3;//正常!
          b=4;//错误!
        }
        console.log(a);//3
        console.log(b);//ReferenceError!