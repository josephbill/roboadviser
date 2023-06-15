// defination 
// loops are used to repeatedly execute a block of code until a certain condition is met 
// for , while , do-while 

// for : conditions for a for loop are normally set with regards to the test case 
// print 1 to 5 
// for (intialization, initialization for comparison (sets the iteration limits), incrementor){
//     // logic to be effected on the items 

// }

for(let i  = 0; i < 6; i++ ){
    console.log(i)
}


// while > executes the loop till condition is false 
let i = 0;
while(i < 6){
    console.log(i)
    i++
}

// do while > executes the first time without regards to the condition , consecutive iterations will now depend on the condition 

let y = 0;
do {
  console.log(y)
  y++
} while (y < 6);



// Loops can also be nested 
// outer loop and inner loop 
for (let i = 0; i < 3; i++){  // the outer loop will iterate from positon 0 to 2 
    for(let j = 0; j < 5; j++){ // the inner loop will iterate from 0 to 1 
        // for each iteration of the  outer loop the inner loop will complete all its iterations
      console.log(i,j)
    }
}


// the key thing here is 
// 1. Identification of multi dimensional events 
// 2. In nested loops , for each iteration of the outer loop the inner loop must complete all its iterations.

