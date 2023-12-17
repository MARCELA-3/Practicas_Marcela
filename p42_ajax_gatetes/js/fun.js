const gateteContainer = document.querySelector('.grid-gatetes');

// Funcion para enviar gato 3
function sendGatetetThree(gateteObject){
    return fetch('backend/jsonReceive.php',{
        method: 'POST',
        body: JSON.stringify(gateteObject)
    })
    .then(response => response.json())
    .then(data=>{
        const jsonRecibido = JSON.parse(data)
        document.body.innerHTML += jsonRecibido.url
    })
}

// Funcion para crear todos los gatos

function createGatetes(gatetesObj){
    
    gatetesObj.forEach(gateteItem =>{
        const gatete = document.createElement('img');
        gatete.src = gateteItem.url;
        gateteContainer.appendChild(gatete);
});
 

    sendGatetetThree(gatetesObj[2]) // Llamo a función para enviar gato 3
 }       


// Obtenemos gatos de forma asincrona
fetch('https://api.thecatapi.com/v1/images/search? api_key=live_GAOC4QKn8lDfVY7AFubgvzsUrscIsxRYXitfWmWzdRWBzoWY2VbJ4ynPrsf2jjHu&limit=20')

    // Espero a que el recurso este disponible y entonces...
    .then( response => response.json())
    .then( data => createGatetes(data))

 