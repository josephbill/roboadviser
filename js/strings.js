// Strings Interpolation  =template literals
// a feature that allows us to embed variables or expressions within a string 
// expressions : a combo. of one or more values, variables , operators (logical) // function calls with a resulting value 4
// numeric , variable , function call , boolean , strings expressions 
// syntax : '' ``

let name = "Joseph"
let age = "26"

let message = `Hello, my name is ${name} and I'm this age ${age}`
console.log(message)

// function call 
function calculateSum(a,b){
    return a + b
}

// "returning a value and not a parameter ?"
// this means this : 
// 1. The value of an expression or variable is substituted into the interpolated string , rather than the actual parameter itself 

let x = 5;
let y = 6;
// making the call to the function 
// formating my message 
let result = `The sum ${x} and ${y} is ${calculateSum(x,y)}`

console.log(result)