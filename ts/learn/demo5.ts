interface Girl {
    name : string;
    age  : number;
    bust : number;
    waistline ?: number;
    [propname:string]:any;
    say():string;
}
const screenResume=( girl:Girl)=>{
    girl.age<24 && girl.bust>=90 && console.log(girl.name+'进入面试') 
    girl.age>24 || girl.bust<90  && console.log(girl.name+'你被淘汰')
}

const getResume=( girl:Girl)=>{
    console.log(girl.name+'年龄是：'+girl.age)
    console.log(girl.name+'胸围是：'+girl.bust)
    girl.waistline && console.log(girl.name+'腰围是：'+girl.waistline)
    girl.sex && console.log(girl.name+'性别是：'+girl.sex)
}
const girl={
    name:'大脚',
    age:18,
    bust:94,
    sex:'女',
    say(){
        return '欢迎光临 ，红浪漫洗浴！！'
    }
}

screenResume(girl)
getResume(girl)