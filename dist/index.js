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
