function computerOption(){
    const option = ["Rock", "Paper", "Scissors"];
    return option[Math.floor((Math.random()*10)%3)];
}
let playerScore=0;
let computerScore=0;

function hasPlayerWon(user,computer){
    return(
        user == "Rock" && computer == "Scissors"||
        user == "Scissors" && computer == "Paper"||
        user == "Paper" && computer == "Rock"
    );
}

function getRoundResults(user){
    computer = computerOption()
    if(hasPlayerWon(user,computer)){
        playerScore++;
        return `Playes wins! ${user} beats ${computer}`;
    }
    else if(computer === user){
        return `Game ties! Noone gets the point`;
    }
    else{
        computerScore++;
        return `Computer wins! ${computer} beats ${user}`;
    }
}

let yourSpanElement = document.getElementById("your-score");
let computerSpanElement =document.getElementById("computer-score");
let resultMsgElement =document.getElementById("results-msg");
let winnerMsgElement =document.getElementById("winner-msg");
let optionContainer = document.getElementById("options-container")
let resetBtn = document.getElementById("reset-game");

function showResults(user){
    resultMsgElement.innerText = getRoundResults(user);
    yourSpanElement.innerText = playerScore;
    computerSpanElement.innerText = computerScore;
    if(playerScore==3||computerScore==3){winnerMsgElement.innerText = (playerScore==3)? "You won the game": "Computer won the game";
        resetBtn.style.display ="block";
        optionContainer.style.display = "none";
    }
}

function reset(){
    playerScore=0;
    computerScore=0;
    computerSpanElement.innerText = "";
    yourSpanElement.innerText = "";
    resetBtn.style.display = "none";
    optionContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    resultMsgElement.innerText = "";
}

const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");

rockbtn.addEventListener("click" , function(){
    showResults("Rock");
});
paperbtn.addEventListener("click" , function(){
    showResults("Paper");
});
scissorsbtn.addEventListener("click" , function(){
    showResults("Scissors");
});