let question = document.querySelector("#questions");
let result = document.getElementById("result");
let scoreDisplay = document.getElementById("score");
let questionBtn = document.getElementById("start");
let feedBack = document.querySelector(".feedback");
let timer = document.querySelector("#time");
let restart = document.querySelector("#restart");

let time;
let score = 0;
let questionArr = [];
fetch("https://gist.githubusercontent.com/barman47/dbc4ecff10f9e07cfcda62d92e762c43/raw/cc25205b7ba0db8d5b40d4d97dd2a8d022cd5110/questions.json")
    .then((res) => res.json())
    .then(data =>{
        questionArr = data;
        time = questionArr.length *10;
        questionBtn.onclick = startQuiz;
})

let questionIndex = 0;
let timerId;

function startQuiz(){
    timerId = setInterval(()=>{
        clockTick();
    },1000)
    timer.textContent = time;
    document.querySelector(".start").classList.add("hide");
    getQuestion();
}

function getQuestion(){
    question.style.display = "block";
    let currentQuestion = questionArr[questionIndex];
    question.innerHTML = `
    <h2> ${currentQuestion.question}</h2>
    <div class = "option">
    <p>1: <button onclick  = "checkoption('${currentQuestion.optionA}')">${currentQuestion.optionA}</button></p>
    <p>2: <button onclick  = "checkoption('${currentQuestion.optionB}')">${currentQuestion.optionB}</button></p>
    <p>3: <button onclick  = "checkoption('${currentQuestion.optionC}')">${currentQuestion.optionC}</button></p>
    <p>4: <button onclick  = "checkoption('${currentQuestion.optionD}')">${currentQuestion.optionD}</button></p>
    </div>
    `
}

function checkoption(option){
    if(option !== questionArr[questionIndex].answer){
        score -=2;
        time -=10;
        if(time<0){time = 0;}
        feedBack.innerText = "Wrong Answer, the right answer is " + questionArr[questionIndex].answer;
        feedBack.style.color = "red";
    }
    else{
        score += 10;
        feedBack.innerText = "Right Answer";
        feedBack.style.color = "green";
    }
    feedBack.classList.remove("hide");
    setTimeout(() => {
        feedBack.classList.add("hide");
    }, 2000);
    questionIndex++;
    if(questionIndex === questionArr.length){
        gameEnd();
    }
    else{
        getQuestion();
    }
}

function gameEnd(){
    clearInterval(timerId);
    result.classList.remove("hide");
    scoreDisplay.textContent = score + time * 0.5;
    question.style.display = "none";
    restart.style.display = "block";
}

function clockTick(){
    time--;
    timer.textContent = time;
    if(time <= 0){
        gameEnd();
    }
}

restart.addEventListener("click",startQuiz);