
    //1.Capturo el selector foto
    //2.Defino array
    //3.Event listener -> click
        //Extraigo value o id de cada etiqueta option
            //cambio url de la foto en base al array cuya posicion es el value


const photosUrls = {
    neo: "neo.jpg",
    trinity: "trinity.jpeg",
    morpheo: "morpheo.webp",
}    




const selectorPhotos = document.querySelector('.matrix');
const fotoSlot = document.querySelector('.fotoSlot');
selectorPhotos.addEventListener('input', function() {
     fotoSlot.style.backgroundImage = `url("img/${selectorPhotos.value}")`;
});


