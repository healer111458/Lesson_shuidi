// "hello"  String
// 使用 buffer 来存 怎么做？
// node   io   net   fs 
// 数据包通信  文件上传  压缩 流操作


// string -> 二进制 在发送 buffer stream
// “hello” express res.end("hello") buufer 是什么样
// "sring" 字符串
// buffer 是 js 二进制处理的类  new buffer(length, );
// hello h -> ascii码 -> 二进制去处理 -> buffer
// 01 8 16 32

var array = 'hello'.split('').map(v => {
    return '0x' + v.charCodeAt(0).toString(16)
  })
  console.log(array);
  
  const buf = new Buffer(array);
  // buf 存的16进制 转成高级的内容
  console.log(buf.toString());