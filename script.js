var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// to check those variables:
// console.log(css);
// console.log(color1);
// console.log(color2);

//to listen the user input:

function setGradient() {
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")"; 
}

// without using function: 

// color1.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right," 
//     + color1.value 
//     + "," 
//     + color2.value 
//     + ")"; 
// });

// color2.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right," 
//     + color1.value 
//     + "," 
//     + color2.value 
//     + ")";  
// })

//using function:

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);