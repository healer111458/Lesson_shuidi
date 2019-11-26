const db = wx.cloud.database();
const productsCollection = db.collection('products');
//表 collection 

Page({
    addData(){
        //api 
        productsCollection.add({
            data:{
                title:`Product ${(Math.random() * 100).toString()}`,
                price:Math.random()*1000,
                color:"blue",
                tags:["羽绒服","国际品牌"],
                view:Math.random() * 10,
                image: 'https://img.newyx.net/article/image/201605/31/2ebe120914.jpg'
            }
        }).then(res =>{
            console.log(res);
        })
    }
})