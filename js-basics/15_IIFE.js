// Immediately Invoked Function Expressions (IIFE)

// (function)()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {       // Named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); // You need to end it with semi-colon


