//1. capturar elementos
const circle = document.querySelector('#circulo');
const rectangulos = document.querySelectorAll('.rectangulos__shape');


//2.Crear evento
circle.addEventListener('click', ocultarCuadrados);

//3.Definir la función
function ocultarCuadrados (){

    rectangulos.forEach(rectangulo => {
        rectangulo.classList.toggle("ocultar");
    });

}