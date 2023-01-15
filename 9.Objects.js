// Objects in JS


let obj = {}

obj.prop1 = "Haris Chandra"
obj.prop2 = "Roy"

console.log("Object is:" , obj)

let obj2 = {
    firstName:"Haris",
    lastName:"Chandra Roy",
    age:28,
    class:15
}

obj2.height = 3.6

console.log("Object is:" , obj2)

console.log("Name of the student is: " , obj2["firstName"] + " " + obj2.lastName)

console.log(obj2)
console.log(obj2.class)
console.log(obj2["age"]);
console.log(obj2["firstName"])


// Creating Functions inside Object
let obj3 = {
    firstName:"Haris",
    lastName:"Chandra Roy",
    age:28,
    class:15,
    displayDetails : function details(){
        console.log(`${obj3.firstName} ${obj3.lastName}`)
    },
    details2(){
        console.log(`${obj3.firstName} ${obj3.lastName} is ${obj3.age} years old and Class is  ${obj3.class}`)
    },
    getName(){
        return this.firstName + " " + this.lastName
    }
}

obj3.displayDetails()
obj3.details2()
console.log(obj3.getName())

//How to create nested objects

let obj4 = {
    firstName:"Haris",
    lastName:"Chandra Roy",
    age:28,
    class:15,
    address:{
        addressLine1:"Block H",
        addressLine2:"Mirpur",
        city:"Dhaka",
        postalCode:1216,
        country:"Bangladesh"
    }
}
console.log(obj4.address)
console.log(obj4.address.city) // access city
obj4.address.zone = "Mirpur 2" // add zone
console.log(obj4.address)