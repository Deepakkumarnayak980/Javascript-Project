let choices=document.querySelectorAll(".choice")
let you=document.querySelector(".you-div")
let computer=document.querySelector(".computer-div")
let result=document.querySelector(".result")
let winSound=new Audio("win.mp3")
let loseSound=new Audio("lose.mp3")
let drawSound=new Audio("draw.mp3")

function StartShake(){
    you.style=" animation: shake 1s linear 3;"
     computer.style=" animation: shake 1s linear 3;"
}
function stopShake(){
    you.style=" animation: none;"
     computer.style=" animation: none;"
}




choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        result.classList.remove("draw")
        result.classList.remove("win")
        result.classList.remove("lose")
        result.innerText=""
        you.innerText="👊"
         computer.innerText="👊"
         winSound.pause()
         loseSound.pause()
         drawSound.pause()
        let userChoice=choice.getAttribute("id")
        let options=["stone","paper","scissor"]
        let compindex=Math.floor(Math.random()*3)
        let computerChoice=options[compindex]
        StartShake()
       setTimeout(()=>{
        stopShake()
        playGame(userChoice,computerChoice)
       },3000)
      
    })
})
function playGame(userChoice,computerChoice){
if(userChoice==="stone"){
    you.innerText="👊"
}else if(userChoice==="paper"){
you.innerText="✋"
}else{
    you.innerText="✌️"  
}
if(computerChoice==="stone"){
    computer.innerText="👊"
}else if(computerChoice==="paper"){
computer.innerText="✋"
}else{
    computer.innerText="✌️"  
}


    if(userChoice===computerChoice){
        drawSound.play();
        result.innerText="Draw"
        result.classList.add("draw")
    }
    else if(userChoice==="stone" && computerChoice==="scissor" || userChoice==="paper" && computerChoice==="stone" ||  userChoice==="scissor" && computerChoice==="paper"){
        winSound.play();
      result.innerText="You Win"
      result.classList.add("win")
    }else{
        loseSound.play()
       result.innerText="You lose"
      result.classList.add("lose")
    }
}