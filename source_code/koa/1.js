// 使用es6 实现，vue3 中

let o1 = {a: 'hello'}
let o2 = Object.create(o1);  // koa 源码中，那个对象会使用这个？

o2.b = 'world';

console.log('o1:',o1.b);  //  undefined
console.log('o2:',o2.a);  //  hello
console.log(o2.__proto__ === o1);
