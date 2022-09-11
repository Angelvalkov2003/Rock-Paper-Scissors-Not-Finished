const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const restartBtn = document.querySelector("#Restart");
const readyBtn = document.querySelector("#Ready");


const computerAnswear = document.querySelector("#computerAnswear");
const result = document.querySelector("#Result");
const scoreText = document.querySelector("#Score");

let score = getCookie("My score is");

let myAnswear;
let compAnswear;

gameStart();

function gameStart(){
    let Random = Math.floor(Math.random()*3);
    switch(Random){
    case 2:
        compAnswear = "Rock";
        break;
    
    case 1:
        compAnswear = "Scissors";
        break;
        
    case 0:
        compAnswear = "Paper";
        break;
    }

    rockBtn.addEventListener("click", chooseRock);
    paperBtn.addEventListener("click", choosePaper);
    scissorsBtn.addEventListener("click", chooseScissors);

    readyBtn.addEventListener("click", Ready);

    
}

function restart(){
    myAnswear = null;
    compAnswear = null;
    gameStart();
    result.textContent = "The result will be ...";
    computerAnswear.textContent = "Computer is thinking his answear ";
}

function choosePaper(){
    myAnswear = "Paper";
}
function chooseScissors(){
    myAnswear = "Scissors";
}
function chooseRock(){
    myAnswear = "Rock";
}

function Ready(){

    

    if(myAnswear == "Rock" && compAnswear == "Scissors")
    {
        score+=1
        result.textContent = "You win";
    }
    else if(myAnswear == "Paper" && compAnswear == "Rock")
    {
        score+=1
        result.textContent = "You win";
    }
    else if(myAnswear == "Scissors" && compAnswear == "Paper")
    {
        score+=1
        result.textContent = "You win";
    }
    else if(myAnswear == compAnswear)
    {
        result.textContent = "Draw";
    }
    else{
        result.textContent = "Computer win"
    }
    
    deleteCookie("My score is");
    setCookie("My score is", score, 365);

    scoreText.textContent = getCookie("My score is");

    computerAnswear.textContent = `Computer's answear is: ${compAnswear}`;

    restartBtn.addEventListener("click", restart)
}

function setCookie(name, value, daysToLive)
{
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}