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
   - 函数参数和返回值 类型定义
    - 函数参数以及返回值类型
        function getTotal(one : number, two :number) : number{
            return one + two
        }
        const total = getTotal(1,2)
    当前代码指定了函数参数'one'、two' 的类型为 number 并且函数返回值
    类型为 number
    
    - 无返回值类型
        function sayHello() : void{
            console.log('hello world')
        }
    当前代码为函数无返回值 void 类型
    
    - never 类型
        function errorFuntion() : never{ 
            while(true){}
            console.log('Hello World')
        }
    当前代码为死循环，代码一直执行，而不会有结果
   
   - 对象类型的类型定义
    - 对象属性、返回值类型
        function add ({one , two } : {one:number, two:number}) :number{
            return one + two
        }
        const three = add({one:1,two:2})

        *当对象只有一个属性时：
            function getNumber ({one } :{one:number}) :number{
                return one;
            }
            const one = getNumber({one:1})
        当对象只有一个属性时，定义依旧要使用多对象定义方法
   
   - 数组类型定义
    
    - 一般数组
        const numberArr = [1,2,3] 
    TS 会解析为：const numberArr:number[] = [1,2,3] 

        const stringArr = ['a','b','c']
    TS -> const stringArr : string [] = ['a','b','c']

        const undefinedArr : undefined[]=[undefined,undefined]
    
    - 多类型元素值数组
        const arr: ( number | string )[] = [1,'string',2]
    
    - 数组中对象类型定义
        const xiaoJieJies : {name:string , age:Number}[] = [
            {name:'刘英',age:18},
            {name:'谢大脚',age:28}
        ]
      * 类型别名：type alias  简化代码，有利于代码复用
        type  Lady  =  {name:string , age:Number};
        const xiaoJieJies : Lady[] = [
            {name:'刘英',age:18},
            {name:'谢大脚',age:28}
        ]

        (ps:使用 类 来定义数组类型)
        class Madam {
            name: string ;
            age:number ;
        }   
        const xiaoJieJies : Madam[] = [
            {name:'刘英',age:18},
            {name:'谢大脚',age:28}
        ]
    
    - 元组
        元组是当数据源为CSV时，才使用的数组定义,它可以指定数组元素的类型
            const xiaojiejie : [string,string ,number]  = ['dajiao','teacher',28]
        当前代码指定了数组中前两个元素为 string,后面一个为 number。
     
     - 对象型元组
        const xiaojiejies:[string,string,number][]=[
            ['dajiao','teacher',28],
            ['liuying','teacher',18],
            ['cuihua','teacher',25],
        ]

 3. 接口 interface
    为方便代码复用，将重复的类型注释，定义为统一的接口
        interface Girl {
            name : string;
            age  : number;
            bust : number;
        }
    
   - 接口与类型别名区别
    类型别名可以直接给类型，而接口必须代表对象。
    类型别名：
        type Girl1= stirng
    接口：
        const girl={
            name:'大脚',
            age:18,
            bust:94
        }
   
   - 接口非必选值定义：在值类型定义前加'?'
    interface Girl {
        name : string;
        age  : number;
        bust : number;
        waistline ?: number;
    }
    
   - 允许加任意值
    interface Girl {
        name : string;
        age  : number;
        bust : number;
        waistline ?: number;
        [propname:string]:any;
    }
    
    - [propname:string]:any;}
        意思是，属性的名字是字符串类型，属性的值可以是任何类型。
    
    - 接口存储方法
        接口里不仅可以存属性，还可以存方法
        interface Girl {
            name : string;
            age  : number;
            bust : number;
            waistline ?: number;
            [propname:string]:any;
            say():string;
        }
    
    - 接口和类的约束
        class XiaoJieJie implements Girl{
            name="刘英"
            age=18
            bust=90
            say(){
                return '欢迎光临 ，红浪漫洗浴！！'
            }
        }
    
    - 接口继承
        interface Teacher extends Girl{
            teach():string
        }

    *接口只是在TypeScript里帮我们作语法校验的工具，编译成正式的js代码，就不会有任何用处了。

 4. 类
   - 类的基本用法
    class Lady{
        content='Hi，帅哥'
        sayHello(){
            return this.content
        }
    }
    const goddess = new Lady()
    console.log(goddess.sayHello())
    
    当前代码定义了一个 Lady 类，有一个 content 属性和一个 sayHello() 方法，新建一个 Lady 对象，可以访问它的方法
    
   - 类的继承
    class XiaoJieJie extends Lady{
        sayLove(){
            return 'I love you'
        }
    }

    const goddess = new XiaoJieJie()
    console.log(goddess.sayHello())
    console.log(goddess.sayLove())

    当前代码定义了一个 XiaoJiejie 类，它继承 Lady 类，所以可以使用自身方法、属性，也能使用父类的属性、方法。
  
   - 类的重写
        重写就是子类可以重新编写父类里边的代码。
        
        class XiaoJieJie extends Lady{
            sayLove(){
                return 'I love you!'
            }
            sayHello(){
                 return  'Hi , honey!'
            }
        }

        当前代码是通过子类对父类进行重写，在子类中对父类方法直接进行重写。
   
   - super 关键字
        super 关键字代表父类中的方法。

        class XiaoJieJie extends Lady{
            sayLove(){
                return 'I love you!'
            }
            sayHello(){
                return  super.sayHello()+'。你好！'
            }
        }

        当前代码通过 super 直接将 '你好' 加在父类方法后。
   
   - 类的访问类型
         private、protected 和 public

         class Person {
            name:string;
        }
        const person = new Person()
        person.name = 'healer'
        console.log(person.name)

        当前代码输出 healer 是因为我们如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。相当于class Person {public name:string;}

        *public 从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用。

        class Person {
            public name:string;
            public sayHello(){
                 console.log(this.name + 'say Hello')
            }
        }
        --------以下属于类的外部--------
        const person = new Person()
        person.name = 'jspang.com'
        person.sayHello()
        console.log(person.name)

        *private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用。
            
            class Person {
                private name:string;
                public sayHello(){
                    console.log(this.name + 'say Hello')  //此处不报错
                }
            }
            --------以下属于类的外部--------
            const person = new Person()
            person.name = 'jspang.com'    //此处报错
            person.sayHello()
            console.log(person.name)  //此处报错
        
        *protected 允许在类内及继承的子类中使用
            
            class Person {
                protected name:string;
                public sayHello(){
                    console.log(this.name + 'say Hello')  //此处不报错
                }
            }
            class Teacher extends Person{
                public sayBye(){
                    this.name;  //此处不报错
                }
            }
   - 类的构造函数
    - 构造函数的简化
        class Person{
            public name :string ;
            constructor(name:string){
                this.name=name
            }
        }
        当前代码创建了一个 Person 类，并声明了一个构造函数，它等同于：
            class Person{
                constructor(public name:string){
                }
            }
    
    - 继承的构造函数写法、
        class Teacher extends Person{
            constructor(public age:number){
                super('jspang')
            }
        }

    *即使父类没有构造函数，子类也必须调用父类的 super() 方法来创建构造函数。
   - Getter与Setter
        对 Private 属性进行封装
    - get 方法
        get age(){
            return this._age - 10
        }
        const dajiao = new Xiaojiejie(28)
        console.log(dajiao.age) //输出 18

    当前代码对 private 属性 _age 进行了 -10 操作，即输出的不是真实 _age

    - set 方法
        set age(age:number){
            this._age = age + 3
        }
        const dajiao = new Xiaojiejie(18)
        dajiao.age=25
        console.log(dajiao.age) //输出 28
   
   - 类中的 static
        class Girl{
            static a = 'healer'
            static sayLove(){
                return 'I Love you'
            }
        }
        console.log(Girl.a) //输出 healer
        console.log(Girl.sayLove()) //输出 I Love you

        *当一个方法(或属性)使用了静态化声明，那这个方法(或属性)就可以直接调用，而不需要通过对象去调用。