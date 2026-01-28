const dayE1 = document.getElementById("day")
const hourE1 = document.getElementById("hour")
const minE1 = document.getElementById("min")
const secE1 = document.getElementById("sec")

const newYearDate = new Date("jan 1 , 2027 00:00:00").getTime()

updateCountdown()
function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearDate - now;
    
    const second = 1000;
    const minutes = second*60;
    const hour = minutes * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m= Math.floor((gap%hour)/minutes)
    const s = Math.floor((gap % minutes) / second)
    dayE1.innerText=d;
    hourE1.innerText=h;
    minE1.innerText=m;
    secE1.innerText =s;
    setTimeout(updateCountdown ,1000)
}