const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const restartBtn = document.querySelector("#Restart");
const readyBtn = document.querySelector("#Ready");

const computerAnswear = document.querySelector("#computerAnswear");
const result = document.querySelector("#Result");
const scoreText = document.querySelector("#Score");

let score = parseInt(getCookie("My score is")) || 0; // initialize score to 0 if cookie is not set

let myAnswer;
let compAnswer;

gameStart();
deleteCookie("My score is");
function gameStart(){
    let Random = Math.floor(Math.random()*3);
    switch(Random){
    case 2:
        compAnswer = "Rock";
        break;
    
    case 1:
        compAnswer = "Scissors";
        break;
        
    case 0:
        compAnswer = "Paper";
        break;
    }

    rockBtn.addEventListener("click", chooseRock);
    paperBtn.addEventListener("click", choosePaper);
    scissorsBtn.addEventListener("click", chooseScissors);

    readyBtn.addEventListener("click", Ready);   
}

function restart(){
    myAnswer = null;
    compAnswer = null;
    gameStart();
    result.textContent = "The result will be ...";
    computerAnswear.textContent = "Computer is thinking his answer ";
}

function choosePaper(){
    myAnswer = "Paper";
}
function chooseScissors(){
    myAnswer = "Scissors";
}
function chooseRock(){
    myAnswer = "Rock";
}

function Ready(){
    if(myAnswer == "Rock" && compAnswer == "Scissors")
    {
        score += 1;
        result.textContent = "You win";
    }
    else if(myAnswer == "Paper" && compAnswer == "Rock")
    {
        score += 1;
        result.textContent = "You win";
    }
    else if(myAnswer == "Scissors" && compAnswer == "Paper")
    {
        score += 1;
        result.textContent = "You win";
    }
    else if(myAnswer == compAnswer)
    {
        result.textContent = "Draw";
    }
    else{
        result.textContent = "Computer win"
    }
    
    deleteCookie("My score is");
    setCookie("My score is", score.toString(), 365);

    scoreText.textContent = score.toString();

    computerAnswer.textContent = `Computer's answer is: ${compAnswer}`;

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
