let i = 1
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}
// 输出：
      // 0
      // 1
      // 2
      // 3
      // 4
      // 5
      // 6
      // 7
      // 8
      // 9
      // 10
// let 在不同的块作用域中定义的变量，即使变量名相同，但其代表的意义是不同的
// 所以 let 可以在不同块作用域中定义一个同名变量，并且不会污染到其他作用域