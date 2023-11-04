let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let jugadorActual = document.querySelector('#turno-jugador');
let contenedorInfo = document.querySelector('.info-juego');
const TIME = 300;
const CANVAS_WIDTH = 1288;
const CANVAS_HEIGHT = 644;
let turnoJ1 = true;
let endGame = false;
let listaFichasJugador1 = [];
let listaFichasJugador2 = [];
let fichaAMover = null;
const CANVAS_IMG_BACKGROUND = "img/juegoBackground.jpg";
//const CANVAS_IMG_BOX = "nube.png";
let imageFondo = new Image();
imageFondo.src = CANVAS_IMG_BACKGROUND;
let jnombre1 = 'jugador1';
let jnombre2 = 'jugador2';

let tablero = null;


function init(dificultad, nombre1, ficha1, nombre2, ficha2){
    contenedorInfo.classList.toggle('hidden');
    
    if(nombre1.length!=0){
        jnombre1 = nombre1;
    }
    if(nombre2.length!=0){
        jnombre2 = nombre2;
    }
    jugadorActual.innerHTML = jnombre1;
    
    let imagenes = [];

    let filas = Number.parseInt(dificultad) +1;
    let columnas = Number.parseInt(dificultad)+2;
    tablero = new Tablero(canvas, ctx, filas, columnas);

    canvas.style.display = 'block';
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    clearCanvas();
    let imagenFicha1 = new Image();
    imagenFicha1.src = "img/godzilla.png";
    
    let imagenFicha2 = new Image();
    imagenFicha2.src = "img/kong.png";

    let imagenFicha3 = new Image();
    imagenFicha3.src = "img/rex.jpg";

    imagenes.push(imagenFicha1);
    imagenes.push(imagenFicha2);
    imagenes.push(imagenFicha3);

    tablero.inicializarTablero();
    tablero.drawTablero();

    let imagenJ1 = imagenes[0];
    let imagenJ2 = imagenes[1];

    for (let i = 0; i < imagenes.length; i++) {
        if(imagenes[i].src.includes(ficha1)){
            imagenJ1 = imagenes[i];
        }
        if(imagenes[i].src.includes(ficha2)){
            imagenJ2 = imagenes[i];
        }
    }


    let total_fichas = ((filas * columnas) / 2) + 1;
    for (let i = 0; i < total_fichas; i++) {
        let f1 = new canvas_ficha(
            nombre1,
            'f1-' + i,
            ctx,
            100,
            540 - (i * 8),
            imagenJ1, "rgb(251, 64, 145)");

        let f2 = new canvas_ficha(
            nombre2,
            'f2-' + i,
            ctx,
            1100,
            540 - (i * 8),
            imagenJ2, "rgb(251, 64, 145)");
        
        if (i === total_fichas - 1) {
            f1.setHabilitada(true);
            f2.setHabilitada(true);
        }

        f1.draw();
        f2.draw();
        listaFichasJugador1[i] = f1;
        listaFichasJugador2[i] = f2;
    }
}
canvas.addEventListener('mousedown', function (event) {
    if (!endGame) {
        let mousePos = getMousePos(event);
        let fichasJugadorActual;
        if (turnoJ1) {
            fichasJugadorActual = listaFichasJugador1;
        } else {
            fichasJugadorActual = listaFichasJugador2;
        }
        for (let i = 0; i < fichasJugadorActual.length; i++) {
            if(fichasJugadorActual[i].isHabilitada() && fichasJugadorActual[i].isClicked(mousePos.x, mousePos.y)){
                fichaAMover = fichasJugadorActual[i];
                break;
            }
            // let x = mousePos.x;
            // let y = mousePos.y;
            // let dx = Math.abs(x - fichasJugadorActual[i].getPosCanvasX());
            // let dy = Math.abs(y - fichasJugadorActual[i].getPosCanvasY());
            // let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            // if (distancia <= fichasJugadorActual[i].getRadio() && fichasJugadorActual[i].isHabilitada()) {
            //     fichaAMover = fichasJugadorActual[i];
            //     break;
            // }

        }
    }

});

canvas.addEventListener('mousemove', function (event) {
    let mousePos = getMousePos(event);
    if (turnoJ1) {
        if (fichaAMover != null) {
            fichaAMover.setPosicionCanvas(
                mousePos.x,
                mousePos.y
            )
        }
    } else {
        if (fichaAMover != null) {
            fichaAMover.setPosicionCanvas(
                mousePos.x,
                mousePos.y
            )
        }
    }
    canvasReload();
});

