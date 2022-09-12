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

let animals: [string, boolean][];

animals = [
    ['Cat', true], 
    ['Dog', false]
]

// Union - if you want to hold your variable multiple type

// GENERICS - MAKE TYPES TO "SPECIFY LATER" 
// function displayName <Type>(arg: Type): Type {
//     return arg
// }

// const name = displayName<number>(3)

// BASIC TYPES


console.log(id)