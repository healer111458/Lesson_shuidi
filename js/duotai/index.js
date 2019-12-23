function Person(name, age) {
    this.name = name;
    this.age = age;
}

//覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a dog,my name is ' + this.name;
}

function Man(name, age) {
    console.log(arguments, '----')
        //Person  构造函数  把父类的构造函数执行一下  （继承）
    Person.apply(this, arguments); //apply指定借一下Person属性

}
//继承Person
Man.prototype = Object.create(Person.prototype); //创建一个对象 以Person.prototype为模板 可用Person中的方法
var apr = new Man('安培儿', 19);

//将原型链中tostring方法覆盖
Man.prototype.toString = function() {
    return 'I am a pig,my name is ' + this.name;
}
console.log(apr + "");
var person = new Person('小豪', 19);
console.log(person + ""); //类型转化   +""  对象会进行toString化
const arr = ['安培儿', '伟哥', '小豪'];
//console.log(Object.prototype.toString.call(arr)); //object -> { }  .call借  将某个方法借给对象使用
// [object Array]