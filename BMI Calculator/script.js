
const btnE1 = document.getElementById("btn")
const valueE1 = document.getElementById("bmi-result")
const weightCondition = document.getElementById("weight-condition")


function calculateBMI() {
    const heightE1 = document.getElementById("height").value /100
    const wightE1 = document.getElementById("weight").value
    const bmiValue = wightE1/(heightE1 * heightE1);
    valueE1.value = bmiValue ;
    if(bmiValue<18.5){
        weightCondition.innerHTML ="Under Weight"
    } 
    else if(bmiValue>=18.5 && bmiValue <=24.9){
        weightCondition.innerHTML ="Normal Weight"
    } 
   
    else if(bmiValue >=25 && bmiValue<=29.9){
        weightCondition.innerHTML ="Over Weight"
    } 
    else{
        weightCondition.innerHTML ="Obesity"
    }
}
btnE1.addEventListener("click", calculateBMI)