document.addEventListener("DOMContentLoaded", () => {
    let dino = document.querySelector(".dino");
    let ground = document.querySelector(".ground");
    let scoreDisplay = document.querySelector("#score");

    let dinoBottom = 150;
    let gravity = 8;
    let startTimerId, jumpTimerId, generateTimerId, timerId;
    let obstacleTimers = [];
    let score =0;

    function startGame() {
        if (dinoBottom >= 158) {
            dinoBottom -= gravity;
        }
        dino.style.bottom = dinoBottom + 'px';
    }

    function jump() {
        if (dinoBottom >= 300) {
            clearInterval(jumpTimerId);
            startTimerId = setInterval(startGame, 25);
            return;
        }
        dinoBottom += 10;
        dino.style.bottom = dinoBottom + 'px';
    }

    function control(e) {
        if (e.keyCode === 32) {
            clearInterval(startTimerId);
            jumpTimerId = setInterval(jump, 20);
        }
    }

    document.addEventListener("keydown", control);

    function checkGameOver(items) {
        const dinoRect = dino.getBoundingClientRect();
        const itemsRect = items.getBoundingClientRect();

        if (
            dinoRect.right > itemsRect.left &&
            dinoRect.left < itemsRect.right &&
            dinoRect.bottom > itemsRect.top &&
            dinoRect.top < itemsRect.bottom
        ) {
            gameOver();
        }
    }

    function generateObstacle() {
        let itemLeft = 780;
        let number = parseInt(Math.random() * 3);
        let item = [];
        let items = document.createElement("div");
        items.classList.add("items");
        for (let i = 0; i < number; i++) {
            item[i] = document.createElement("div");
            item[i].classList.add("cactus");
            items.appendChild(item[i]);
        }
        ground.appendChild(items);
        items.style.left = itemLeft + 'px';

        function moveItems() {
            itemLeft -= 2;
            items.style.left = itemLeft + 'px';
            checkGameOver(items);

            score += .08;
            scoreDisplay.textContent = parseInt(score);

            if (itemLeft <= -items.offsetWidth) {
                ground.removeChild(items);
            }
        }
        timerId = setInterval(moveItems, 8);
        obstacleTimers.push(timerId);
    }

    generateTimerId = setInterval(generateObstacle, 1500);

    function gameOver() {
        clearInterval(startTimerId);
        clearInterval(jumpTimerId);
        clearInterval(generateTimerId);
        obstacleTimers.forEach(timerId => clearInterval(timerId))
        alert(`Game Over! Your Score is ${parseInt(score)}`);
    }
});
