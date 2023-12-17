const personajes = {

p0: {
    name: 'goku',
    force: '1'
},
p1: {
    name: 'vejeta',
    force: '2'
}, 
p2: {
    name: 'picollo',
    force: '3'
} ,
};

//CAPTURAMOS ELEMENTOS NECESARIOS
const btnFight = document.querySelector('.btn-fight');
const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');

btnFight.addEventListener('click', fight);

function fight(){



    //LEFT
    const keyLeft = Math.floor(Math.random()*3); // Genero numero aleatorio de 0 a 2
    const urlPhotoLeft = 'img/'+ personajes['p'+keyLeft].name + '.webp'; //Creo url
    const photoLeft = document.createElement('img'); //Creo una imagen
    photoLeft.src = urlPhotoLeft; //Asigno url a la imagen
    photoContainerLeft.innerHTML =""; //vaciode div
    photoContainerLeft.appendChild(photoLeft); // Añado imagen al dom

    const forceLeft = personajes['p' +keyLeft].force;
    
    

    //RIGHT
    const keyRight = Math.floor(Math.random()*3); // Genero numero aleatorio de 0 a 2
    const urlPhotoRight = 'img/'+ personajes ['p' +keyRight].name +'.webp'; //Creo url
    const photoRight = document.createElement('img'); // Creo una imagen
    photoRight.src = urlPhotoRight; // Asigno url a la imagen
    photoContainerRight.innerHTML = ""; //Vaciado de div
    photoContainerRight.appendChild(photoRight); //Añado imagen al dom
 


    const forceRight = personajes['p' +keyRight].force;

}

showWinner(forceLeft, forceRight);


/*
*Funcion que muestra el ganador del juego 
*/

function showWinner(forceLeft, forceRight){
    photoContainerLeft.paretNode.classList.remove('winner', 'draw');
    photoContainerRight.paretNode.classList.remove('winner', 'draw');


    if(forceLeft > forceRight) {
        //Delay a 
        
        setTimeout(() =>{
        photoContainerLeft.pretNodeclassList.add('winner');
        }, 0);
    }
    else if (forceRight > forceLeft){
        //Delay a 

        setTimeout(() => {
        photoContainerRight.paretNodeclassList.add('winner');
    }, 0);
}

    else {
        //Delay a 
       
        setTimeout(() =>{
        photoContainerLeft.parentNode.classList.add('draw');
        photoContainerRight.perentNode.classList.add('draw');
        }, 0);
    }

}

