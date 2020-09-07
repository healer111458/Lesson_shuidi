class Person {
    name:string;
}

const person = new Person()
person.name = 'jspang.com'

console.log(person.name)

// 类的内部调用
class Person1 {
    public name:string;
    public sayHello(){
        console.log(this.name + ' say Hello')
    }
}

//类的外部调用
class Person2 {
    public name:string;
    public sayHello1(){
        console.log(this.name + 'say Hello')
    }
}

//类的外部调用
const person1 = new Person2()
person1.name = 'healer.com'
person1.sayHello1()
console.log(person.name)