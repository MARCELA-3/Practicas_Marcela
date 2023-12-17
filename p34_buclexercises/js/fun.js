/*
//1.

for( let contador =0; contador <10; contador++){

    let color = "#00" + contador;
    if(contador ==2)color= "#F00";


    document.body.innerHTML += "<p style='border: 1px solid black; background-color: "+ color +"; color: #FFF; padding: 20px;'> Parrafo generado com JS </p>"
}


//2.
for(let i=100; i>0; i-- ) { 

    //CREO ELEMENTO
    const buttonElement = document.createElement('button');

    //CREO EL CONTENIDO
    buttonElement.innerHTML= i;

    //LE AÑADO EL EVENTO
    buttonElement.addEventListener('click', function(){
            console.log("Has pulsado"+i);
    })

    //LO INSERTO EN EL DOM
    document.body.appendChild(buttonElement);
}
*/

/*
//4.

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
    "diciembre"
]


//FOR
for(let i=0; i < meses.length; i++ ){
    if(meses[i] == "febrero") continue;
    console.log('xxxxx', meses[i]);
}

console.log("---------")

//FOREACH
meses.forEach((element) =>{
    if(element == "febrero") {return;}
    console.log('-----', element);
 
})


//FOR OF

for(let item of meses) {
    console.log(item);
}
*/


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

const diasSemana = {
    lunes: "L",
    martes: "M",
    miercoles: "X",
    jueves: "J",
    viernes: "V",
    sabado: "S",
    domingo: "D"
}

// CREO UN CONTENEDOR
document.body.innerHTML = '<div class="container"></div>';

// CAPTURO CONTENEDOR
const container = document.querySelector('.container');

// APLICO ESTILO GRID AL CONTENEDER
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.border = "1px solid #000";

// RECORRO EL ARRAY Y EN CASA MES APLICO UNA FUNCION (CALLBACK)
meses.forEach((mes)=>{
    container.innerHTML += `<div class="mes-${mes}" style="padding:10px; border:1px solid #000;"><h3>${mes}</h3></div>`;

    // CAPTURAMOS MES
    const mesActual = document.querySelector('.mes-'+ mes);
    const tituloMes = document.querySelector('.mes-'+ mes + ' h3');
    tituloMes.style.gridColumn = "span 7";

    // ESTILOS A MES
    mesActual.style.display = "grid";
    mesActual.style.gridTemplateColumns = "repeat(7, 1fr)";
    

    //////////////////////////////////////////////////////////////
    // CREO CONTENEDOR PARA HEADER DE DIAS
    mesActual.innerHTML += `<div class="dias-title-${mes}">`;

    //CAPTURO HEADER DE DIAS
    const diasSemanaHeading = document.querySelector('.dias-title-'+ mes);

    // AJUSTO MAQUETACION PARA QUE NO SE DISTORSIONE EL GRID
    diasSemanaHeading.style.gridColumn = "span 7";
    diasSemanaHeading.style.display = "grid";
    diasSemanaHeading.style.gridTemplateColumns = "repeat(7, 1fr)";


    // PINTO CON UN LOOP LOD DIAS DE LA SEMANA DENTRO DEL CONTENEDOR DE DIAS
    Object.values(diasSemana).forEach((dia)=>{
        console.log(dia)
        diasSemanaHeading.innerHTML += `<p style="font-weight: 800">${dia}</p>`;
    })

    // INYECTAMOS DIAS DE LA SEMANA


    let dias = 31;
    if(mes == "febrero") dias = 29;
    if(mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre") dias = 30;

    // CREO DIAS DE LA SEMANA´

    
    // CREO BUCLE DE 31 INTERACCIONES, UNO PARA CADA DIA
    for(let i = 1; i<=dias; i++) {
        mesActual.innerHTML += `<span style="padding:5px">${i}</span>`
    }

});

