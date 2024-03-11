// Primative

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

// const scorevalue: number = 100; // Defining number in type script
const scorevalue = 100.3; // float value
const isLoggedIn = false;
const outsideTemp = null; // Empty
let userEmail; // Undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // Strict equality for symbols

const bigNumber = 12345623434534243n;

// Reference (Non-primative)

// Types: Array, Objects, Functions.        Ther typeOf is function

const myArray = ["Arshad", "Riwan", "Imran"]

const myObject {
    name : "Shahid",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world")
}
