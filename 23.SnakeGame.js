document.addEventListener("DOMContentLoaded",()=>{
    const gameDisplay = document.querySelector(".game-container");
    const snake = document.querySelector(".snake");
    let scoreDisplay = document.querySelector("#score");

    let snakeLength = 20;
    let score = 0;
    let snakeLeft = 200;
    let snakebottom = 200;
    let itemEaten = true;
    let isGameOver = false;
    let left,right,up,bottom,lastkey;

    snake.style.width = snakeLength + 'px';
    function changeleft(){
        snakeLeft += 20;
        snake.style.left = snakeLeft + 'px';
        snake.style.bottom = snakebottom + 'px';
        lastkey = 68
    }
    function changeRight(){
        snakeLeft -=20;
        snake.style.left = snakeLeft + 'px';
        snake.style.bottom = snakebottom + 'px';
        lastkey = 65
    }
    function changeUp(){
        snakebottom +=20;
        snake.style.left = snakeLeft + 'px';
        snake.style.bottom = snakebottom + 'px';
        lastkey = 87
    }
    function changeBottom(){
        snakebottom -=20;
        snake.style.left = snakeLeft + 'px';
        snake.style.bottom = snakebottom + 'px';
        lastkey = 83
    }

    function control(e){
        if(e.keyCode === 68 && e.keyCode != lastkey && lastkey != 65){
            snake.style.width = snakeLength + 'px';
            snake.style.height = "20px";
            clearAllInterval();
            right =  setInterval(changeleft,120);
        }
        else if(e.keyCode === 65 && e.keyCode != lastkey && lastkey != 68){
            snake.style.width = snakeLength + 'px';
            snake.style.height = "20px";
            clearAllInterval();
            left = setInterval(changeRight,120);
        }
        else if(e.keyCode === 87 && e.keyCode != lastkey && lastkey != 83){
            snake.style.height = snakeLength + 'px';
            snake.style.width = "20px";
            clearAllInterval();
            up = setInterval(changeUp,120);
        }
        else if(e.keyCode === 83 && e.keyCode != lastkey && lastkey != 87){
            snake.style.height = snakeLength + 'px';
            snake.style.width = "20px";
            clearAllInterval();
            bottom = setInterval(changeBottom,120);
        }
    }

    function clearAllInterval(){
        clearInterval(right)
        clearInterval(left);
        clearInterval(up);
        clearInterval(bottom);
    }
    document.addEventListener("keydown",control);
    left = setInterval(changeleft,100);

    function generateaxis(){
        let axis = parseInt(Math.random()*35)*20;
        return axis;
    }

    function generateItem(){
        let itemLeft = generateaxis();
        let itemBottom = generateaxis();
        let item = document.createElement("div");
        item.classList.add("item");
        item.style.left = itemLeft + 'px';
        item.style.bottom = itemBottom + 'px';
        gameDisplay.appendChild(item);
        function checkCollision(){
            if(snakeLeft < itemLeft + 20 && snakeLeft + snakeLength > itemLeft && snakebottom < itemBottom + 20 
                && snakebottom + snakeLength > itemBottom){
                itemEaten = true;
                gameDisplay.removeChild(item);
                clearInterval(checkCollisionInterval);
                addScore();
                generateItem();
            }
        }
        function checkGameOver(){   
            if(snakeLeft < 20   || snakeLength + snakeLeft > 700  || snakebottom + snakeLength > 700  || snakebottom < 20 ){
                gameOver();
                clearInterval(checkGameInterval);
            }
        }
        let checkGameInterval = setInterval(checkGameOver,100);
        let checkCollisionInterval = setInterval(checkCollision,120);
    }
    generateItem();
    function gameOver(){
        isGameOver = true;
        clearAllInterval();
        document.removeEventListener("keydown",control);
        alert("The game is over");
    }

    function addScore(){
        snakeLength +=20
        score++;
        scoreDisplay.textContent = score;
    }
})