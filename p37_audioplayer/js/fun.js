const audiotrack = new Audio('audio/bamboleo.mp3');
const controls = document.querySelector('.player__buttons');
console.log(controls);

function audioEngine(e) {
   if(e.target.dataset.value === "stop") stopEngine();
   if(e.target.dataset.value === "play") playEngine();

}

function playEngine (){
    
}

function stopEngine (){

}


constrols.addEventListener ('click', audioEngine);



