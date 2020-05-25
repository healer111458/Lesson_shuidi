# 《你不知道的javascript上》学习杂记
## 增长篇 第二章
### this全面解析
2.1 调用位置
     调用位置就是函数在代码中被调用的 位置（而不是声明的位置）。分析调用栈（就是为了到达当前执行位置所调用的所有函数）。
     eg:
        function baz() { 
            // 当前调用栈是：baz 
            // 因此，当前调用位置是全局作用域 
            console.log( "baz" ); 
            bar(); // <-- bar 的调用位置 
            }
        function bar() {
            // 当前调用栈是 baz -> bar 
            // 因此，当前调用位置在 baz 中 
            console.log( "bar" ); 
            foo(); // <-- foo 的调用位置 
            }
        function foo() { 
            // 当前调用栈是 baz -> bar -> foo 
            // 因此，当前调用位置在 bar 中 
            console.log( "foo" ); 
            }
            baz(); // <-- baz 的调用位置