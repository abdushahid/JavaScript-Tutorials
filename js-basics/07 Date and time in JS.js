// Date and time in JavaScript

// let myDate = new Date();
// console.log(myDate);
// console.log(typeof (myDate));
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// Declaration of specific date

//let myCreatedDate = new Date(2024, 0, 18, 2, 12) // months start from zero
// let myCreatedDate = new Date("2024-3-18") //
// let myCreatedDate = new Date("12-4-2024") // month-day-year
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

// TimeStamp: Date values in milli second since 1970
// let CreatedDate = new Date(2024, 0, 18, 2, 12)
// console.log(CreatedDate.getTime()); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(Date.now())
// console.log(Math.round(Date.now()/1000)) // convert Date to seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() +1)

// Customizing Date

let myNewDate = Date.now();

myNewDate.toLocaleString("default", {
    weekday: "long",

})