
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()


// function addTwoNumbers(number1, number2){   // Parameters

//     console.log(number1 + number2);
// }
// addTwoNumbers(2, 5) // arguments


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result                OR
    return number1 + number2        // You can't store functions in variable before returing it.
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // Default value is "Sam"
    // if(username === undefined)  // OR
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))

// function calculateCartPrice(val1, val2, ...num1){
function calculateCartPrice(...num1){  // ... REST AND SPREAD OPERATOR and convert numbers in function to array
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Shahid",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
//YOU can directly pass an object in the function as well
handleObject({
    username: "sam",
    price: 399
})

// Handling Arrays in function
// const myNewArray = [200, 400, 100, 600]

// function returnValue(getArray){
//     return getArray[1] // You should pass the argument
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000])); // Passing array directly
