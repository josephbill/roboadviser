//  DAY 1 phase 1 
// defination and syntax.
// Variables : 
// containers for storing data values : 
// : tech : variables in javascript
// a specific storage location for a data type. 
//  store and manipulate data in JS.
// Data types : 
// classification of data 
// defination of the nature of values and how they can be manipulated

// Types of data types in JS 
// primitive data type : 
//  - represent a single value and are immutable. 
//   - actual value is always stored where assigned 
//   - numbers , strings , booleans , undefined, null
// composite /complex / non-primitive : 

//  - also known as reference types , composed of multiple values and can collections and structure of data 
//  - store references to the memory location where the actual values are stored 
//  - assigning a value also creates a reference to the memory location
//  - Examples objects , arrays and functions 


// Variables syntax 
// 1.  const : immutable / constant , permanent 
// 2.  let : mutable / can be changed / reassigned but cannot be redeclared.  

  
// usage 

const x = 9   // x is never reassigned 
console.log(x)


// complete program. // write the code.


//  functions 

// reusable block of code with a specific execution when invoked / called 

function printName(greet){
   return console.log(greet + "Joseph Mbugua")
}

// to invoke 
printName("Hello")

function namePrint(greet){
    return console.log(greet + "Joseph Mbugua")
 }
 
 // to invoke 
 namePrint("Hello")

// How a function works ? 

// 1. When a function is called :  the JS engine(compiler) : creates something called an execution context 
// 2. Execution context : conceptual environment that holds info about the function : variables , scope , logic to be executed 
// 3. The execution happens in two phases/components 
//     a. Variable environment : reference to where the function variables values are stored (parameters and arguments) :
//     Also relates to the scope of access 
//     b. Lexical environment : this references the scope in which the function is defined 
//     c. The program then creates a call stack if multiple functions are present : 
//        Stack : a pile of items 
//        Stack : L.I.F.O  : Last in First Out 

        
// 2. way of creating functions : reference them as variables 
// ARROW FUNCTIONS 

const printname = () => {
    // variables //methods 
} 


// SCOPE 

// Defination : refers to the accessibility or visibilty of variables , functions and objects in  a specific part of 
// your code during runtime


// Types of Scopes : 
// 1. Global Scope : variables and functions declared outside any function or block  : accessible to any part of the code 

let globalScope = 10; 

function accessGlobal () {
   //
  // console.log(globalScope)
   return globalScope
}

const otherFunction = () => {
    console.log(globalScope)
}

accessGlobal()
otherFunction()

// 2. function/Local Scope : variables and function declared within  a function , having a local scope 
// they are not accessible outside the function UNLESS used as arguments for other functions 
function myFunction(){
    let localScope = 20
    console.log(localScope)
    // call to the second function
    secondFunction(localScope)
    
}

function secondFunction(localScope = 0){
    console.log(localScope)
}



myFunction()


// 3. Block level scope : variables declared with let and const within { } : accessible within the {} block

function calculateAge (){
    let age = 10;
    if(age <= 10){
        // scope 1
        let greet = "Hello padiwan!"
        console.log(greet + age)
     } else {
        // scope 2
        console.log("else")
        console.log(age)
    }
    return age
}

calculateAge()
// making the return a global variable
const result = calculateAge()





