var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }  
  };
  
  var Counter1 = makeCounter();
  var Counter2 = makeCounter();
  console.log(Counter1.value()); /* logs 0 */
  Counter1.increment();
  Counter1.increment();
  console.log(Counter1.value()); /* logs 2 */
  Counter1.decrement();
  console.log(Counter1.value()); /* logs 1 */
  console.log(Counter2.value()); /* logs 0 */

//   两个计数器 Counter1 和 Counter2 都可以维护它们各自的独立性的。
//   每个闭包都是引用自己词法作用域内的变量 privateCounter。
//   每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。
//   然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。