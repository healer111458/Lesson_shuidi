const fs = require('fs')
const AipOcrClient = require("baidu-aip-sdk").ocr;
const image = fs.readFileSync("./car2.jpg").toString("base64");
const client = new AipOcrClient('17712413', 'cHWtto03zKE0mZqt0XqLnvDb', 'fBwMGHgNqiWkuwL15ffGSVXavL47yZDA');

const options = {};
options["multi_delect"] = "true"
client.licensePlate(image,options)
  .then(function(result){
      console.log(result);
  })

 // .then(function(result){
     // console.log(result)
//   })