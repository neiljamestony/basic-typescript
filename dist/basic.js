"use strict";
// BASIC TYPES
let id = 6;
let info = 'Neil';
let isPublished = false;
let x = 4 + 'hrs';
// array of numbers
let ids = [1, 2, 3];
let anyArr = [1, true, 'three'];
// Tuple - normal array of tuple
let persons = ['Neil', true];
//Tuple Array - array of array tuple
let animalsArr;
animalsArr = [
    ['Cat', true],
    ['Dog', false]
];
// Union - if you want to hold your variable multiple type
let idss = 'false';
// Enum = allows you to define set of name constants. either numerical or strings
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Neil',
    age: 23
};
// Type Assertion - explicitly telling the compiler i want to treat an entity as different types
let pid = 1;
// let pids = <number>pid or pid as `data type`
let pids = pid;
let pids2 = pid;
pids = 1;
pids2 = 'NEIL';
// FUNCTIONS 
// this sample means that the parameter accepts only number and the whole function return value number
function addNumber(x, y) {
    return x + y;
}
// Void - means the function has no return value
function greeting(message) {
    console.log(message);
}
const ui = {
    id: 1,
    name: 'Neil'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    // constructor runs every time the params initiated
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// GENERICS - MAKE TYPES TO "SPECIFY LATER", instead of any, u can replace that by T, after the type as placeholder
function displayName(arg) {
    return arg;
}
function getArray(items) {
    return Array().concat(items);
}
const numArr = getArray([1, 2, 3, 4]);
const strArr = getArray(['Neil', 'James', 'Tony']);
