//  小程序很简单 都是由page构成
// wxml wxss js json 声明

Page({
  navigateToAdd:function(){
   // console.log('去add页面');
   wx.navigateTo({
     url:'../add/add'
   })
  },
   navigateToList: function(){
     wx.navigateTo({
       url:'../list/list'
     });
   }
  
  
  


})
