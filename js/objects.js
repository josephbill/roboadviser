// OBJECTS 
// Objects are data type. 

// Object : instance of class 
// class : blueprint / template 

// OBJECT : fundamental concept used to represent a specific instance of a class or a DS that contains properties. 

// Data Structure : specialized format for organizing data. a way of , a format, 

// Linear (access to items is sequential) and Non Linear(different road maps to access items ) DS. 

// Properties : (fields or attributes : additional info about the object/-< naming ref )

// PERSON : programming 
// create an object  : 1. OBJECT LITERAL
const person = {
  name : "Joseph Mbugua", //string
  age : 20, //Integer
  occupation : "software developer", //string
  noncitizen : false  //false
}


// the value of a variable will give the variable its data type
// const , let : variable
// print person names 
// print / access property in an object , use the key name 
console.log(person.name)
// everything in JS is an object 
// values can be created/defined using the new keyword indicating that everything is an object 
// Boolean : Data type 
let noncitizen = false 

const myBoolean = new Boolean(true) //default is false 
console.log(myBoolean)
// numbers , strings , Date , Maths , Arrays , functions are always objects , objects are always objects 

console.log(new Date())


// Create an object (ways)

// 2. USING THE NEW KEYWORD 

const person2 = new Object();  // create an instance 

// this is how we reassign values in an object 
person2.firstname = "mary"


// Objects are mutable (ability to change) because we access them by reference and not value 

const team = {
   name : "K",
   members : "20"
}


// Objects and methods 
// functions : block of code performing a specific task and returning a result 
// method : part of a blueprint (class) : classes : makeup : properties and methods 


//  CUSTOM METHOD CREATION WITH THE VIEW ON CLASS 

// Vehicle : Class : color , brand , vin , registrationcode , chasisnumber , enginenumber : properties  
//                   accelerate , stop , enginesounds : methods 

class Vehicle {
  constructor(color,brand){
      // the info passed to the constructor , comes from the creation of an object 
      this.color = color
      this.brand = brand
  }

//   methods 
   accelerate(speed){
   let result = `this brand ${this.brand.toUpperCase()} accelerates at a speed of ${speed}`
   console.log(result)
   }

}

// instances 
const ferrari = new Vehicle("red","m1")
//access the color 
console.log(ferrari.color)
//methods  // invoking or calling my method 
ferrari.accelerate(180)

const toyota = new Vehicle("white","Corolla")
//access the color 
console.log(toyota.color)
//methods  // invoking or calling my method 
toyota.accelerate(40)


//  OBJECT METHODS // CREATING CUSTOM OBJECT METHODS 
//  give the key  // define a normal function 
// this : refers to the current instance / object 
const vehicle2 = {
   color: "yellow",
   brand : "benz",
   accelerate: function (speed) {
      return this.brand + " accelerates at " + speed
   }
}

console.log(vehicle2.accelerate(60))


// BUILT IN METHODS (IN JS)

// Depends on the target class(data type)
// numbers will have their own methods / strings will have their own methods / booleans / Date : new keyword : methods 
//  String 

let message = "Hello , objects and events session"
// in built method 
// uppercase 
console.log(message.toUpperCase())
console.log(message.toLowerCase())

// trasversal is looping : performing an action in an enumerable (collections) : arrays , object 

// for ... in , keys (forEach) , recursion 

for (let key in vehicle2){
   // within this loop you can effect a logic 
   if(vehicle2.hasOwnProperty(key)){
      console.log(key + " : " + vehicle2[key])
   }
}


// ForEach 



const keysName = Object.keys(person);
["name","age","occupation","noncitizen"]

keysName.forEach(key => {
    console.log(key + ":"  + person[key])
})












