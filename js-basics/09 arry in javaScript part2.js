const GD = ["a", "b", "c"]
const WD = ["d", "e", "f"]

// GD.push(WD);
// console.log(GD);
const combinedArray = GD.concat(WD); // combine tow or more arrays and return a new array, that is why it is necessory to make a variable for it.
// console.log("A ", combinedArray); // Output: ["a", "b", "c", "d", "e", "f"].

// Alternative method of Concat

const allLetters = [...GD, ...WD];
// console.log("B ",allLetters)

const numArray = [1, 2, 3, 4, [5, 6, [7, 8], 9] ]
console.log(numArray)

const newNumArry = numArray.flat(Infinity);
console.log(newNumArry);

// Convert objects and strings to array
console.log(Array.isArray("Shahid"))
console.log(Array.from("Shahid"));
console.log(Array.from({name: "Shahid"})); // Interesting: you have to define whether value or key you want to convert to arry.


//  convert variables to array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // Returns a new array from a set of elements.
