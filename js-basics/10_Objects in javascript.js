// singleton

// object literal

// Defining symbol data types
const mySym = Symbol("key1")

const student = {
    name : "Shahid",
    [mySym]: "myKey1", // refering to symbol
    age : 22,
    address: "Peshawar"
}
// console.log(student.name, student.age);
// console.log(student[mySym]);

// how to access object
// console.log(student.name);
// console.log(student["age"]);
// console.log(student.mySym);

// over write values
student.age = 24;
// console.log(student["age"]);

// Freeze overwriting
// Object.freeze(student);
student.age = 25;

// console.log(student["age"]);



// Adding functions to object
student.greeting = function(){
    console.log("Hello, Student");
}

student.greetingtwo = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(student.greeting())
console.log(student.greetingtwo())
// symbol declaration
