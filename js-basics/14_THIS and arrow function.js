const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // THIS refer to current context {}.
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);          // It is empty in node environment


// function chai(){
//     console.log(this);
// }

// chai()              // Run this


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);       // "this" is not working in functions 
// }

// chai()


// ARROW function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()
// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2          // Implicit return . there is no need to write return as it is in the same line.
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => ( num1 + num2 ) // You don't need to write RETURN when you write it in paranthesis
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({username: "hitesh"}) // write object in paranthesis
console.log(addTwo(3, 4))



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()