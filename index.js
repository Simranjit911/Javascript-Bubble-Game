let clutter = ""
let pbtm = document.getElementById("pbtm")
let rn
pbtm.addEventListener("click", (det) => {
    let clickNum = Number(det.target.textContent)
    if (clickNum == rn) {
        makeBubble()
        incscore()
        hitvalue()
        clutter=""
    }else{
        return
    } 
})
let score = 0
function incscore() {
    let scoreval = document.querySelector(".scoreval")
    score += 10
    scoreval.innerHTML = score
}
function makeBubble() {
  
    for (let i = 1; i <= 230; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${rn}</div>`
        pbtm.innerHTML = clutter
    }
}
function runtime() {
    let inptime = document.querySelector(".inptime")
    let timer = 59
    var clr = setInterval(() => {
        if (timer >= 0) {
            inptime.innerHTML = timer
            timer--
        } else {
            clearInterval(clr)
            pbtm.innerHTML=`<div class="game">Game Over
            <p>Your Score is ${score}</p>
            <button ${onclick=rel}>Restart</button> </div>`
        }
    }, 500);
}
function rel(){
    window.location.reload()
}
function hitvalue() {
    let hitvl = document.querySelector(".hitval")
    rn = Math.floor(Math.random() * 10)
    hitvl.textContent = rn
}
runtime()
makeBubble()
hitvalue()