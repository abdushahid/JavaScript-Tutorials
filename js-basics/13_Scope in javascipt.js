// var c = 200 // var can be reach outside the scope. Don't use it
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);  
// }


// console.log(a);
// console.log(b);
// console.log(c);



// in nested functions child functions have access to variables of parent functions.
// INNER FUNCTIONS have access to outer variables
function one(){
    const username = "Shahid"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);

     two()
}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //Can access 'addOne' before initialization
function addone(num){
    return num + 1
}



// addTwo(5)   // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
addTwo(5)
