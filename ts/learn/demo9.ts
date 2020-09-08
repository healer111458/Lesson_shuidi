class Person{
    constructor(public name:string){}
}

class Teacher extends Person{
    constructor(public age:number){
        super('jspang')
    }
}

const teacher = new Teacher(18)
console.log(teacher.age)
console.log(teacher.name)