document.addEventListener("DOMContentLoaded", function () {
    const amigosParagraphs = document.querySelectorAll('.amigosT p');
    const images = document.getElementById('amigosImgs').querySelectorAll('img');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;

        amigosParagraphs.forEach((p, index) => {
            const pOffset = p.getBoundingClientRect().top;
            const pHeight = p.offsetHeight;

            // Ajusta este valor según sea necesario para determinar cuándo cambiar de imagen
            const threshold = screenHeight / 2;

            if (pOffset <= threshold && pOffset + pHeight >= threshold) {
                // Muestra la imagen correspondiente al p actual
                images.forEach((img, imgIndex) => {
                    img.style.opacity = imgIndex === index ? 1 : 0;
                });
            }
        });
    });
});