
// var username = prompt("Give me your username")

// var welcomemessage = "This script works!! " + username
// alert(welcomemessage) 
var btnTrnslate = document.querySelector("#btn-translate") 
var txtInput = document.querySelector("txt-input");
var outputDiv = document.querySelector("#output");


// outputDiv.innerText = "FARAN AHMAD"

outputDiv.innerText = "basushisqi " + txtInput.value

console.log(outputDiv);

 
btnTrnslate.addEventListener("click", function clickEventHandler{
   console.console.log("clicked"); 
   console.log("input", txtInput.value)
})


// 1. document.querySelector("textarea")
// 2. .btn-primary
// 3. #input-btn
// 4. "input[name='translator']"