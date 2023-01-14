var id = 5;
var str = 'ABS';
var istrue = true;
var x = 'strttr';
x = 5;
var y;
y = 23;
console.log(id);
var arr = [1, 2, 3, 4, 5]; // same type of array
var arr1 = [1, 'a']; // diff types of items.
// tuple: when want to have difined types;
var person = [1, 'str', true];
// tuple array
var z = [[1, 'as'], [2, 'sds']];
// Union
var pID = '2';
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
