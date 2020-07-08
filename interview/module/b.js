export let age = 1;
console.log('b.js 执行了...');
setTimeout(() => {
    age = 2;
}, 2000);

if(Math.random() > 0.5) {
    // commonJS
    const path = require('path')
}