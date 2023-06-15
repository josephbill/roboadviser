// a DS for data 
// Linear DS : trasversal we have to loop through all elements 

// defination 
// static arrays // dynamic arrays 
const person = {
    one : 1
}
let students = ["Mary",2,true,1.0,person]
const teachers =  new Array("Mary","Joseph")

// accessing the items in an array 
// number of elements : 2 : length / size 
// index positioning : starts from 0 

// access happens by referencing the index 
console.log(students[1])
// accessing the first item using the first index position 
// negative indexing is how we access the last item in an array 
console.log(teachers[teachers.length - 1])
// changing the value happens also by ref. the index
students[1] = "Steve"
console.log(students[1])

//accessing the full array 
console.log(teachers.toString())

// array elements can be objects 
// arrays allow one to save multiple data types 

// Array Methods : covered in groups 
// In built methods : 
// length                  join           sort 
// toString                delete
// pop                     concat
// push                    flat
// shift                   splice  
// unshift                 slice  
// defination , syntax .

let k = [10,20,30,40]

for (let i = 0; i < k.length; i++){
   // logic to be effected on elements in the array 
   const result =  parseInt(k[i]) * 2
   console.log(result)
}

let samsung = {
    brand : "A5",
    price : 100000
}

let iphone = {
    brand : "x",
    price : 100000
}
let productsMobile = [samsung,iphone] 

for (let item = 0 ; item < productsMobile.length; item++){
       
}