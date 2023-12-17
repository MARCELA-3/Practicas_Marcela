// Capturamos el contener de los botones
const buttons = document.querySelector('.buttons');



//Creo event listener sobre el contenedor de botones
buttons.addEventListener('click', function(e){
    const domItem = document.querySelector('.dom-item');

    console.log(e.target);

    clickOnelements(domItem, e.target.value);
});

function clickOnelements(domElement, action){

    if (action == "delete"){
        domElement.remove();
    }
    else if(action === "copy"){
        document.body.appendChild(domElement.cloneNode(true));
    }
    else if(action === "insert"){
        domElement.innerHTML = "texto generado por JS";
    }
}