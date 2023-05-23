let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

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

}
