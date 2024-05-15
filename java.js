var carruseles = document.querySelectorAll('.carrusel');

carruseles.forEach(function(carrusel) {
    var indiceImagenActual = 0;
    var imagenes = carrusel.querySelectorAll('.carrusel-imagen');

    function cambiarImagen() {
        imagenes[indiceImagenActual].style.display = 'none';
        indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
        imagenes[indiceImagenActual].style.display = 'block';
    }

    setInterval(cambiarImagen, 3000); // Cambia la imagen cada 5 segundos
});
