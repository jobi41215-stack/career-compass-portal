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

document.getElementById("result").innerText = result;

}



function saveProfile(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let interest = document.getElementById("interest").value;
let photo = document.getElementById("photo").files[0];

if(photo){
let reader = new FileReader();

reader.onload = function(){
localStorage.setItem("studentPhoto", reader.result);
}

reader.readAsDataURL(photo);
}
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
let photo = localStorage.getItem("studentPhoto");

if(photo){
document.getElementById("displayPhoto").src = photo;
}

}



function personalizedRecommendation(){

let interest = localStorage.getItem("studentInterest");

let answers = document.querySelectorAll("input[type=radio]:checked");

let tech = 0;
let design = 0;
let data = 0;
let teaching = 0;

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

let career = "";

if(interest && interest.toLowerCase().includes("coding")){
career = "Software Developer";
}
else if(interest && interest.toLowerCase().includes("design")){
career = "UI/UX Designer";
}
else if(data >= tech && data >= design){
career = "Data Analyst";
}
else if(teaching > tech){
career = "Teacher";
}
else{
career = "Software Developer";
}

document.getElementById("result").innerText =
"Personalized Career Recommendation: " + career;

localStorage.setItem("careerRecommendation", career);

}
function careerChatbot(){

let question = document.getElementById("userQuestion").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

let response = "";

if(question.includes("software")){
response = "To become a Software Developer, learn programming like JavaScript, Python, and build projects.";
}

else if(question.includes("data")){
response = "For Data Analyst careers, learn Excel, SQL, Python, and statistics.";
}

else if(question.includes("design")){
response = "For UI/UX Design, learn tools like Figma and Adobe XD.";
}

else if(question.includes("teacher")){
response = "Teachers usually need a degree in education and strong communication skills.";
}

else{
response = "You can explore careers like Software Developer, Data Analyst, UI Designer, or Teacher.";
}

chatbox.innerHTML += "<div class='user-message'>" + question + "</div>";

chatbox.innerHTML += "<div class='bot-message'>" + response + "</div>";

document.getElementById("userQuestion").value="";

chatbox.scrollTop = chatbox.scrollHeight;

}
function analyzeSkills(){

let programming = document.getElementById("programming").value;
let creativity = document.getElementById("creativity").value;
let communication = document.getElementById("communication").value;

let result = "";

if(programming >= creativity && programming >= communication){
result = "Best Career Path: Software Developer";
}

else if(creativity >= programming){
result = "Best Career Path: UI/UX Designer";
}

else{
result = "Best Career Path: Teacher or Mentor";
}

document.getElementById("skillResult").innerText = result;

}
function predictCareer(type){

let result = "";

if(type === "logic"){
result = "Recommended Career: Software Developer";
}

else if(type === "creative"){
result = "Recommended Career: UI/UX Designer";
}

else if(type === "help"){
result = "Recommended Career: Teacher or Counselor";
}

document.getElementById("personalityResult").innerText = result;

}
function careerMatch(){

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

let total = answers.length;

let techScore = Math.round((tech/total)*100);
let designScore = Math.round((design/total)*100);
let dataScore = Math.round((data/total)*100);
let teachingScore = Math.round((teaching/total)*100);

document.getElementById("result").innerHTML =
"💻 Software Developer Match: " + techScore + "% <br><br>" +
"🎨 UI/UX Designer Match: " + designScore + "% <br><br>" +
"📊 Data Analyst Match: " + dataScore + "% <br><br>" +
"👨‍🏫 Teacher Match: " + teachingScore + "%";

}


window.onload = function(){

let name = localStorage.getItem("studentName");
let interest = localStorage.getItem("studentInterest");
let career = localStorage.getItem("careerRecommendation");

if(document.getElementById("studentName")){
document.getElementById("studentName").innerText = name;
}

if(document.getElementById("studentInterest")){
document.getElementById("studentInterest").innerText = interest;
}

if(document.getElementById("careerResult")){
document.getElementById("careerResult").innerText = career;
}

}
