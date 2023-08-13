let randomnumber = document.getElementById("random1")
let randomnumber2 = document.getElementById("random2")
let greaterthan = document.getElementById("greaterthan")
let equalstoo = document.getElementById("equalstoo")
let lesserthan = document.getElementById("lesserthan")

let number,numeber2;
todisplay()
 
async function todisplay(){
    number = Math.floor(Math.random() * 100)
    numeber2 = Math.floor(Math.random() * 100)
    
    randomnumber.innerHTML = number
    randomnumber2.innerHTML = numeber2   
}

let score = 0;
let intervals;

greaterthan.onclick = () =>{
    if(number > numeber2){
        score++
        todisplay()
        removeinterval(intervals)
    }
    else{
        location.href = "./gameover.html"
    }
}
equalstoo.onclick = () =>{
    if(number === numeber2){
        score++
        todisplay()
        removeinterval(intervals)
    }
    else{
        location.href = "./gameover.html"
    }
}
lesserthan.onclick = () =>{
    if(number < numeber2){
        score++
        todisplay()
        removeinterval(intervals)
    }
    else{
        location.href = "./gameover.html"
    }
}

function starttimer(){
    let time = 5;
    let timer = document.getElementById("timer")
    timer.innerHTML = time
    intervals = setInterval(() => {
        if(time === 1){
            location.href = "./gameover.html"
        }
        time--;
        timer.innerHTML = time 
    }, 1000);
    localStorage.setItem("score",score)
}

//clearinterval function is important because setinterval creates an interval, to remove interval we need to use it 

//multiple intervals at the same time can create overlapping of intervals, which can create hurdle in the smooth running of things
function removeinterval(intervals){
    clearInterval(intervals)
    starttimer()
}

starttimer()