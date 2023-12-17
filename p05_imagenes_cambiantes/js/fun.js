//1. Capturar elementos
const btnFlechas = document.querySelector('.btnFlechas');
const fotoVoldemort = document.querySelector('#voldemort');

//2. Crear eventos de usuario
btnFlechas.addEventListener('click', cambiarFoto);

//3. Crear función que sucederá al ejecuta el evento
let imageCounter = 1;
function cambiarFoto() {
    imageCounter= imageCounter+1;
    
    if(imageCounter==4){
        imageCounter=1
    }
    
    
    fotoVoldemort.src="img_voldemort/" + imageCounter + ".jpg";
}