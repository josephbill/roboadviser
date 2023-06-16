// // What is a callback function ? 
// // a function being passed as a argument for another function, 
// // the function passed is meant to be executed later after a certain process. (when a certain event / condition occurs)
// // - Purpose : - allow asynchronous or event-driven programming  : handle the result of the asynchronous task

// // synchoronous  (tasks are executed in a sequential and blocking manner) 
// // and asynchronous (tasks are executed independently and do not block the program flow) programming
 
// console.log("Task 1")

// setTimeout(function () {
//     console.log("timeout print")
// }, 5000)

// // to use a callback in a custom function 
// //1. pass it as a parameter for the function signature 
// // 2. invoke the call for the callback parameter as a function
// function greet(name , callback){
//     let x = `hello ${name}`
//     console.log(x)
//     callback();
// }

// function sayGoodbye(){
//     console.log('Goodbye!')
// }

// greet("Joseph",sayGoodbye)


// // FIRST CLASS FUNCTIONS 
// // This means functions can be treated like any other value. 
// // a value : 
// // 1. A value can be assigned to a variable 
// const sayHello = function() {
//     console.log("Hello!")
// };
 
// // 2. passed as arguements to other function (callback functions)
// // 3. returned as values from functions (returning functions from functions)
// function createMultiplier(factor){

//     //logic 
//     return function(number){
//         return number * factor
//      }
// }

// const result = createMultiplier(2)
// // result is the returned value from create multiplier 
// // what is the data type 
// console.log(result(10))

// // 4. Stored in data structure (Objects)

// const person = {
//     firstname : "joseph",
//     lastname : "mbugua"
// }

// console.log(person["firstname"])
// console.log(person.lastname)

// const mathOperations = { 
//     add : function(x,y){
//         // logic 
//         // e.o.d. return sth
//         return x + y
//     },
//     substract : function(x,y){
//         return x - y
//     } 
// };
// // add 7 + 5
// console.log(mathOperations.add(7,5))


// //  RECURSION IN JS: GROUPS 


// // start of script 
// let y; //global

// function printName (){
//     return y;
// }

// function sum(){
//     return 10 + 20
// }

// console.log(printName())
// y = sum()

// // undefined 


// // end of script 


// // IIFE (Immediately invoked functions)
// // immediately executed after the defination 
// // usage in typically used to a create a private scope for variables and also functions
// // prevents them for polluting the global space 

(function(){
    //logic 
    let message  = "Hello , from invoked" 
    console.log(message)
})();


// closures 
// combo of a function and the lexical environment within which it was declared 
// usage : nesting of functions (outer function / inner function)
// used to access variables from its outer scope even after the outer function has finished executing 

// variables defined in function are no longer accessible after the function executes  

function outerFunction(){

    let message = "Hello! Closure"
    // call // closures 
    //inner function
    function innerFunction(){
        console.log("Print happening on second Function")
       console.log(message)
    }
    
    // functions are first class : values 
    return innerFunction;
   
}
// reusable // modularity 
outerFunction();


// 3 . Anonymous function : not named

// syntax 

let greet = function(){

}

// usage 
//  assigning functions to variables 
//  used to define immediately invoked functions 
//  event handlers : dom events 
//  callbacks : dom example 
//  passed as arguments to other functions