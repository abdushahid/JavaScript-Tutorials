// String concatination

// "hello world" + "hello world"

const name = "Shahid";
const postCount = 50;

// console.log(name + postCount + "Value"); // out dated method of writing string concatination

// Use BackTicks for Concatination `
console.log(`Hello My name is ${name} and my Number of posts are ${postCount}.`) // String interpulation. these variables can be converted to uppercase or lower case etc. e.g ${name.ToUppercase}

// String declaration methods
//const name = "shahid";
const name1 =new String("shahid")
 console.log(name[0])               // output: s
 console.log(name.__proto__)        // output: Object {}, it will be in key value pair and can be checked in the Chrome's Console
 console.log(name.length)           // output:
 console.log(name.toUpperCase())    // output:
 console.log(name.toLowerCase())    // output:
 console.log(name.charAt(4))        // output:
 console.log(name.indexOf("d"))     // output:

 const newString = name.substring(0, 5);
 console.log(newString); // output: last digit doesn't Display

const anotherString = name.slice(-5, 6)
console.log(anotherString)

const string1 = "    Spaces    "
console.log("With " + string1);
console.log("without " + string1.trim());

const url = "www.webdeveloper.com";
console.log(url.replace("e","o"))
console.log(url.includes('web'))
console.log(url.includes("shahid"))
console.log(url.split("."))             // convert string into object





/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"shahid"

*/