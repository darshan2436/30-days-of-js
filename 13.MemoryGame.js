let resetBtn = document.getElementById("reset");
const icons=[
    "fa-solid fa-heart",
    "fa-solid fa-bomb",
    "fa-solid fa-poo",
    "fa-solid fa-fish",
    "fa-solid fa-fire",
    "fa-solid fa-tree",
    "fa-solid fa-snowflake",
    "fa-solid fa-sun"
]

let gameBoard = document.querySelector(".game-container");
const cards = [...icons,...icons];
let firstCard,SecondCard;
let cardFlipped = 0;
let lockBoard = false;

function shuffle(array){
    for(let i=array.length-1 ;i>0 ;i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

function createCard(icon){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="inner-card">
        <div class="front-card"><i class="${icon}"></i></div>
        <div class="back-card"></div>
    </div>   `
    card.addEventListener("click",cardFlip);
    return card;
}

function cardFlip(){
    if(cardFlipped) return;
    if(this === firstCard) return;

    this.classList.add("flipped")
    if(!firstCard){
        firstCard = this;
        return;
    }
    SecondCard = this;
    checkMatch();
}

function checkMatch(){
    if(firstCard.querySelector(".front-card i").className === SecondCard.querySelector(".front-card i").className){
        disableCards();
        return
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener("click",cardFlip);
    SecondCard.removeEventListener("click",cardFlip);
    
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        SecondCard.classList.remove("flipped");

        resetBoard();
    }, 700);
}

function resetBoard(){
    [firstCard,SecondCard] = [null,null];
    cardFlipped = false;
    lockBoard = false;
}

function init(){
    gameBoard.innerHTML = " ";
    const shuffleCards = shuffle(cards);
    shuffleCards.forEach((icon) => {
        let card = createCard(icon);
        gameBoard.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded",init);
resetBtn.addEventListener("click",init);