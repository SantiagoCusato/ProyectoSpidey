let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let jugadorActual = document.querySelector('#turno-jugador');
let btnReiniciar = document.querySelector('#btn-reiniciar');
let btnMenu = document.querySelector('#btn-menu');
let controlesJuego = document.querySelector('.controles-juego');
let contenedorInfo = document.querySelector('.info-juego');
const form = document.querySelector('.form-jugar');
const TIME = 300;
const CANVAS_WIDTH = 1288;
const CANVAS_HEIGHT = 644;
let turnoJ1 = true;
let endGame = false;
let listaFichasJugador1 = [];
let listaFichasJugador2 = [];
let fichaAMover = null;
const CANVAS_IMG_BACKGROUND = "img/juegoBackground.jpg";
let imageFondo = new Image();
imageFondo.src = CANVAS_IMG_BACKGROUND;
let jnombre1 = 'jugador1';
let jnombre2 = 'jugador2';
let fichasUtilizadas = 0;
let filas = 0;
let columnas = 0;
let tablero = null;
let intervaloTiempo = setInterval(actualizarContador, 1000);
let ahora = new Date().getTime();
let tiempoFinalizacion = ahora + 10 * 60 * 700;

function init(dificultad, nombre1, ficha1, nombre2, ficha2){
    fichasUtilizadas = 0
    endGame=false;
    listaFichasJugador1 = [];
    listaFichasJugador2 = [];
    filas = 0;
    columnas = 0;
    ahora = new Date().getTime();
    tiempoFinalizacion = ahora + 10 * 60 * 700;
    intervaloTiempo = setInterval(actualizarContador, 1000);
    turnoJ1 = true;
    contenedorInfo.classList.remove('hidden');
    controlesJuego.classList.remove('hidden');
    if(nombre1.length!=0){
        jnombre1 = nombre1;
    }
    if(nombre2.length!=0){
        jnombre2 = nombre2;
    }
    jugadorActual.innerHTML = "Turno "+ jnombre1;
    
    let imagenes = [];

    filas = Number.parseInt(dificultad) +1;
    columnas = Number.parseInt(dificultad)+2;
    tablero = new Tablero(canvas, ctx, filas, columnas, dificultad);

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
            jnombre1,
            'f1-' + i,
            ctx,
            100,
            540 - (i * 8),
            imagenJ1, "rgb(251, 64, 145)");

        let f2 = new canvas_ficha(
            jnombre2,
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
    btnReiniciar.addEventListener('click', function(){
        clearInterval(intervaloTiempo);
        init(dificultad, nombre1, ficha1, nombre2, ficha2);
    });

    btnMenu.addEventListener('click', function(){
        form.classList.remove('hidden');
        controlesJuego.classList.add('hidden');
        contenedorInfo.classList.add('hidden');
    });

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
        if(!endGame){
            tablero.AddFicha(event, fichaAMover);
        }

        if(posTempX == fichaAMover.getPosInicialX()){
            fichaAMover.setPosicionInicial();
        }else if(!endGame){
            fichaAMover.setHabilitada(false);
            for (let i = 0; i < fichasJugadorActual.length-1; i++) {
                if(fichasJugadorActual[i+1].getId() === fichaAMover.getId()){
                    fichasJugadorActual[i].setHabilitada(true);
                }
            }
            turnoJ1 = !turnoJ1;
            if(turnoJ1){
                jugadorActual.innerHTML = "Turno "+jnombre1;
            }else{
                jugadorActual.innerHTML = "Turno "+jnombre2;
            }
            fichasUtilizadas++;
            if(fichasUtilizadas>=columnas*filas){
                Empate();
            }
        }
    }
    
    fichaAMover = null;
    boxSeleccionado = null;
    canvasReload();
});

function HayGanador(jugador){
    finalizarJuego();

    jugadorActual.innerHTML = "GANO " + jugador;
    clearInterval(intervaloTiempo);
}

function Empate(){
    finalizarJuego();
    jugadorActual.innerHTML = "EMPATE";
    clearInterval(intervaloTiempo);
}

function finalizarJuego(){
    endGame = true;
    for (let index = 0; index < listaFichasJugador1.length; index++) {
        listaFichasJugador1[index].setHabilitada(false);
        listaFichasJugador2[index].setHabilitada(false);
    }
}

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

function actualizarContador() {
    if(!endGame){
        const tiempoActual = new Date().getTime();
        const tiempoRestante = tiempoFinalizacion - tiempoActual;
    
        if (tiempoRestante <= 0) {
            document.getElementById('tiempo-juego').textContent = 'Tiempo agotado';
            Empate();
        } else {
            const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
    
            const tiempoRestanteFormato = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
            document.getElementById('tiempo-juego').textContent = `Tiempo restante: ${tiempoRestanteFormato}`;
        }
    }
}


