// conditional operator 
// syntaxtly better / more concise / comparison involving two -> 4 items 
// condition ? expression1 : expression2 

let age = 7
// let mesage = (age >= 18) ? "You can purchase a ticket" : "You cannot purchase a ticket for this event"
// console.log(mesage)

// multiple conditions 
// if age is 7 , recommended the kids classic show 
 
let message = (age >= 18)  ? "You can purchase a ticket" : (age === 7) ? "You can try this kid's event" : "You cannot purchase this ticket"
console.log(message)