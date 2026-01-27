const containerE1 =document.querySelector(".container")

const careers = ["Student","Wed Devloper","Data Scientis"];

let index =0
let charIndex = 0;
updateText()
function updateText(){
    charIndex++;
containerE1.innerHTML = `<h1>I am a ${careers[index].slice(0,charIndex)}</h1>`;

if(charIndex ==careers[index].length){
    index++;
    index = 0;
}
if(index == careers.length){
    index = 0;
}

setTimeout(updateText,400);
}