const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];


// CREO UN CONTENEDOR
document.body.innerHTML = '<div class="container"></div>';

// CAPTURO CONTENEDOR
const container = document.querySelector('.container');

// APLICO ESTILO GRID AL CONTENEDOR
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.border = "1px solid #000";


// RECORRO EL ARRAY Y EN CADA MES APLICO UNA FUNCIÓN (CALLBACK)
meses.forEach((mes)=>{
    container.innerHTML += 
    `<div class="mes-${mes}" style="padding:10px; border:1px solid #000;"><h3>${mes}</h3></div>`;

// CAPTURO MES
const mesActual = document.querySelector('.mes-' + mes);
const tituloMes = document.querySelector('.mes-' + mes + ' h3');
tituloMes.style.gridColumn = "span 7"

// ESTILOS A MES
mesActual.style.display = "grid";
mesActual.style.gridTemplateColumns = "repeat(7, 1fr)";

let dias = 31;


// CREO UN BUCLE DE 31 INTERACCIONES, UNO PARA CADA DIA
for(let i = 1; i<=dias; i++) {
    mesActual.innerHTML += `<span>${i}</span>`
}


});

