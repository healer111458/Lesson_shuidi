const count : number = 1;
console.log(count)

//错误代码
// const count1 : number = 1;
// count1 = 'jspang'
// console.log(count1)

// 自定义静态类型
interface XiaoJieJie {
    uname: string ,
    age:number
} 

const  xiaohong : XiaoJieJie ={
    uname: '小红',
    age: 18
}
console.log(xiaohong)