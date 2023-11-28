let menuBtn = document.querySelector(".btn-menu");
let opcionesMenu = document.querySelectorAll(".menu-btn");

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle('active');
  menuBtn.classList.toggle('inactive');

  for (let index = 0; index < opcionesMenu.length; index++) {
    opcionesMenu[index].classList.toggle("desplegar-menu-btn");
  }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let imgCont = document.querySelector(".titulo-container");
    let headerCont = document.querySelector("#h-container");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerCont.style.padding = "5px 50px 15px 50px";
    imgCont.style.top = "8px";
    imgCont.style.height = "69px";
    imgCont.style.width = "135px";
  } else {
    headerCont.style.padding = "15px 50px";
    imgCont.style.top = "100%";
    imgCont.style.height = "301px";
    imgCont.style.width = "590px";
  }
}


document.addEventListener('DOMContentLoaded', function agregarTransicion() {
  for (let index = 0; index < opcionesMenu.length; index++) {
    opcionesMenu[index].style.transition = `all ${0.3 + index / 7}s ease-in-out`;
    opcionesMenu[index].style.top = `${105 + index * 56.25}px`;
  }
});


let data = window.performance.getEntriesByType("navigation")[0].type;
if(data == "reload"){
  const HOME_URL = "https://ramitafcex.github.io/InterfacesDeUsuario.github.io/TP4/EntregaFinal/index.html"
  location.href = HOME_URL;
}