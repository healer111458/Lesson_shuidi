//类型注释
function healer(){
    let count : number; 
    count = 123
    console.log(typeof count)
}
healer()

function getTotal(one : number, two :number){
    return one + two
}
const total = getTotal(1,2)


//类型推断
function healer1(){
    let countInference = 123
    console.log(typeof countInference)
}
healer1()

const one = 1;
const two = 2;
const three = one + two;

//对象中属性类型推断
const XiaoJieJie = {
    name:'刘英',
    age:18
}
console.log(typeof XiaoJieJie.name)
console.log(typeof XiaoJieJie.age)