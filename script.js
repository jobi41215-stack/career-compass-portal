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
