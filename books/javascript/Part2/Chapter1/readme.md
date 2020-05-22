# 《你不知道的javascript上》学习杂记
## 增长篇 第一章
### 关于this
   this 关键字是 JavaScript 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的作用域中。
   *任何足够先进的技术都和魔法无异。--Arthur C. Clarke
1.1 为什么要使用this
    eg:
        function identify() {
            return this.name.toUpperCase(); 
        }
        function speak() {
            var greeting = "Hello, I'm " + identify.call(this); 
            console.log(greeting); 
        }
        var me = { name: "Kyle" };
        var you = { name: "Reader" };
        identify.call( me );   // KYLE 
        identify.call( you );  // READER 
        speak.call( me );      // Hello, 我是 KYLE 
        speak.call( you );     // Hello, 我是 READER
    eg:
        如果不使用 this，那就需要给 identify() 和 speak() 显式传入一个上下文对象。
        function identify(context) {
            return context.name.toUpperCase(); 
        }
        function speak(context) {
        var greeting = "Hello, I'm " + identify(context);    
        console.log( greeting ); 
        }
        identify( you );    // READER 
        speak( me );        //hello, 我是 KYLE

    解析：this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。当使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this 则不会这样。
1.2 误解
  1.2.1 指向自身:函数内部引用函数自身，原因：递归或在第一次调用或自己接触绑定的事件处理器。
	eg：
		function foo(num) { 
			console.log("foo: " + num); // 记录 foo 被调用的次数
			this.count++; 
		}foo.count = 0;
		var i;
		for (i=0; i<10; i++) {
			if (i > 5) { 
				foo( i ); 
			} 
		}
		输出：
		// foo: 6 
		// foo: 7 
		// foo: 8 
		// foo: 9 
		// foo 被调用了多少次？ 
		console.log( foo.count );  //输出：0
	解析：词法作用域

	  *如果要从函数对象内部引用它自身，不只要 this 还需要一个只想函数对象的词法标识符(变量)来引用。
  	eg:
			function foo() { 
				foo.count = 4; // foo 指向它自身 
			}
			setTimeout( function(){ //匿名(没有名字的)函数无法指向自身 
			}, 10 );
		解析：第一个函数被称为具名函数，在它内部可以使用 foo 来引用自身。第二个函数传入 setTimeout() 的回调函数(匿名函数)没有名称标识符，因此无法从函数内部引用自身。

		解决方法：
			强制 this 指向 foo 函数对象：
			function foo(num) { 
				console.log( "foo: " + num ); // 记录 foo 被调用的次数 
				// 在当前的调用方式下，this 指向 foo
				this.count++; 
			}
			foo.count = 0;
			var i;
			for (i=0; i<10; i++) {
				if (i > 5) { // 使用 call() 可以确保 this 指向函数对象 foo 本身 
				foo.call( foo, i ); 
				} 
			}
			// foo: 6 
			// foo: 7
			// foo: 8 
			// foo: 9 
			// foo 被调用了多少次？ 
			console.log( foo.count ); // 4
	1.2.2 它的作用域
		this 指向函数的作用域。某种情况下它 是正确的，但是在其他情况下它却是错误的。this 在任何情况下都不指向函数的词法作用域。作用域无法通过代码访问。
		
		this 无法跨作用域访问。
		eg：
			function foo() {
				var a = 2;
				this.bar(); 
			}
			function bar() { 
				console.log( this.a ); 
			}
			foo(); // ReferenceError: a is not defined
		解析：foo()函数码试图通过 this.bar() 来引用 bar() 函数。这不仅是对this的使用错误，同时还是对作用域的使用错误。this 无法引用一个词法作用域内部的东西。
1.3 this
	this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包 含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的 其中一个属性，会在函数执行的过程中用到。
	this 既不指向函数自身也不指向函数的词法作用域。this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。