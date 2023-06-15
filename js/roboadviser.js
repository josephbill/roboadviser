//  DOM manipulation : DOM transforms normal HTML elements to Objects 
//  Object : properties and methods
//  -> target the element (method) -> target an event ()  -> define the property -> value 

// using DOM to populate the p
const button = document.getElementById("transformParagraph")
const aboutParagraph = document.getElementById("emptyParagraph")
const emptyDiv = document.getElementById("divEmpty")
const dateparagraph = document.getElementById("demo")

// events in DOM are captured using the event listeners (listen for events)
// mouse hover , button clicks , page loads, custom clicks 
// syntax for addEventListener(event,callback function)
button.addEventListener("click",displayDate)

function displayDate() {
    // add date to the empty demo paragraph 
    const currentDate = new Date();
    dateparagraph.innerHTML = currentDate.toDateString();
    aboutParagraph.innerHTML = "Click me to go to about"
    console.log(currentDate)
}


// doms can also create elements 


