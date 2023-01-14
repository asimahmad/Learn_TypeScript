let id:number = 5;
let str: string = 'ABS'
let istrue: boolean = true;
let x: any = 'strttr'

x = 5;
let y: unknown;
y = 23;


console.log(id);

let arr: number[] = [1,2,3,4,5]; // same type of array
let arr1: any[] = [1, 'a']; // diff types of items.

// tuple: when want to have difined types;
let person: [number, string, boolean] = [1,'str', true];
 // tuple array
 let z: [number, string][] = [[1,'as'], [2,'sds']];


 // Union
 let pID: number|string = '2';
 pID = 34;


 // enums

 enum Direction1{
    Up,        // 0-1-2-3 top to down if makes 1 to the first then 1-2-3-0
    Down,
    Left,
    Right
 }
 console.log(Direction1);
 console.log(Direction1.Up);
 console.log(Direction1.Down)


 enum Direction2{
    Up =1,        //if makes 1 to the first then 1-2-3-4
    Down,
    Left,
    Right= 'Right'
 }
 console.log(Direction2)

 //object

 const user: {id:number, name:string} = {
     id:1,
     name: 'Asim'
 }

 // other way to define an object with types.
 type User = {
     id:number,
     name:string
 }

 const userData: User= {
     id: 1,
     name: 'Asim'
 }

 // Type assertion

 let cid: any = 1;
 let ccid = <number> cid  // first way to do assertion.
 let cccid = cid as number // second way to do assertion.

 // function
 function addNum(x: number, y: number): number {   // with defined typed input and also defined typed output.
     return x + y
 }
 console.log(addNum(3,2));
 
 // without return type (void)
 function log(message: string | number): void {
    console.log(message)
 }


 // interface

 // interface and type are almost same but if you are describing an object use interface in prefrence.

 interface userInterface{
     readonly id: number
     name: string
     age?:number // this property is optional (?)
 }

 const user1: userInterface = {
     id: 1,
     name: 'Asim'
 }
 
 
 user1.id = 6 // it is only read only

 // type can be user for primitive and non-primitive types whereas interface can not.
 type point = string|number
 const p1: point = 1

 //interface point = string | number // can not use  with primitive or unions



 // interface with functions.

 interface MathFunc {
     (x: number, y: number): number
 }

 const add: MathFunc = (x: number, y: number): number => (x+y)
 const sub: MathFunc = (x: number, y: number): number => (x-y)



 // classes


 interface personInterface{  // interface with class
    id: number
    name: string
    register(): string
}

 class Person implements personInterface {
    id: number
    name: string

     constructor(id: number, name: string){
        this.id = id
        this.name = name
     }

     register(){
         return `${this,name} is now registered.`
     }
 }

 const Brad = new Person(1,'Brad')
 // Brad.id = 4 gives error as it is private



 // subclass
 class Emp extends Person{
     private position: string

     constructor(id:number, name: string, position: string) {
         super(id,name)
         this.position = position
     }
 }

 const emp = new Emp(3, 'Shawn', 'Developer')

// Generics
function getArray<T> (items:T[]): T[]{
    return new Array().concat(items)
}

let intArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['a','b','c'])

//intArray.push('hello')

intArray.push(6)


 


