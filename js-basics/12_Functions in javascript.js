
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

console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // Default value is "Sam"
    // if(username === undefined)  // OR
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

// function Shahid(){
//     console.log("Shahid Khan")
// }
