// Object part 2
const fbUser = {}
fbUser.id = "12423";
fbUser.name = "Shahid";
fbUser.isLoggedIn = false;

// console.log(fbUser)


// Nested objects

const regularUser = {
    email: "abc123@gmail.com",
    fullName: {
        firstName: "Abdu",
        lastName: "Shahid"
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName.lastName)


//combining objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

const obj4 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2) // {} is target and objects are sources

// console.log(obj4);
// console.log(obj3);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);


// Find all keys and values of an object
// console.log(fbUser)
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));  // convert each key-value pair to arry
// console.log(fbUser.hasOwnProperty("isLoggedIn"));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shahid"
}

// course.courseInstructor


const {courseInstructor} = course 
console.log(courseInstructor);

const {courseInstructor: instructor} = course // Rename key
console.log(instructor);



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

