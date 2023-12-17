//1.Captura de elementos

const startBtn = document.querySelector('.no-me-fio__start')
const subItems = document.querySelectorAll('.no-me-fio__item');


//2.Generación de evento sobre la varible capturada

startBtn.addEventListener('click', moveItems)

//3.Declaro función que va a suceder cuando haga click en el botón

function moveItems(){
    
    subItems.forEach(item =>{
        item.classList.toggle('play');
    
    })
}