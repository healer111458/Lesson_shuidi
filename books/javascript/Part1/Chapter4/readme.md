# 《你不知道的javascript上》学习杂记
## 第四章
### 提升
4.1 任何声明在某个作用域内的变量，都将附属于这个作用域。

*考虑 声明在前/赋值在前？
    eg:
        a = 2;
        var a;
        console.log(a);  //输出：2
    解析：
        编译器对代码进行词法分解：定义声明会在编译阶段，而赋值声明会被放在执行阶段。所以实际执行顺序是："var a; a = 2; console.log(a);"
4.2 编译器-词法作用域
    eg:
        console.log(a); //输出：undefined
        var a = 2; 
    解析：
        实际执行顺序："var a; console.log(a); a = 2;"
    
    这个过程就好像变量和函数声明从它们在代码中出现的位置被“移动”到了最上面。这个过程就叫作提升。也就是先声明，后赋值。
    只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。如果提升改变了代码执行的顺序，会造成非常严重的破坏。
    eg:
        foo();
        function foo() {
            console.log(a);//undefined 
            var a = 2;
        }
        foo函数的声明被提升，所以foo()的调用成功
    实际执行顺序：
        function foo(){
            var a;
            console.log(a);//undefined 
            a = 2;
        }
        foo();
    eg：
        foo();//TypeError
        bar();//ReferenceError
        var foo = function bar(){
            //...
        };
    实际执行顺序：
        var foo;
        foo();//TypeError  foo为变量而不是函数
        bar();//ReferenceError  bar还未声明
        foo = function(){
        var bar; 
        //...
        }
    
4.3 函数优先
    函数声明和变量声明都会被提升，但函数会首先被提升，然后才是变量。
    eg:
      foo();//1
      var foo;
      function foo() {
        console.log(1);
      }
      foo = function() {
        console.log(2);
      };

      输出 1 而不是 2 ！
    实际执行：
      function foo() { 
        console.log( 1 ); 
      }
      foo(); // 1 
      foo = function() { 
        console.log( 2 ); 
      };

      重复声明可覆盖：
        foo(); // 3
        function foo() { 
          console.log( 1 ); 
        }
        var foo = function() { 
          console.log( 2 ); 
        };
        function foo() { 
          console.log( 3 ); 
        }