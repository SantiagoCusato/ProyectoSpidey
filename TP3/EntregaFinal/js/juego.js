"use strict";
document.addEventListener('DOMContentLoaded',function menuOn(){
    const PAG_JUEGO = "https://ramitafcex.github.io/InterfacesDeUsuario.github.io/TP2/EntregaFinal/paginaJuego.html";
    let cardJuego = Array.from(document.getElementsByClassName('a-pag-juego'));
    cardJuego.forEach(e => {
        e.addEventListener("click", function(){
            location.href = PAG_JUEGO;
        });
    });
});