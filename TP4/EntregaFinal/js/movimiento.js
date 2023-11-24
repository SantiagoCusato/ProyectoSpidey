function Parallax() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;

		var capas = document.getElementsByClassName("mov");
		var capa, speed, yPos;
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 70);
			capa.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.body.onload = Parallax();
function Parallax2() {

	window.addEventListener("scroll", function(event){
         // que carajos xd
		var top = window.pageYOffset;
        if(top>100||top<2000){
		var capas = document.getElementsByClassName("mov1");
		var capa, speed, yPos;
		
		for (var i = 0; i < capas.length; i++) {
			capa = capas[i];
			speed = capa.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			capa.setAttribute('style', 'transform: translateY(' + yPos +'px)');

		}
	}
	});
}
document.body.onload = Parallax2();