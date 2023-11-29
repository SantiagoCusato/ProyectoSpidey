
document.addEventListener('DOMContentLoaded', function() {
	var section = document.querySelector('#contenedor-spider');
	setTimeout(function() {
		section.classList.add('visible');
	}, 900); 
});
document.addEventListener('DOMContentLoaded', function() {
	var section = document.querySelector('.contenedor-edificios');
	setTimeout(function() {
		section.classList.add('visible');
	}, 100); 
});
function Parallax() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;

		var capas = document.getElementsByClassName("mov");
		var capa, speed, yPos;
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.body.onload = Parallax();
function Parallax2() {

	window.addEventListener("scroll", function(event){
       
		var top = window.pageYOffset;
        if(top<2000){
		var capas = document.getElementsByClassName("mov1");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translateY('+( 50 +yPos) +'px)');

		}
	}
	});
}
document.body.onload = Parallax2();
function Parallax3() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        
		var capas = document.getElementsByClassName("mov2");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(117px, ' + (215 +yPos) + 'px, 0px)');

		}
	
	});
}
document.body.onload = Parallax3();
function Parallax4() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        
		var capas = document.getElementsByClassName("mov3");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(32px, ' + (252 +yPos) + 'px, 0px)');

		}
	
	});
}
document.body.onload = Parallax4();
function Parallax5() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        
		var capas = document.getElementsByClassName("mov4");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(-627px, ' +(230 +yPos) + 'px, 0px)');

		}
	
	});
}
document.body.onload = Parallax5();
function Parallax6() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        
		var capas = document.getElementsByClassName("movTela1");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(-825px, ' +(256 +yPos) + 'px, 0px)');

		}
	
	});
}
document.body.onload = Parallax6();
function Parallax7() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        
		var capas = document.getElementsByClassName("movTela2");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translate3d(-735px, ' +(285 +yPos) + 'px, 0px)');

		}
	
	});
}
document.body.onload = Parallax7();



function ParallaxCard2() {
	;
	document.addEventListener("scroll", function() {
		var card1 = document.querySelector('.movx2');
		
	var top = window.pageYOffset;
		
		
		if(top>1200){
		setTimeout(function() {
			card1.classList.add('visible');
		}, 10)
	}; 
	})};


document.body.onload = ParallaxCard2();
function ParallaxCard3() {
	
	
	document.addEventListener("scroll", function() {
		var card1 = document.querySelector('.movx3');
		var top = window.pageYOffset;
		
		if(top>1200){
		setTimeout(function() {
			card1.classList.add('visible');
		}, 10)
	}; 
	})};


document.body.onload = ParallaxCard3();



function ParallaxCard1() {
	
	document.addEventListener("scroll", function() {
		var card1 = document.querySelector('.movx1');
		var top = window.pageYOffset;
	
		
		if(top>1200){
		setTimeout(function() {
			card1.classList.add('visible');
		}, 10)
	}; 
	})};


document.body.onload = ParallaxCard1();


function movimiento3Dghost1() {

	window.addEventListener("scroll", function(event){
       
		var top = window.pageYOffset;
       if(top>1100){

		var capas = document.getElementsByClassName("columna-gameplay-mov1");
		var capa, speed, yPos;
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translateY('+ (yPos+(450)) +'px)');
		}
	}
	});
}
document.body.onload = movimiento3Dghost1();
