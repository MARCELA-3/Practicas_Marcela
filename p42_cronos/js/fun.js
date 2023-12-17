/*
// CONSTANTES (propiedades)
    Math.E //Número de euler
    Math.PI //Número PI
    Math.SQRT2 //Raiz cuadrada de 2
    Math.LN2 //Logaritmo natural de 2 - e elevado a 2 = Math.LN2
    Math.LN10 //Logaritmo natural de 10 - e elevado a 10 = Math.LN10
    Math.LOG2E //Logaritmo de la constante de Euler - 2 elevado a e = Math.LOG2E
    Math.LOG10E //Logaritmo de la constante de Euler - 2 elevado a e = Math.LOG10E


// METODOS
    Math.round(4.7) // Redondeo matemático
    Math.floor(4.7) // Redondeo hacia abajo y hacia -infinity
    Math.ceil(4.7) // Redondea hacia arriba y -infinity
    Math.trunc(4.66450698) // Suprime parte decimal
    Math.pow(8,2) // Math.pow(base, exponente)
    Math.sqrt(64) // Raíz cuadrada

    Math.random() // Crea un número decimal aleatorio entre 0 y 1

    const numeroEntre1y3 = Math.floor(Math.random()*3+1);

*/


/*

// CREO FECHA ACTUAL EN EL INSTANTE DE EJECUCIÓN DEL CÓDIGO

let fechadeHoy = new Date();

// AÑO DE FORMATO AAAA
fechadeHoy.getFullYear();

// MES EN FORMATO 0-11
fechadeHoy.getMonth()

// DÍA EN GORMATO 1-31
fechadeHoy.getDate();

// HOLAS EN FORMATO 24H
fechadeHoy.getHours();

// MINUTOS EN FORMATO 0-59
fechadeHoy.getMinutes();

// MILISEGUNDOS EN FORMATO 0-999
fechadeHoy.getMilliseconds();

// HORA COMPLETA ACTUAL EN MILISEGUNDOS
fechadeHoy.getTime();

// DÍA DE LA SEMANA FORMATO 1-7
fechadeHoy.getDay();

// TIMESTAMP FECHA Y HORA ACTUAL
Date.now();

// FECHA FAKE
const fakeDate = new Date("July 21, 1985 3:14:00")


console.log(fakeDate);
*/

/*
// DELAY
console.log('Antes del delay');
setTimeout(()=>{
    console.log('Me retaro 3s');
}, 3000)

console.log('Despues del delay');
*/

// LOOP TEMPORAL
const intervalo = setInterval(()=>{
        document.body.innerHTML += '<p>Elemento creado con un loop</p>'
        }, 1500)
setTimeout(()=>{
    console.log('pasaron 5s')
    clearInterval(intervalo);
}, 5000);



