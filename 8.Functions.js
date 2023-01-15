// Block of codes

function myFunc(a, b) {
    return a + b
}
console.log(myFunc(5, 6)) // print 11

// Set Defult Value

function myFunc(a = 10, b = 20) {
    return a + b
}

console.log(myFunc(undefined, 6)) // print 16g
