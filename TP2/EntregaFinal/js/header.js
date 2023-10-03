"use strict";

document.addEventListener('DOMContentLoaded',function menuOn(){
    let main = document.querySelector("main");

    let menuCategorias = document.querySelector(".categorias");

    let botonMenuCategorias = document.querySelector(".btn-menu");//Mobile
    botonMenuCategorias.addEventListener("click", function(){
        menuCategorias.classList.toggle("mostrar-categorias");
        main.classList.toggle("segundo-plano");
    });

    let menuUsuario = document.querySelector(".menu-usuario");


    let botonMenuUsuario = document.querySelector(".btn-usuario");
    botonMenuUsuario.addEventListener("click", function(){
        menuUsuario.classList.toggle("mostrar-menu-usuario");
        main.classList.toggle("segundo-plano");
    });
});
