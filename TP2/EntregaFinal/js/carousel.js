let displays = Array.from(document.getElementsByClassName('display'));

let map = new Map();

const movPorcentual = 62;

function setParams() {
    displays.forEach(e => {
        e.children[1].children[0].style.marginLeft =  0 + '%';
    });

    displays.forEach(e => {
        let datoPosicion = {
            "margenActual" : 0,
            "posicionActual" : 0,
            "maxPos" : 3
        }
        map.set(e, datoPosicion);
    });
}

function slideRight(b) {
    let buttonL = null;
    let buttonR = null;
    let sliderTemp = null;
    let datPosTemp = null;

    displays.forEach(e => {
        if(e.contains(b)){
            datPosTemp = map.get(e);

            buttonL = b;
            buttonR = e.children[2];
            sliderTemp = e.children[1].children[0];
        }
    });

    if (datPosTemp.posicionActual != 0) {
        Array.from(sliderTemp.children).forEach((element) => {
            element.classList.toggle('mov-derecha');
        });


        sliderTemp.style.marginLeft = datPosTemp.margenActual + (movPorcentual) + '%';
        datPosTemp.margenActual += (movPorcentual);
        datPosTemp.posicionActual--;



        setTimeout(() => {
            Array.from(sliderTemp.children).forEach((element) => {
                element.classList.toggle('mov-derecha');
            });
        }, 1000);
    }

    if (datPosTemp.posicionActual === 0) {
        buttonL.classList.add('flecha-out');
    }
    if (datPosTemp.posicionActual < datPosTemp.maxPos) {
        buttonR.classList.remove('flecha-out');
    }
};

function slideLeft(b) {
    let buttonL = null;
    let buttonR = null;
    let sliderTemp = null;
    let datPosTemp = null;

    displays.forEach(e => {
        if(e.contains(b)){
            datPosTemp = map.get(e);

            buttonL = e.children[0];
            buttonR = b;
            sliderTemp = e.children[1].children[0];
        }
    });

    if (datPosTemp.posicionActual < datPosTemp.maxPos) {
        Array.from(sliderTemp.children).forEach((element) => {
            element.classList.toggle('mov-izquierda');
        });


        sliderTemp.style.marginLeft = datPosTemp.margenActual - (movPorcentual) + '%';
        datPosTemp.margenActual -= (movPorcentual);
        datPosTemp.posicionActual++;


        setTimeout(() => {
            Array.from(sliderTemp.children).forEach((element) => {
                element.classList.toggle('mov-izquierda');
            });
        }, 1000);
    }

    if (datPosTemp.posicionActual == datPosTemp.maxPos) {
        buttonR.classList.add('flecha-out');
    }
    if (datPosTemp.posicionActual > 0) {
        buttonL.classList.remove('flecha-out');
    }
};

setParams();