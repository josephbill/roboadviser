// Logical AND : &&
// Logical OR : ||
// Logical NOT : !

let a = true 
let b = false 
let result = a && b
console.log(result) 
// false 

// WHY - AND : both conditions have to be true to return "true' otherwise it returns false.

let resultb = a || b
console.log(resultb)
// true 

// WHY - OR :  as long as one condition is true it returns true 

let resultc = !a;
console.log(resultc)