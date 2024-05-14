var indiceImagenActual = 0;
var imagenes = document.querySelectorAll('.carrusel-imagen');

function cambiarImagen() {
    imagenes[indiceImagenActual].style.display = 'none';
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    imagenes[indiceImagenActual].style.display = 'block';
}

setInterval(cambiarImagen, 5000); 