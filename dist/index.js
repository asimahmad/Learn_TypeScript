"use strict";
let id = 5;
let str = 'ABS';
let istrue = true;
let x = 'strttr';
x = 5;
let y;
y = 23;
console.log(id);
let arr = [1, 2, 3, 4, 5]; // same type of array
let arr1 = [1, 'a']; // diff types of items.
// tuple: when want to have difined types;
let person = [1, 'str', true];
// tuple array
let z = [[1, 'as'], [2, 'sds']];
// Union
let pID = '2';
pID = 34;
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
console.log(Direction1.Up);
console.log(Direction1.Down);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
//object
const user = {
    id: 1,
    name: 'Asim'
};
const userData = {
    id: 1,
    name: 'Asim'
};
// Type assertion
let cid = 1;
let ccid = cid; // first way to do assertion.
let cccid = cid; // second way to do assertion.
// function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 2));
// without return type (void)
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Asim'
};
const p1 = 1;
const add = (x, y) => (x + y);
const sub = (x, y) => (x - y);
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this, name} is now registered.`;
    }
}
const Brad = new Person(1, 'Brad');
// Brad.id = 4 gives error as it is private
// subclass
class Emp extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Emp(3, 'Shawn', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let intArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['a', 'b', 'c']);
//intArray.push('hello')
intArray.push(6);
