let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')
main = (currentTime) => {
    if (gameOver) {
        let score = snakeBody.length
        if (confirm(`You lost. Your score was ${score}. Press ok to restart.`)) {
            window.location = window.location
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

update = () => {
    updateFood();
    updateSnake();
    checkDeath();
}

draw = () => {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

checkDeath = () => {
    gameOver = snakeOutOfBounds() || snakeIntersectSelf()
}