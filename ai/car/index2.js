var https = require('https');
var qs = require('querystring');

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'iNwxwRN1tCtX5BvHfcTX6L8K',
    'client_secret': 'SEhTsxsPcjl7uHoyZWcSL2CjZcmacPSb'
});

https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res) {
        // 在标准输出中查看运行结果
        res.pipe(process.stdout);
    }
);
// const fs = require('fs')
// const AipOcrClient = require("baidu-aip-sdk").ocr;
// const image = fs.readFileSync("./car2.jpg").toString("base64");
// const client = new AipOcrClient('17712413', 'cHWtto03zKE0mZqt0XqLnvDb', 'fBwMGHgNqiWkuwL15ffGSVXavL47yZDA');

// const options = {};
// options["multi_delect"] = "true"
// client.licensePlate(image,options)
//   .then(function(result){
//       console.log(result);
//   })