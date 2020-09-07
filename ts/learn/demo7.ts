class Lady1{
    content='Hi，帅哥'
    sayHello(){
        return this.content
    }
}

class XiaoJieJie1 extends Lady1{
    sayLove(){
        return 'I love you!'
    }
    sayHello(){
        return  'Hi , honey!'
    }
}

const goddess1 = new XiaoJieJie1()
console.log(goddess1.sayHello())
console.log(goddess1.sayLove())
