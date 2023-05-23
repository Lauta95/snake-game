let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

// Variables de la serpiente

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

window.onload = function () {
    board = document.getElementById('board');
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d');

    update();
}

function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'yellow';
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
}
