const btnEl=document.querySelector(".btn")
const inputE1= document.getElementById("input")

copyIconE1.addEventListener("click",()=>{
    copyPassword()
})
 function createpassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz{}$%@[]*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength=14;
    let password=""
    for (let index = 0; index < passwordLength; index++) {
        const  randomNum =Math.floor( Math.random() * chars.length)
        password+=chars.substring(randomNum,randomNum+1);
        
        
    }
    inputE1.value=password;
}


const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alerate-containor");

copyEl.addEventListener("click", () => {
    if (inputE1.value === "") return;

    navigator.clipboard.writeText(inputE1.value);
    alertEl.classList.remove("active");

    setTimeout(() => {
        alertEl.classList.add("active");
    }, 2000);
});
