document.addEventListener('DOMContentLoaded', function () {
    var imagenes = document.querySelectorAll('#columnaProtagonistas img');
    var sectionProtagonistas = document.getElementById('fondoProtagonistas');

    imagenes.forEach(function (imagen, index) {
        imagen.addEventListener('mouseover', function () {
            // Agrega la clase al contenedor cuando se hace hover sobre la imagen
            document.getElementById('columnaProtagonistas').classList.add('hovP' + (index + 1));
            sectionProtagonistas.style.opacity = 0.3;
            setTimeout(function () {
                sectionProtagonistas.style.content = 'url("img/fondoProtagonista'+ (index + 1) + '.png")';
                sectionProtagonistas.style.opacity = 1;
            }, 300);
            
            imagen.classList.add("foc");
        });

        imagen.addEventListener('mouseout', function () {
            // Elimina la clase al salir del hover sobre la imagen
            sectionProtagonistas.style.opacity = 0.3;
            document.getElementById('columnaProtagonistas').classList.remove('hovP' + (index + 1));
            setTimeout(function () {
                sectionProtagonistas.style.content = 'url("img/fondoProtagonista0.png")';
                sectionProtagonistas.style.opacity = 1;
            }, 300);
            imagen.classList.remove("foc");
        });
    });
});