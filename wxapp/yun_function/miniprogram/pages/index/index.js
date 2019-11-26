Page({
  http(){
    //要去另外的一个网站拿数据
    // 上云  之后计算能力非常强  前端，后端合作的
    // wx.clound.callFunction({
    //   name:'http'
    // })
    wx.cloud.callFunction({
      name: 'http'
    })
    //下云   从云端下来
    .then(res => {
      //res->云中的数据
      console.log(res);
    })
  }
})