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
2.2 绑定规则
   2.2.1 默认绑定
      最常用的函数调用类型：独立函数调用。
        eg：
            function foo() { 
                console.log(this.a); 
            } 
            var a = 2; 
            foo(); // 2
        解析：foo()的调用位置是在全局作用域中，调用栈也是全局作用域
        
        严格模式：
            function foo() { 
                "use strict"; 
                console.log(this.a); 
            }
            var a = 2; 
            foo(); // TypeError: this is undefined
   2.2.2 隐式绑定
        隐式绑定的规则是调用位置是否有上下文对象。
        eg：
            function foo() { 
                console.log( this.a ); 
            }
            var obj = { 
                a: 2, 
                foo: foo 
            };
            obj.foo(); // 2
        解析：当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因此 this.a 和 obj.a 是一样的。对象属性引用链中只有最顶层或者说最后一层会影响调用位置。调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。
        eg：
        function foo() { 
            console.log( this.a ); 
        }
        var obj2 = { a: 42, foo: foo };
        var obj1 = { a: 2, obj2: obj2 };
        obj1.obj2.foo(); // 42

        *问题：隐式丢失
            被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。
            eg：
                function foo() { 
                    console.log( this.a ); 
                }
                var obj = { a: 2, foo: foo };
                var bar = obj.foo; // 函数别名！
                var a = "oops, global"; // a 是全局对象的属性 
                bar(); // "oops, global"
            eg：
                function foo() { 
                    console.log( this.a ); 
                    }
                function doFoo(fn) { //fn 其实引用的是 foo 
                    fn(); // <-- 调用位置！ 
                }
                var obj = { a: 2, foo: foo };
                var a = "oops, global"; // a 是全局对象的属性 doFoo( obj.foo ); // "oops, global"
            解析：想要的是输出 a = 2 但实际输出 “opps,global”,是因为bar()被默认是一个函数调用，所以使用了默认调用。
   2.2.3 显示绑定
        call() & apply()
        eg:
            function foo() { 
                console.log( this.a ); 
            }
            var obj = { 
                a:2 
            };
            foo.call(obj); // 2
        解析：通过 call() 可以把 this 强制绑定到 obj 上。
    1. 硬绑定：显式绑定的一个变种
        eg：
            function foo() { 
                console.log( this.a ); 
            }
            var obj = { a:2 };
            var bar = function() { 
                foo.call(obj); 
            };
            bar(); // 2 
            setTimeout(bar, 100); // 2 
            // 硬绑定的 bar 不可能再修改它的 this 
            bar.call(window); // 2