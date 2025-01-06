let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
btn.disabled = true; // Initially disable the button
let div=document.querySelector(".temp2")
// Get input elements
let from = document.getElementById("From");
let to = document.getElementById("to");
let number = document.getElementById("number");
let newText;
let answer;

// Function to check input values and update button state
function checkInputs() {
    if (from.value.trim() !== "" && to.value.trim() !== "" && number.value.trim() !== "") {
        btn.disabled = false; // Enable button
        btn1.style.opacity=1;
        btn.addEventListener("click",()=>{
          if(from.value.trim()==="Fahrenheit"&& to.value.trim()==="Celsius"){
            answer = (number.value - 32) *(5/9);
           dis(answer);
          }
          else if(from.value.trim()==="Fahrenheit"&& to.value.trim()==="Kelvin"){
            answer = ((number.value - 32) *(5/9))+ 273.15;
            dis(answer);
          }
          else if(from.value.trim()==="Celsius"&& to.value.trim()==="Kelvin"){
            answer = parseFloat(number.value)+ 273.15;
            console.log(answer);
            dis(answer);
            
          }
          else if(from.value.trim()==="Celsius"&& to.value.trim()==="Fahrenheit"){
             answer = number.value * (9/5) + 32;
            dis(answer);
          }
          else if(from.value.trim()==="Kelvin"&& to.value.trim()==="Celsius"){
            answer = parseFloat(number.value)- 273.15;
            dis(answer);
          }
          else if(from.value.trim()==="Kelvin"&& to.value.trim()==="Fahrenheit"){
             answer = ((number.value- 273.15) *9/5) + 32;
            dis(answer);
          }


        })

    } else {
        btn.disabled = true; // Disable button
       
    }
}

// Attach input event listeners to the fields
from.addEventListener("input", checkInputs);
to.addEventListener("input", checkInputs);
number.addEventListener("input", checkInputs);
 function dis(answer){
    if(newText){
        div.removeChild(newText);
    }
    newText = document.createElement("p"); 
    newText.innerText=`${number.value} ${from.value} is ${Number(answer.toFixed(1))} ${to.value}`;
    newText.style.color="green";
    div.appendChild(newText);
 }

