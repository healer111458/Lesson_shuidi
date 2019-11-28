Page({
  data:{
     entities:[
      {
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574164227435&di=9f4ec7f6fab104f3831a28ecfbd9ccbb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201510%2F20%2F20151020194029_wcySK.jpeg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: '../../assets/images/landscape.png',
        title: 'C',
        description: 'cc'
      },
     ]
  },
  onLoad(){
    console.log('onLoad');
  },   
  onReachBottom(){      //生命周期函数
    //console.log('触底了');
    const data=[...this.data.entities,
      ...this.data.entities,];
      this.setData({
        entities:data
      })
  }
})