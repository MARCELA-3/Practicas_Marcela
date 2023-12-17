//CAPTURO OBJETO DOM
const btn1 = document.querySelector('.btn1');
const capturedObj = document.querySelector('div');
const imgCapt = document.querySelector('[alt="foto random"]');
const inputText = document.querySelector('input');
console.log(imgCapt);


//DEFINO FUNCIONES
function divChanger(obj){

    obj.classList.add('padd-40');
    obj.classList.add('bg-red');
    obj.classList.add('border-2');

}

//LANZO EVENTO Y DENTRO INVOCO LA FUNCION
btn1.addEventListener('click', function(){
    divChanger(capturado);

    console.log(inputText.getAttribute('value'));
    console.log(inputText.value);
})
