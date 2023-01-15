 // reminder
 // Power
 // Increment and Decriment
 // Equality
 // Logical and Comparison Operators
 // Bitwise Operations

let a = 100
let b = 2
let c = 3

// print reminder
console.log(a % b) 
console.log(a % c)

// power 
console.log(b ** c)

 // Increment and Decriment

a = 100 + 10
console.log(a)
a += 10
console.log(a)

a = 100 - 10
console.log(a)
a -= 10
console.log(a)

a++
console.log(a)
a--
console.log(a)



// Equality
let x = 100
let y = "100"

// == Compare Value
console.log(x == y)
// === Compare Value and Type
console.log(x === y)
// !=
console.log(x != y)
// !==
console.log(x !== y)


 // Logical and Comparison Operators

//  Logical Operators

// Operator	Operation	Description
// “&&”	    and	        Resultant of ‘and’ operation is ‘true’ when all the conditions are ‘true’.
// “||”	    or      	Resultant of ‘or’ operation is ‘true’ when any of the conditions is ‘true’.
// “!”	    not     	Inverts ‘true’ to ‘false’ and vice versa.

const m = 3;
const n = -2;
const o = true

console.log("&& : ", m > 0 && m > 0);
console.log("|| : ", m > 0 || m > 0);
console.log(" ! : ", !(o));

// Comparison Operators in JavaScript


// Operator	Operation	            Description
// “==”	    Equal	                Returns ‘true’ when operand values are equal.
// “===”	Strict Equal           	Returns ‘true’ when operands value and type are equal.
// “!=”	    Not Equal              	Returns ‘true’ when operands values are not equal.
// “!==”	Strict Not Equal    	Returns ‘true’ operands value and/or type are not equal.
// “>”	    Greater Than        	Returns ‘true’ when left operand is greater than the right operand.
// “<"  	Less Than	            Returns ‘true’ when left operand is less than the right operand.
// “>=”	    Greater Than or Equal	Returns ‘true’ when left operand is greater than or equal to the right operand.
// “<="	Less Than or Equal	        Returns ‘true’ when left operand is less than or equal to the right operand.




// Bitwise Operations

let d = 100
let f = 200
let g = d & f //Bitwise AND Operation
console.log(g)

// 100 and 200 will first be converted to their 32 bits binary equivalent and then the AND operation is performed.
// 100 to binary => 01100100
// 200 to binary => 11001000
// 01100100 & 11001000 => 01000000
// 01000000 to decimal => 64

// Bitwise NOT Operator: "~"

let l = 10
let k = ~l //Bitwise NOT Operation
console.log(k)


// 10 will first be converted to its 32 bits binary equivalent and then the NOT operation is performed.
// 10 to binary => 00000000000000000000000000001010
// ~00000000000000000000000000001010 => 11111111111111111111111111110101
// 11111111111111111111111111110101 to decimal from signed 2's compliment => -11