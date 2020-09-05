// 对象类型
const xiaoJieJie:{
    name:string,
    age:number
} = {
    name:'大脚',
    age:18
}
console.log(xiaoJieJie.name)

//数组类型
const xiaoJieJies : String [] = ['谢大脚','刘英','小红']
console.log(xiaoJieJies)

//类类型
class Person{
    name: string
    age: number
}
const dajiao : Person = new Person()
dajiao.name = 'healer'
dajiao.age = 18
console.log(dajiao)

//函数类型
const jianXiaoJieJie : ()=> string = ()=>{return '大脚'}
console.log(jianXiaoJieJie())