document.addEventListener("DOMContentLoaded",()=>{
    let gameDisplay = document.querySelector(".game-container");
    let bird = document.querySelector(".bird");
    let ground = document.querySelector(".ground");

    let birdLeft = 230;
    let birdButtom = 300;
    let gravity = 3;
    let isGameOver = false;
    let gap = 480;

    function startGame(){
        birdButtom -= gravity;
        bird.style.left = birdLeft + 'px';
        bird.style.bottom = birdButtom + 'px';
    }
    let gameInterval = setInterval(startGame,20);

    function control(e){
        if(e.keyCode === 32){
            jump();
        }
    }

    function jump(){
        if(birdButtom < 320 ) birdButtom += 60;
        bird.style.bottom = birdButtom + 'px';
    }

    document.addEventListener("keydown",control);

    function generateObstacle(){
        let obstacleLeft = 780;
        let obstacleButtom = Math.random()*55;
        let obstacle = document.createElement("div");
        let topObstacle = document.createElement("div");
        if(!isGameOver){
            obstacle.classList.add("obstacle");
            topObstacle.classList.add("top-obstacle");    
        }
        gameDisplay.appendChild(obstacle);
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleButtom + 'px';
        topObstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.bottom = obstacleButtom + gap + 'px';
        
        function moveObstacle(){
            if(isGameOver){
                clearInterval(timerId)
                return;
            }
            obstacleLeft -= 2;
            topObstacle.style.left = obstacleLeft + 'px';
            obstacle.style.left = obstacleLeft + 'px';

            if(obstacleLeft === -63){
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
            }
            if(obstacleLeft > 200 && obstacleLeft < 320 && (birdLeft === 230) && (birdButtom < obstacleButtom + 103 || birdButtom >  obstacleButtom + gap -250) ||  birdButtom < 0)
            {
                clearInterval(timerId);
                gameOver();
            }
        }
        let timerId = setInterval(moveObstacle,20);
    }
    if(!isGameOver) setInterval(generateObstacle,3000);
    generateObstacle();

    function gameOver(){
        clearInterval(gameInterval);
        isGameOver = true;
        document.removeEventListener("keydown",control);
    }
    
})