{
let age:number=20;

const coder:string ="Bhavya";


const incrementAge=(ageparam:number):number=>{
    return age = ageparam+1 ;
}

const printAge=(age:number):void=>{
    console.log(age);
}


incrementAge(age)
printAge(age)


let roomname: number | string;

roomname=801;
roomname = "Towrb 801"


let dhoniAge:number;

dhoniAge=42;

incrementAge(dhoniAge);

const incAge2 = (age:number|null):number =>{
    return age!+1 ?? 21;
}

const incAge3 = (age?:number):number =>{
    return age ?? 21;
}


const incAge4 = (age:number=21):number =>{
    return age;
}

incAge2(null)

class Person {
    name:string;
    age?:number;
    active:boolean=false;

    constructor(name:string, age?:number){
        this.name=name;
        this.age=age;
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        this.name="Ranbir";
    }

}

class Person2 {
    active:boolean=false;

    constructor(public name:string, public age?:number){
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        this.name="Ranbir1";
    }

}

class Person3 {
    active:boolean=false;
    private _changed:boolean =false;

    constructor(public name:string, public age?:number){
    }

    celebrateBirthday():void{
        if(this.age !== undefined)
            this.age++;
        this.name="Ranbir1";
    }

    public get changed():boolean {
        return this._changed;
    }

    public set changed(value:boolean){
        this._changed= value;
    }

}


const person1 = new Person("Bhavya", 28)
const person2 = new Person("Bhavya1")
person1.celebrateBirthday();
console.log(person1.name)
console.log(person1.age)

const person3 = new Person2("Bhavya1", 28)
const person4 = new Person2("Bhavya1")
person1.celebrateBirthday();
console.log(person3.name)
console.log(person3.age)

class Child extends Person3{
    toys:string[];

    constructor(name:string, toys:string[], age?:number){
        super(name, age);
        this.toys =toys;
    }
}

let child1 = new Child('taimur',['car', 'star parents'], 5);
console.log(child1)

interface Account{
    id:number;
    balance:number;
    transactions:number[];
}
class CheckingAccount implements Account{

    constructor(public id:number, public balance:number, public transactions:number[]){
    }
    public addBalance(newValue:number):void{
        this.balance+=newValue;
    }


}

let account:Account ={id:34, balance:8232, transactions:[100,200]};

type Transaction ={
    date:Date;
    amount:number;
    desc:string;        
}

const transaction1:Transaction = {date:new Date(), amount:1000, desc:"Deposit"};

class EnahncedTrasnaction implements Transaction{
    constructor(public date:Date, public amount:number, public desc:string)
{

}
}


type Teacher = {name:string, role:string}
type Employee = {id:number, salary:number}

type SchoolEmployee = Teacher & Employee;

let s1:SchoolEmployee = {name:"abc", role: "teacher", id:1, salary:200000}


type type1 = string | number| boolean;

type type2 = Teacher | number | boolean;

type type3 = type1 & type2;

let t1:type3= false;
let t2:type3= 5;

function convertNumToArray(x:number, y:number):number[]{
    return [x,y];
}

let result1= convertNumToArray(20,30);
console.log(result1);


function convertNumToArrayGeneric<Type>(x:Type, y:Type):Type[]{
    return [x,y];
}

let result2= convertNumToArrayGeneric<string>("20","30");
console.log(result2);

let result3= convertNumToArrayGeneric<number>(20,30);
console.log(result3);

// let result4= convertNumToArrayGeneric("20",30);
// console.log(result4);

class AccountManager<T>{
    account:T;

    constructor(account:T){
        this.account=account;
    }
}
const checkAccount = new AccountManager<CheckingAccount>(new CheckingAccount(1,200, [1,2,3]));


const enum TransactionType {Deposit, Withdrawal, Transfer};

const ttype:TransactionType = TransactionType.Deposit;

console.log(ttype);

type User ={name:string, password?:string, active:boolean};

const user:User ={name:"Mat", active:true};

const user1:User ={name:"Mat", active:true, password:"test"};


console.log(user.password?.length || "No pass set")
console.log(user1.password?.length || "No pass set")

const el = document.getElementById("dummyId") as HTMLInputElement;
console.log(el.value);
}
