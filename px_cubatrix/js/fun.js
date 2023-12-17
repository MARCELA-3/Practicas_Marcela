//Condicional

/*FALSY VALUES*/
//false
//0
//-0
//""
//''
//undefined
//null
//NaN
 
/*
const aficiones = ["deporte", "cervezas", "cantar"];

if( userName ){
    //fragmento true
    console.log("Estoy dentro, el condicional evalua a true");

}
 else{
    //frangmento false
    console.log("evaluo en false");
}
*/


/*
//CAPTURAR ELEMENTOS DEL DOM
const numberOfCubatas = document.querySelector('input');
const btnCalcular = document.querySelector ('button');
const resultSlot = document.querySelector ('.resultado');

btnCalcular.addEventListener ('click', function(){
  
    //TERCERA FORMA
    /*
    numberOfCubatas.value == 0
     ? resultSlot.innerHTML ="presona sana"
     : resultSlot.innerHTML = "depurate!";
    })
    */


    //SEGUNDA FORMA
    /*
    switch (numberOfCubatas.value) {
        case "0":
            resultSlot.innerHTML="Estas hecho pincel";
            break;

        case "1":
            resultSlot.innerHTML = "Alpargata's mouth";
            break;

        default:
            resultSlot.innerHTML = "DEJA DE CARTIGARTE AMIGUI";
    
    }

    })
    */
  
    /*

    // PRIMERA  FORMA
    
    if (numberOfCubatas.value == 0) {
        
        resultSlot.innerHTML = "<p>llegas hecho un pincel, amigo></p>";
    }

    else if (numberOfCubatas.value > 0 && numberOfCubatas.value < 4) {

        resultSlot.innerHTML = "Boca de alpargata";
    } 

    else if(numberOfCubatas.value >= 4 && numberOfCubatas.value < 10) {

        resultSlot.innerHTML = "Mutas a albondiga (Masa infrome de carne)";
    }

    else if {
        resultSlot.innerHTML = "C. de Julia Mediavilla, 27 625 18 24 71";
    }

}) */





const edad = 25+ NaN;
console.log(edad)


/*OPERADORES*/

//Aritmeticos
//+
//-
//*
// /
// %
// **
// ++
// --


//ASIGNACION
// = 
// +=
// -=
// *=
// /=
// %=
// **=



//OPERADORES LOGICOS
const miAmorPorJS = 2/0

const botella = {

                forma: "larga y estrecha",
                color: "verde como el amor de un elfo",
                isTapon: true,
                capacidad: undefined,
                desperfectos: 0,
                edad: 3
            }



if (botella.edad === "3" ) {

    //TRUE
    console.log(" Es la botella de Alessandra")
}
else {

    //FALSE
    console.log ("no es mi botella");
}





/*OPERADORES LOGISCOS*/
// >
// <
// >=
// <=
// !      inversion de booleano / negacion
// !!     convierte en booleano
// &&     and
// ||     or
// ==     igual a 
// !=     No igual a 
// ===    igual tipo y dato
// !==    distinto tipo o dato

