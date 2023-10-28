"use strict";

document.addEventListener('DOMContentLoaded', function carros(){
let carritos = document.querySelectorAll('.carro');


carritos.forEach(e => {
    e.addEventListener("click", function(){
        if(e.innerHTML === "shopping_cart" ){
            e.innerHTML = "add_shopping_cart";
        }else{
            e.innerHTML = "shopping_cart";
        }
        e.classList.toggle("material-icons");
        e.classList.toggle("material-symbols-outlined");
    });
});

});