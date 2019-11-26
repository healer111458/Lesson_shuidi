const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
//filesystem 内置模块
// console.log('hello node');

// fs.readFile('../text.txt',function(err,data){
//     if(err){
//         return console.error(err)//打印错误
//     }
//     console.log(data.toString());
// })
// //回调函数
//   //文件在哪？ 磁盘里 
//   //  js文件在哪里运行？ 内存  I/O操作
// //通过引入一个api来调用函数 base64 图片的格式
const image = fs.readFileSync("./car1.jpg").toString("base64");
//  console.log(image);
const client = new AipImageClassifyClient('17711747', '4x5FKVKfDzWHx8l5f4hVwAZY', 'GtmCjUpNr0j4652puZF53zrdhrhwSEGU');

client
  .carDetect(image)
  .then(function(result){
      console.log(result)
  })
