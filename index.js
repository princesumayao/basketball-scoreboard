const team1 = document.getElementById("team1")
const team2 = document.getElementById("team2")

let firstCount = 10
let secondCount = 0

team1.textContent = firstCount
team2.textContent = secondCount

function add1(){
    firstCount += 1
    team1.textContent = firstCount
}

function add2(){
    firstCount += 2
    team1.textContent = firstCount
}

function add3(){
    firstCount += 3
    team1.textContent = firstCount
}




function addteam1(){
    secondCount += 1
    team2.textContent = secondCount
}

function addteam2(){
    secondCount += 2
    team2.textContent = secondCount
}

function addteam3(){
    secondCount += 3
    team2.textContent = secondCount
}
