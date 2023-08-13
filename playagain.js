let playagain = document.getElementById("play_again")
let score = document.getElementById("score")

let storage = JSON.parse(localStorage.getItem("score"))
score.innerHTML = ` <h1 class="universal-num whitetext">Score : ${storage}</h1>`

playagain.onclick = ()=>{
    location.href = "./actualplay.html"
}