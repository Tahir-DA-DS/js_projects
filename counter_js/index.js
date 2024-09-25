const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const counterLabel = document.getElementById("counterLabel")

let count = 0

increaseBtn.onclick = function(){
    count++
    counterLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--
    counterLabel.textContent = count
}
resetBtn.onclick = function(){
    count = 0
    counterLabel.textContent = count
}

const button = document.getElementById("button")

let randomNum;

button.onclick = function(){
    randomNum = Math.floor((Math.random() * 6) + 1)

    counterLabel.textContent = randomNum
}