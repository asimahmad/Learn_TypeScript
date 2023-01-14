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