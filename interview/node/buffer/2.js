const buf1 = Buffer.alloc(10); // c风格的内存空间分配
// 文件  从客户端 -> 服务端
// 请求头  大小
// 服务器端 开辟这么大的空间 
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf1, buf2, buf3, buf4);