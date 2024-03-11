let score = 33;
let score1 = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;

// console.log(typeof score);
// console.log(typeof(score));

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

let valueInNumber1 = Number(score1);
console.log(typeof(valueInNumber1));

let valueInNumber2 = Number(score2);
console.log(typeof(valueInNumber2));

let valueInNumber3 = Number(score3);
console.log(typeof(valueInNumber3));

let valueInNumber4 = Number(score4);
console.log(typeof(valueInNumber4));

let valueInNumber5 = Number(score5);
console.log(typeof(valueInNumber5));

//  0 and 1 conversion
let normal = 1;
let Boolean1 = Boolean(normal);

console.log(Boolean1)

let normal1 = "abc";
let Boolean2 = Boolean(normal1);

console.log(Boolean2)

// number to string conversion

let aNumber = 44;
let stringNumber = String(aNumber)
console.log(typeof stringNumber)

// Operators
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");