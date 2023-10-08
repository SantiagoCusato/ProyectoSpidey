var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide');
var slides2 = document.querySelectorAll('.slide');
var cantidadSlides = slides.length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = cantidadSlides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

let movPorcentual = 0;
let steps = 0;

var rect = slides[1].getBoundingClientRect();
var rect2 = slides[2].getBoundingClientRect();
var cardLToCardL = rect2.x - rect.x;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(screen.width);
}

function setParams(w) {
    if(typeof w === 'undefined'){
        w=screen.width;
    }
    if (w < 768) {
        slidesPerPage = 1;
        //100.8
        movPorcentual = 100.8;
        steps = 14;
    } else {
        slidesPerPage=5;
        movPorcentual = 64;
        steps = 3;
    }
    slidesCount = cantidadSlides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();


function slideRight() {
    if (currentPosition != 0) {
        Array.from(slides).forEach((element) => {
            element.classList.toggle('mov-derecha');
        });
        slider.style.marginLeft = currentMargin + (movPorcentual) + '%';
        currentMargin += (movPorcentual);
        currentPosition--;
        setTimeout(() => {
            Array.from(slides).forEach((element) => {
                element.classList.toggle('mov-derecha');
            });
          }, 1000);
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('flecha-out');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('flecha-out');
    }
};

function slideLeft() {
    if (currentPosition < steps) {
        Array.from(slides).forEach((element) => {
            element.classList.toggle('mov-izquierda');
        });
        slider.style.marginLeft = currentMargin - (movPorcentual) + '%';
        currentMargin -= (movPorcentual);
        currentPosition++;

        setTimeout(() => {
            Array.from(slides).forEach((element) => {
                element.classList.toggle('mov-izquierda');
            });
          }, 1000);

        
        
    };
    if (currentPosition == steps) {
        buttons[1].classList.add('flecha-out');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('flecha-out');
    }
    
};