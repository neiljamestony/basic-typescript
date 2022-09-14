// BASIC TYPES
let id: number = 6
let info: string = 'Neil'
let isPublished: boolean = false
let x: any = 4 + 'hrs';

// array of numbers
let ids: number[] = [1,2, 3]
let anyArr: any[] = [1, true, 'three']

// Tuple - normal array of tuple
let persons: [string, boolean] = ['Neil', true]

//Tuple Array - array of array tuple

let animalsArr : [string, boolean][];

animalsArr = [
    ['Cat', true], 
    ['Dog', false]
]

// Union - if you want to hold your variable multiple type
let idss: string | number = 'false'

// Enum = allows you to define set of name constants. either numerical or strings

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

// Objects

type User = {
    id: number,
    name: string,
    age: number
}

const user: User = {
    id: 1,
    name: 'Neil',
    age: 23
}

// Type Assertion - explicitly telling the compiler i want to treat an entity as different types
let pid: any = 1
// let pids = <number>pid or pid as `data type`
let pids = <number>pid
let pids2 = pid as string

pids = 1
pids2 = 'NEIL'

// FUNCTIONS 
// this sample means that the parameter accepts only number and the whole function return value number

function addNumber(x: number, y:number) : number{
    return x + y
}

// Void - means the function has no return value

function greeting(message: string | number) : void{
    console.log(message)
}

// Interfaces - a custom structure to an object

// types can be use for primitives, unions while interface cannot

// the variable ?: means optional
interface UserInterface{
    id: number,
    name: string,
    age?: number
}

const ui: UserInterface = {
    id: 1,
    name: 'Neil'
}

// function interface
interface MathFunc {
    (x: number, y: number) : number
}

const add: MathFunc = (x: number, y: number) => x + y
const subtract: MathFunc = (x: number, y: number) => x - y

// class and implements

interface PersonInterface{
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    // private, public by default, and protected they are access modifier
    // protected means , you can access the parameters within this class or if another class extends on this class
    // private means, you can access the parameters within this class only
    id: number
    name: string
    // constructor runs every time the params initiated
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered!`
    }
}
// Subclasses
class Employee extends Person{
    position: string
    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

// GENERICS - MAKE TYPES TO "SPECIFY LATER", instead of any, u can replace that by T, after the type as placeholder
function displayName <Type>(arg: Type): Type {
    return arg
}

function getArray<T>(items: T[]): T[] {
    return Array().concat(items)
}

const numArr = getArray<number>([1,2,3,4])
const strArr = getArray<string>(['Neil', 'James', 'Tony'])

// ADVANCE TYPESCRIPT
// in Operator