canvas.addEventListener('mouseup', function (event) {
    let posTempX = 0;
    let fichasJugadorActual = turnoJ1 ? listaFichasJugador1 : listaFichasJugador2;

    if (fichaAMover != null) {
        posTempX = fichaAMover.getPosInicialX();
        tablero.AddFicha(event, fichaAMover);

        if(posTempX == fichaAMover.getPosInicialX()){
            fichaAMover.setPosicionInicial();
        }else{
            fichaAMover.setHabilitada(false);
            for (let i = 0; i < fichasJugadorActual.length-1; i++) {
                if(fichasJugadorActual[i+1].getId() === fichaAMover.getId()){
                    fichasJugadorActual[i].setHabilitada(true);
                }
            }
            turnoJ1 = !turnoJ1;
            if(turnoJ1){
                jugadorActual.innerHTML = jnombre1;
            }else{
                jugadorActual.innerHTML = jnombre2;
            }
        }
    }
    
    fichaAMover = null;
    boxSeleccionado = null;
    canvasReload();
});


function canvasReload() {
    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
    tablero.drawTablero();
    for (let i = 0; i < listaFichasJugador1.length; i++) {
        listaFichasJugador1[i].draw();
    }
    for (let i = 0; i < listaFichasJugador2.length; i++) {
        listaFichasJugador2[i].draw();
    }
}

function drawFigures() {
    clearCanvas();
    for (let i = 0; i < figures.length; i++) {
        figures[i].draw(context);
    }
}



function getMousePos(event) {
    let ClientRect = canvas.getBoundingClientRect();
    return { 
        x: Math.round(event.clientX - ClientRect.left),
        y: Math.round(event.clientY - ClientRect.top)
    }
}

function clearCanvas() {
    ctx.drawImage(imageFondo, 0, 0, canvas.width, canvas.height);
}


function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function validarJugada(jugador, cInicial, fInicial) {
    let contador = 0;
    for (let col = cInicial; col >= 0 && !endGame; col--) {
        if (matriz_box[col][fInicial].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
        } else {
            break;
        }
    }
    for (let col = cInicial + 1; col <= columnas && !endGame; col++) {
        if (matriz_box[col][fInicial].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
        } else {
            break;
        }
    }

    //VALIDACION ARRIBA ABAJO
    contador = 0;
    for (let fil = fInicial; fil >= 0 && !endGame; fil--) {
        if (matriz_box[cInicial][fil].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
        } else {
            break;
        }
    }
    for (let fil = fInicial + 1; fil <= filas && !endGame; fil++) {
        if (matriz_box[cInicial][fil].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
        } else {
            break;
        }
    }

    //VALIDACION DIAGONAL
    contador = 0;
    let cDiagonal = cInicial;
    let fDiagonal = fInicial;
    while (cDiagonal <= columnas && fDiagonal >= 0 && !endGame) {
        if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
            cDiagonal++;
            fDiagonal--;
        } else {
            break;
        }
    }

    cDiagonal = cInicial - 1;
    fDiagonal = fInicial + 1;
    while (cDiagonal >= 0 && fDiagonal <= filas && !endGame) {
        if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
            cDiagonal--;
            fDiagonal++;
        } else {
            break;
        }
    }

    //VALIDACION DIAGONAL
    contador = 0;
    cDiagonal = cInicial;
    fDiagonal = fInicial;
    while (cDiagonal >= 0 && fDiagonal >= 0 && !endGame) {
        if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
            cDiagonal--;
            fDiagonal--;
        } else {
            break;
        }
    }
    cDiagonal = cInicial + 1;
    fDiagonal = fInicial + 1;
    while (cDiagonal <= columnas && fDiagonal <= filas && !endGame) {
        if (matriz_box[cDiagonal][fDiagonal].getJugador() === jugador) {
            contador++;
            if (contador == dificultad) {
                finJuego(jugador);
            }
            cDiagonal++;
            fDiagonal++;
        } else {
            break;
        }
    }
}


const ahora = new Date().getTime();

// Establece la fecha y hora de finalización 10 minutos después
const tiempoFinalizacion = ahora + 10 * 60 * 1000; // 10 minutos en milisegundos

// Función para actualizar el contador regresivo
function actualizarContador() {
    const tiempoActual = new Date().getTime();
    const tiempoRestante = tiempoFinalizacion - tiempoActual;

    if (tiempoRestante <= 0) {
        document.getElementById('tiempo-juego').textContent = 'Tiempo agotado';
    } else {
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        const tiempoRestanteFormato = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        document.getElementById('tiempo-juego').textContent = `Tiempo restante: ${tiempoRestanteFormato}`;
    }
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);

// Llama a actualizarContador una vez al principio para asegurarse de que se muestre el tiempo inicial
actualizarContador();




