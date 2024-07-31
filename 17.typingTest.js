const quoteApiUrl = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140";
const quoteSection = document.getElementById("quote");
const quoteInput = document.getElementById("quote-input");
let quote = "";
let time = 60;
let timer = ""
let mistake = 0;

const renderNewQuote = async()=>{
   try {
    const response = await fetch(quoteApiUrl);
    let data = await response.json();
    quote = data[0]['content'];
    let arr  = quote.split("").map(value =>{
        return '<span id="quote-char">'+value+'</span>';
    })
        quoteSection.innerHTML += arr.join("");
   } 
   catch (error) {
        quoteSection.innerHTML = error;
   }
}

quoteInput.addEventListener("input",()=>{
    let quoteCharacter = document.querySelectorAll("#quote-char");
    quoteCharacter = Array.from(quoteCharacter);
    let userInputCharacter = quoteInput.value.split("");
    quoteCharacter.forEach((char,index)=>{
        if(char.innerText == userInputCharacter[index]){
            char.classList.add("success");
        }
        else if(userInputCharacter[index] == null){
            if(char.classList.contains("success")){
                char.classList.remove("success");
            }
            else{
                char.classList.remove("fail")
            }
        }
        else{
            if(!char.classList.contains("fail")){
                mistake += 1;
                char.classList.add("fail");
            }
            document.getElementById("mistakes").innerHTML = mistake;
        }
        let check = quoteCharacter.every((element)=>{
            return element.classList.contains("success");
        })
        if(check){
            displayResult();
        }
    })
});


function updateTimer(){
    if(time == 0){
        displayResult();
    }
    else{
        document.getElementById("time").innerHTML = --time;
    }
}

const timeReduce = ()=>{
    time = 60;
    timer = setInterval(updateTimer,1000);
}

const startTest = ()=>{
    document.querySelector(".result").style.display = "none";
    document.getElementById("restart").style.display = "block";
    mistake = 0;
    timer = "";
    quoteInput.disabled = false;
    timeReduce();
    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "block";
}

const displayResult = ()=>{
    document.querySelector(".result").style.display = "block";
    quoteInput.disabled = true;
    document.getElementById("start").style.display = "block";
    document.getElementById("stop").style.display = "none";
    clearInterval(timer);
    document.getElementById("stop").style.display = "none";
    let timeTaken = 1;
    if(time!=0){
        timeTaken = (60-time)/100;
    }
    document.getElementById("speed").innerText = ((quoteInput.value.length / 5 )/ timeTaken).toFixed(2) + "wpm";
    document.getElementById("accuracy").innerText = Math.round(((quoteInput.value.length - mistake)/quoteInput.value.length)*100)
    + "%";
}

function restart(){
    document.location.reload();
}

window.onload = ()=>{
    quoteInput.value = "";
    quoteInput.disabled = true;
    renderNewQuote();
};