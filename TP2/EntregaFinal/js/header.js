"use strict";

document.addEventListener('DOMContentLoaded',function menuOn(){
    let main = document.querySelector("main");

    let menuCategorias = document.querySelector(".categorias");

    let botonMenuCategorias = document.querySelector(".btn-menu");//Mobile
    botonMenuCategorias.addEventListener("click", function(){
        if(menuUsuario.classList.contains("mostrar-menu-usuario")){
            menuUsuario.classList.toggle("mostrar-menu-usuario");
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
        }else{
            main.classList.toggle("segundo-plano");
        }
        menuUsuario.classList.toggle("mostrar-menu-usuario");
        
        
    });
});
