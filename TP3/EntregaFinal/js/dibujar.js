let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let figures = [];


function getMousePos(event) {
    let ClientRect = canvas.getBoundingClientRect();
    return { 
        x: Math.round(event.clientX - ClientRect.left),
        y: Math.round(event.clientY - ClientRect.top)
    }
}

function drawFigures() {
    clearCanvas();
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context);
    }
}

function testCanva(){
    clearCanvas();
    let imagenFicha1 = new Image();
    imagenFicha1.src = "img/goku.png";
    let color = randomRGBA();
    let ficha1 = new canvas_ficha(
        "nada", 
        'f1' + 1,
        ctx,
        50,
        30,
        imagenFicha1, "rgba(226, 20, 169, 255)");
    ficha1.draw();
}

testCanva();


function clearCanvas() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}