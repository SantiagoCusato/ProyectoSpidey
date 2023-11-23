document.addEventListener('DOMContentLoaded', function () {
    const masAmigosContent = document.getElementById('masAmigosContent');
    const amigosItemImages = document.querySelectorAll('.amigosItem img');

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        amigosItemImages.forEach(function (img) {
            const offsetTop = img.closest('.amigosItem').offsetTop;
            const translateY = Math.min(0, (scrollTop - offsetTop) / 2);
            img.style.transform = `translateY(${translateY}px)`;
        });
    });
});
