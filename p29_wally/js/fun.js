//1.Capturar lo necesario para la interaccion
const poster = document.querySelector('.wally__poster');
const wally = document.querySelector('.wally');


//2. Crear funcion que va a actuar cuando haga click
function mensajeError() {
    console.log("Ahi no esta wally :(")
}
 


//3.Crear evento
poster.addEventListener('click',mensajeError);



//2. Crear funcion que va a actuar cuando haga click
function mensajeAcierto(e) {
    e.stopPropagation();
    const coordenadas = [e.pageX, e.pageY];
    
    coordenadas.push('Enhorabuena, Ahi esta wally');

    const mensajeFinal = coordenadas [2] + " tus coordenadas son: " + coordenadas[0] + "," + coordenadas [1]
    
    //OTRA FORMA: 
    const mensajeFinal2 = `${coordenadas [2] }  tus coordenadas son:  ${coordenadas[0]}, ${coordenadas [1]}`;


    console.log(mensajeFinal);
    console.log(mensajeFinal2);


}
 


//3.Crear evento
wally.addEventListener('click',mensajeAcierto);





/*
//variabble



//STRING
//INMUTABLE ->capacidad de cambiar el valor interno de una variable sin reasignarla


//string
var userName = "mike";
var userName = "wasowski";


var message = "My name is mike wasaoski";


//PROPIEDADES
message.length


//METODOS
message = message.replace("mike", "Albert");
console.log(message);

//NUMBER

var numerAmigos = 267*"pepe";
console.log(numerAmigos)
    

//BOOLEAN
var isJavascriptTheTRueHapiness = true;

console.log(!isJavascriptTheTRueHapiness);

if(isJavascriptTheTRueHapiness) {
    //
    console.log('estoy dentro')
}
*/