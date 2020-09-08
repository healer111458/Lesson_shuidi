class Xiaojiejie {
    constructor(private _age:number){}
    get age(){
        return this._age-10
    }
    set age(age:number){
      this._age=age+3
    }
  }
  
  const dajiao = new Xiaojiejie(28)
  dajiao.age=25
  console.log(dajiao.age)