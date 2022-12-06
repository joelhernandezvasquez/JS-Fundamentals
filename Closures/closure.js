
/*
 Definition of closures
 It is a Function inside another function that can access values outside of its scope
 Outer function returns 


 Benefit of closures is that I can get access to data from the parent function without the need to
reach outside the scoop

why use closures
 1 - Data encapsulation to prevent leaking or exposing data when is not need it
 2 

*/


const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{
    // closure
     card.addEventListener("click",()=>{
        console.log({card,index});
     })  
})

// Example of a closure when use case data encapsulation

 function outerFunction() {
    let toogle = false;
/// closure
    function innerFunction (){
        return `the state of the toggle is ${toogle}`
    }
    return innerFunction();
 }
 const newFunction = outerFunction();
 console.log(newFunction);

 // A factory function

 const alertMessage = (message) =>{
   return () =>{
      alert(`Helloooo ${message}`);
   }
 }

 const alertGreeting = alertMessage('mommy');
 alertGreeting();
 






