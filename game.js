let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
let score=0;
const main = (currentTime) => {
    window.requestAnimationFrame(main);
    if(gameOver===true){
        alert("Game Over,Your score"+score);
        return;
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }

    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
    updateFood(score);
    checkGameOver();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const checkGameOver = () => {
}