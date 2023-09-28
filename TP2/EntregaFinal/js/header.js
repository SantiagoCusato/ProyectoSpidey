"use strict";

document.addEventListener('DOMContentLoaded',function menuOn(){

    let menuCategorias = document.querySelector(".categorias");

    let botonMenuCategorias = document.querySelector(".btn-menu");//Mobile
    botonMenuCategorias.addEventListener("click", function(){
        menuCategorias.classList.toggle("mostrar-categorias");
    });

    let menuUsuario = document.querySelector(".menu-usuario")

    let botonMenuUsuario = document.querySelector(".btn-usuario");
    botonMenuUsuario.addEventListener("click", function(){
        menuUsuario.classList.toggle("mostrar-menu-usuario");
    });
});
