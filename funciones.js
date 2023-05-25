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

let snakeBody = [];

// Variables de la comida

let foodX;
let foodY;

let gameOver = false;

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
    if (gameOver) {
        return;
    }
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
    // Se coloca la comida antes que la serpiente para que la serpiente pase por arriba y no por abajo.
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
    // Condicional para que cada vez que colisione con la comida se mueva a un lugar al azar
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = 'yellow';
    // hay que agregar la velocidad a la funcion update para que sume en eje x y en eje y.
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // condicion para terminar el juego
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > cols * blockSize) {
        gameOver = true;
        alert('Juego terminado');
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert('Juego terminado');
        }
    }
}

function changeDirection(e) {
    // se agrega un and diferente a el opuesto porque la serpiente no puede ir en contra de la dirección en la que va debido a que se comería a si misma
    if (e.code == 'ArrowUp' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == 'ArrowDown' && velocityX != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == 'ArrowLeft' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == 'ArrowRight' && velocityY != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Acá se crea la funcion para posicionar la comida en un lugar al azar del mapa.

function placeFood() {
    foodX = Math.floor(Math.random() * cols * blockSize);
    foodY = Math.floor(Math.random() * rows * blockSize);
}
