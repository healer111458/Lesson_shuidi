const TULING = require('tuling');

const aiTuling = new TULING({
    key:'08ecffe5d0a7433784885f7f66fdfd8a'
});
//立即执行函数
 (async() => {
     //机器人
    //  console.log('arrow function')
    const result = await aiTuling.send({
        userid:1,
        info:'你觉得黄饶怎么样？',
        loc:'南昌市'
    });
    console.log(result);
 })()
 //console.log(func);
 //func();