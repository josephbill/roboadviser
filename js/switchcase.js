// conditional concept 
// allows one to perform different actions based on different conditions 
// alt. to using the if / else 
// if you have multiple possible values to check against a single expression 

let fruit = "pear"; 

switch(fruit){
    case "banana":
         // logic

    break;
    case "apple":
        //logic
         console.log("This is a good fruit")
    break;

    case "pear":
       //logic
    break;
    default:
      console.log("This is not a fruit")
    break;
}