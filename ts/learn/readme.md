# TS 学习笔记

 1. TS 静态类型 
  - TypeScript 的一个最主要特点就是可以定义静态类型
    eg:
        const count : number = 1;
  通过 ":"来注释变量类型。
  - 自定义静态类型，TS 可以自定义静态类型。首先自定义
    一个 a 类型，声明变量 b 时，注释为 a 类型变量
    eg:
        interface a{name:string} 
        const b : a = {name: 'healer'}
  - 对象类型，TS 中对象类型可以有几种形式：对象类型、数
    组类型、类类型、函数类型
    eg:
        对象类型：
            const xiaoJieJie:{
                name:string,
                age:number
            } = {
                    name:'大脚',
                    age:18
                }
            console.log(xiaoJieJie.name)
        数组类型：
            const xiaoJieJies : String [] = ['谢大脚','刘英','小红']
        类类型：
            class Person{}
            const dajiao : Person = new Person()
        函数类型：
            const jianXiaoJieJie : ()=> string =()=>{return '大脚'}
 2. 类型注解 和 类型推断
   - 类型注释：
        let count : number; 
        count = 123;
    当前代码明确指明 count 为 number 类型，这就是类型注释。
   - 类型推断：
        let countInference = 123;
    当前代码没有指明 countInference 为什么类型，但 TS 会自动去分析变量类型，得出是 number 类型。

    *如果 TS 能够自动分析变量类型， 我们就什么也不需要做了。
    *如果 TS 无法分析变量类型的话， 我们就需要使用类型注解。
    eg:
     类型推断：
        const one = 1;
        const two = 2;
        const three = one + two;
     类型注释：
        function getTotal(one : number, two :number){
            return one + two
        }

        const total = getTotal(1,2)
    (ps:对象中属性的类型也可以推断出来)