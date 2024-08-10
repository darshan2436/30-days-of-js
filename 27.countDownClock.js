let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;

    displaySeconds(seconds);
    displayEndTime(then);
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }
        displaySeconds(secondsLeft);
    },1000)
}

function displaySeconds(seconds){
    const minutes = Math.floor(seconds/60);
    const remSeconds = seconds%60;
    const display = `${minutes}:${remSeconds < 10 ? '0':''}${remSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour -12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent=`Be back at ${adjustedHour < 10 ? '0':''}
    ${adjustedHour}:${minutes < 10 ? '0':''}${minutes}`;
}

function startTimer(){
    const second = parseInt(this.dataset.time);
    timer(second);
}

buttons.forEach(button => button.addEventListener("click",startTimer));
document.customForm.addEventListener("submit",function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})