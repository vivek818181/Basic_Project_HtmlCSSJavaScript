// const buttonsE1 =document.querySelector("buttons")

// for(let i=0 ;i<buttonsE1.clientHeight; i++){
//     buttonsE1[i].addEventlistener("click",()=>{
//         console.log(buttonsE1[i].textContent)
//     })
// }
// 1. Use querySelectorAll to get a NodeList of all buttons
const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1= document.getElementById("result");

// 2. Use .length for the loop condition
for (let i = 0; i < buttonsE1.length; i++) {
    // 3. Correct the capitalization of addEventListener
    buttonsE1[i].addEventListener("click", () => {
        const buttonValue=(buttonsE1[i].textContent);
        if(buttonValue==="C"){
            clearResult()
        }
        else if(buttonValue === "="){
            calculateResult()
        }
        else{
            appendValue( buttonValue)
        }
    });
}
function clearResult(){
inputFieldE1.value ="";
}
function calculateResult(){
    inputFieldE1.value =eval(inputFieldE1.value)
}
function appendValue(buttonValue){
    inputFieldE1.value += buttonValue    
}