const screenResume1=( name:string, age:number,bust:number)=>{
    age<24 && bust>=90 && console.log(name+'进入面试') 
    age>24 || bust<90  && console.log(name+'你被淘汰')
}

screenResume1('大脚',18,94)

const getResume1=(name:string,age:number,bust:number)=>{
    console.log(name+'年龄是：'+age)
    console.log(name+'胸围是：'+bust)
}
getResume1('大脚',18,94)