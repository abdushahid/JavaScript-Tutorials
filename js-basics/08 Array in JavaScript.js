// Arrays in javascript
// it can store values of different types

let myarray = [1, 2, 3, 4,4 , "Shahid", true]
const myArr = new Array(1, 2, 3, 4, 5);

// console.log(myarray)
// console.log(myArr[2])

// Methods

const myArr2 = [1, 2]


// console.log(myArr2)
myArr2.push(3) // insert items at the end
myArr2.push(8)
myArr2.pop(); // remove last value
myArr2.unshift(9); // insert values at the beginning
myArr2.shift(); // remove first value

// console.log(myArr2);
// console.log(myArr2.includes(3))
// console.log(myArr2.indexOf(2))

const myArr3 = [2, 3, 4, 5]
const newArray3 = myArr3.join(); // convert array to string
console.log(myArr3)
console.log(newArray3)
console.log(typeof(newArray3))

const theArry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("O ", theArry)

const theNewArr = theArry.slice(1, 4)
console.log("B ", theNewArr)

const theNewArr2 = theArry.splice(1, 4)
console.log("C ", theNewArr2)