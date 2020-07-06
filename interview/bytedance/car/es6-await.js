function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

test();
// await 在等 async 函数，然而 async 函数是返回一个 Promise 对象
// await 可以等任意表达式的结果
// await 是一个运算符
// 如果 await 等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西
// 如果 await 等到的是一个 Promise对象，那么await 会阻塞后面的代码，并等待 Promise 对象的 resolve
    // 然后得到resolve 的值作为await的运算结果