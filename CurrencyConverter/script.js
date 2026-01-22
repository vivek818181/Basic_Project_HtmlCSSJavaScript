const currencyFirstE1=document.getElementById("Currency-first");
const worthFirstE1E1=document.getElementById("Currency-first");
const currencySecondE1=document.getElementById("Currency-second");
const worthSecondE1=document.getElementById("Currency-second");

const ExchangeRateE1 =document.getElementById("exchange-rate");


function updateRate(){
    console.log("called")
}
    currencyFirstE1.addEventListener("change",updateRate)
    currencySecondE1.addEventListener("change",updateRate)
    worthFirstE1E1.addEventListener("input",updateRate)

