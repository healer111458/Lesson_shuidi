const task = new Promise((resolve, reject) => {     
    // 任务未决阶段代码  
    // 立即执行  
    console.log("开始100米长跑");  
    setTimeout(() => {  
       if(Math.random() > 0.5){  
           // 成功： 跑完了  
           // 推向成功  
           resolve("跑完了");   
       }
       else{
           // 失败： 腿摔断了  
           // 推向失败  
           reject("腿摔断了");
       }
    }, 1000)
});
task.then((result) => {
    console.log(result);
  })
  .catch((error) => {
  console.log(error);
})

// Promise 解决异步问题 Promise有三个状态：pending代表进行中，resolve代表成功，reject代表失败
// 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态
// 一旦状态改变，就不会再变，任何时候都可以得到这个结果
// ES6规定，Promise对象是一个构造函数，用来生成Promise实例
// Promise构造函数接受一个函数作为参数，分别是resolve和reject