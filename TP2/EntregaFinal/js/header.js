"use strict";

document.addEventListener('DOMContentLoaded',function menuOn(){
    const URL_HOME = "https://ramitafcex.github.io/InterfacesDeUsuario.github.io/TP2/EntregaFinal/index.html";
    let pagCargando = document.querySelector("#pag-cargando");


    let homebtn = document.querySelector("#homebtn");
    homebtn.addEventListener("click", function(){
        pagCargando.classList.toggle("pag-cargando-out");
        setTimeout(() => {
            location.href = URL_HOME;
            pagCargando.classList.toggle("pag-cargando-out");
        }, 5000);
    });

    let main = document.querySelector("main");

    let menuCategorias = document.querySelector(".categorias");

    let botonMenuCategorias = document.querySelector(".btn-menu");//Mobile
    botonMenuCategorias.addEventListener("click", function(){
        if(menuUsuario.classList.contains("mostrar-menu-usuario")){
            menuUsuario.classList.toggle("mostrar-menu-usuario");
            botonMenuUsuario.classList.toggle("cerrar-usuario");
        }else{
            main.classList.toggle("segundo-plano");
        }
        menuCategorias.classList.toggle("mostrar-categorias");
        botonMenuCategorias.classList.toggle("active");
    });

    let menuUsuario = document.querySelector(".menu-usuario");

    let botonMenuUsuario = document.querySelector(".btn-usuario");
    botonMenuUsuario.addEventListener("click", function(){
        if(menuCategorias.classList.contains("mostrar-categorias")){
            menuCategorias.classList.toggle("mostrar-categorias");
            botonMenuCategorias.classList.toggle("active");
        }else{
            main.classList.toggle("segundo-plano");
        }
        menuUsuario.classList.toggle("mostrar-menu-usuario");
        botonMenuUsuario.classList.toggle("cerrar-usuario");
        
    });
});
