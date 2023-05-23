let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

// Variables de la serpiente

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// Variables de la comida

let foodX = blockSize * 10;
let foodY = blockSize * 10;

window.onload = function () {
    board = document.getElementById('board');
    // Esto establece el alto y ancho del board, se multiplica porque cada bloquesito es de 25pixeles  y cada row y cada col es de 20pixeles.
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d');

    placeFood();
    update();
}

function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'yellow';
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

// Acá se crea la funcion para posicionar la comida en un lugar al azar del mapa.

function placeFood() {
    foodX = Math.floor(Math.random() * cols * blockSize);
    foodY = Math.floor(Math.random() * rows * blockSize);
}
