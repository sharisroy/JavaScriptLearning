
// Variable
// String Concatenation
// Let type variable can not change the type but ver type can be changed
// Big Int 
// Symbole 
// Constant Variable 
// Null and Undfine



let a = 100
let decimalNumber = 5.22
let str = "Haris Chandra Roy"
let b = true

console.log("Value of a is ", a)
console.log(decimalNumber)
console.log(str)
str = "Learning Java Script"
console.log(str)
console.log(b)
let str1 = "Learning Java Script"
let str2 = "By Haris Chandra Roy"

// String Concatenation
str = str1 + " " + str2
console.log(str)

// Variable type 
console.log(typeof (decimalNumber))
console.log(typeof (str))
console.log(typeof (b))

// Let type variable can not change the type but ver type can be changed

var name = "Haris Chindra Roy"
console.log(name) // Print only Haris Chandra Roy
var name = 100
console.log(name) // // Print only  100

// Let 

let n = 10;
console.log(n)
// let n = "Haris Chandra Roy" // here get error
// console.log(n)



// Big Int 

let x = BigInt(21254544546545445456)
let y = 5454534545456456454566n

console.log("Type of x ", typeof(x),"\t value of x ", x)
console.log("Type of y ", typeof(y),"\t value of y ", y)


// Symbole 

let s = Symbol('@')
console.log("Type of s ", typeof(s),"\t value of s ", s)

// Constant Variable 

const number = 100
console.log(number)
// number = 300 // give error
// console.log(number)



// Null and Undfine

let r;
console.log(typeof (r)) // undefined
console.log(r)

let t = null;
console.log(typeof (t))  // Object
console.log(t)

/*
Search items in Array - INCLUDES
Find first index of an item - INDEXOF
Find last index of an item - LASTINDEXOF
*/
console.log(".....................Array ")
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Venus"
  ];
  console.log(typeof (planets))
  console.log(planets.includes("Earth"))
  console.log(planets.indexOf("Venus"))
  console.log(planets.lastIndexOf("Venus"))


