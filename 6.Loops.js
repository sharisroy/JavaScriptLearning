// For Loop, While , Do While Loops, forEach Loop

// For Loop
let n = 6
let f = 1

for (let i = 1; i <= n; i++) {
    f = i * f //can also be written as: f*=i
}

console.log("Factorial is: ", f)

// Nested For Loop
let num1
let num2
let num3
let str

for (let i = 1; i <= 6; i++) {
    num1 = 0
    num2 = 1
    num3 = 0
    str = ""
    for (let j = 1; j <= i; j++) {
        str = str + " " + num1
        num3 = num1 + num2
        num2 = num1
        num1 = num3
    }
    console.log(str)
}

// While Loop
var a = 10

while(a < 100){
    console.log(a)
    a += 10
}
console.log('Do While Loop')
// Do While Loop
var a = 100

do{
    console.log(a)
    a-=10
}while(a < 10)

// forEach
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(f => {
    console.log(f)
});