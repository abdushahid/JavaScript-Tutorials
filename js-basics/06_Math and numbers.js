// Declaration of Numbers 
const score = 500;
const balance = new Number(1000);
// console.log(score)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))             // Values after decimal

const otherNumber = 23.23434;
// console.log(otherNumber.toPrecision(3)) // Be Carefull while using toPrecision
const anotherNumber = 2345.23434;
// console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // By it's on US standard
// console.log(hundreds.toLocaleString('en-IN')); // By it's on US standard

// ++++++++++++++++ Maths +++++++++++++++
console.log(Math)
// console.log(Math.pow(9,2))
// console.log(Math.sqrt(2))
// console.log(Math.abs(-4)) // Absolute value: convert values to positive

// console.log(Math.round(4.5)) // round off values
// console.log(Math.ceil(4.2)) // round off values to big number
// console.log(Math.floor(4.7)) // round off values to small number

// console.log(Math.min(12, 23, 34, 54, 12, 10, 32))
// console.log(Math.max(12, 23, 34, 54, 12, 10, 32))

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + 10)