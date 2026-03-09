function calculateResult(){

let tech = 0;
let design = 0;
let data = 0;
let teaching = 0;

let answers = document.querySelectorAll("input[type=radio]:checked");

answers.forEach((answer) => {

if(answer.value === "tech"){
tech++;
}

if(answer.value === "design"){
design++;
}

if(answer.value === "data"){
data++;
}

if(answer.value === "teaching"){
teaching++;
}

});

let result = "";

if(tech >= design && tech >= data && tech >= teaching){
result = "Suggested Career: Software Developer";
}

else if(design >= tech && design >= data && design >= teaching){
result = "Suggested Career: UI/UX Designer";
}

else if(data >= tech && data >= design && data >= teaching){
result = "Suggested Career: Data Analyst";
}

else{
result = "Suggested Career: Teacher";
}
function saveProfile(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let interest = document.getElementById("interest").value;

localStorage.setItem("studentName", name);
localStorage.setItem("studentEmail", email);
localStorage.setItem("studentInterest", interest);

alert("Profile saved successfully!");

}

function showProfile(){

let name = localStorage.getItem("studentName");
let email = localStorage.getItem("studentEmail");
let interest = localStorage.getItem("studentInterest");

document.getElementById("displayName").innerText = "Name: " + name;
document.getElementById("displayEmail").innerText = "Email: " + email;
document.getElementById("displayInterest").innerText = "Interest: " + interest;

}

document.getElementById("result").innerText = result;

}
