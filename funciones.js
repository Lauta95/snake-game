let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

// Variables de la serpiente

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// Hay que darle a la serpiente velocidad asi puede moverse en el mapa
let velocityX = 0;
let velocityY = 0;

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
    document.addEventListener('keyup', changeDirection);
    // update();
    // en vez de updatearlo una vez cada vez que se hace refresh, hay que usar setInterval para updatear por un tiempo determinado. Luego hay que multiplicar las velocidades por blockSize porque si no suma 1 pixel por cada 1milisegundo
    setInterval(update, 1000 / 10);
}

function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'yellow';
    // hay que agregar la velocidad a la funcion update para que sume en eje x y en eje y.
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDirection(e) {
    if (e.code == 'ArrowUp') {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == 'ArrowDown') {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == 'ArrowLeft') {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == 'ArrowRight') {
        velocityX = 1;
        velocityY = 0;
    }
}

// Acá se crea la funcion para posicionar la comida en un lugar al azar del mapa.

function placeFood() {
    foodX = Math.floor(Math.random() * cols * blockSize);
    foodY = Math.floor(Math.random() * rows * blockSize);
}
