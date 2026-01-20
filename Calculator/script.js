const buttonsE1 =document.querySelector("buttons")

for(let i=0 ;i<buttonsE1.clientHeight; i++){
    buttonsE1[i].addEventlistener("click",()=>{
        console.log()
    })
}