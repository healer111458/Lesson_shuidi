async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);
// 如果在函数中 return 一个直接量
// async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象
// Promise.resolve()
// Promise.resolve(x) 可以看作是
// new Promise(resolve => resolve(x)) 的简写
testAsync().then(v => {
    console.log(v);    // 输出 hello async
});
// .then() 在不使用 await() 时，处理Promise对象的方法
