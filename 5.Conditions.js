// Conditional Statements
// 1. If block
// 2. If Else block
// 3. Nested If block 
// 4. Switch case


// 1. If block
let x = 10
if (x == 10) {
    console.log("Done") // if true print Done
}


// 2. If Else block
let m = 300
let n = 200

if (m > n) {
    console.log("m is bigger than n")
} else {
    console.log("n is bigger than m")
}


// 3. Nested If block 
let a = 300
let b = 100
let c = 600

if ((a > b) && (a > c)) {
    console.log("a is the biggest of 3 integers.")
} else if (b > c) {
    console.log("b is the biggest of 3 integers.")
} else {
    console.log("c is the biggest of 3 integers.")
}

// 4. Switch case
let num1 = 200
let num2 = 11

let operation = "%"

switch(operation){
    case "+":
        console.log("Addition is: ", (num1 + num2))
        break
    case "-":
        console.log("Subtraction is: ", (num1 - num2))
        break
    case "*":
        console.log("Multiplication is: ", (num1 * num2))
        break
    case "/":
        console.log("Division is: ", (num1 / num2))
        break
        case "%":
    console.log("Remainder after division (modulo division) is: ", (num1 % num2))
        break
    default:
        console.log("Invalid operation")
        break
}