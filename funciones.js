
// Espacio en donde se va a jugar
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

// Dibujar serpiente
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocidadX = 0;
let velocidadY = 0;

let snakeBody = [];

// Dibujar comida
let foodX;
let foodY;

window.onload = function () {
    board = document.getElementById('board');
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d');

    placeFood();
    document.addEventListener('keyup', changeDirection);
    // update();
    setInterval(update, 1000 / 10);
}

function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == snakeY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY]
    }

    context.fillStyle = 'yellow';
    snakeX += velocidadX * blockSize;
    snakeY += velocidadY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }


}

function changeDirection(e) {
    if (e.code == 'ArrowUp' && velocidadY != 1) {
        velocidadX = 0;
        velocidadY = -1;
    } else if (e.code == 'ArrowDown' && velocidadY != -1) {
        velocidadX = 0;
        velocidadY = 1;
    } else if (e.code == 'ArrowLeft' && velocidadX != 1) {
        velocidadX = -1;
        velocidadY = 0;
    } else if (e.code == 'ArrowRight' && velocidadX != -1) {
        velocidadX = 1;
        velocidadY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;

}