let i = 1
for (var i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}
// 输出：
    // SyntaxError: Identifier 'i' has already been declared
// let 是一个定义在块作用域中的变量
// 而let当前的作用域是全局作用域，并且 let 所定义的 i 是不可以对其重复声明
// var 声明变量时，不管其声明在哪里，最终都会在全局作用域中重新声明，并且是最先被声明