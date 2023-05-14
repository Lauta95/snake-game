const lienzo = document.getElementById('lienzo');

const contexto = lienzo.getContext('2d');

let serpiente = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];

let direccion = 'abajo';

function dibujarSerpiente() {
    for (let i = 0; i < serpiente.length; i++) {
        contexto.fillStyle = '#00FF00';
        contexto.fillRect(serpiente[i].x * 10, serpiente[i].y * 10, 10, 10);
    }
}

dibujarSerpiente();

function actualizar() {
    if (direccion === 'derecha') {
        serpiente.unshift({ x: serpiente[0].x + 1, y: serpiente[0].y });
    } else if (direccion === 'izquierda') {
        serpiente.unshift({ x: serpiente[0].x - 1, y: serpiente[0].y });
    } else if (direccion === 'arriba') {
        serpiente.unshift({ x: serpiente[0].x, y: serpiente[0].y - 1 });
    } else if (direccion === 'abajo') {
        serpiente.unshift({ x: serpiente[0].x, y: serpiente[0].y + 1 });
    }

    serpiente.pop();
    dibujarSerpiente();
}

setInterval(actualizar, 100);

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowRight' && direccion !== 'izquierda') {
        direccion = 'derecha';
    } else if (evento.key === 'ArrowLeft' && direccion !== 'derecha'){
        direccion = 'izquierda';
    } else if (evento.key === 'ArrowUp' && direccion !== 'abajo') {
        direccion = 'arriba';
    } else if (evento.key === 'ArrowDown' && direccion !== 'arriba') {
        direccion = 'abajo';
    }
});