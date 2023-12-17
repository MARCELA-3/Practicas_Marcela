
/* 
* DESCRIPTION OF 
*/
const cronoButtons = document.querySelector('.crono__buttons');
const cronoSeconds = document.querySelector('.crono__seconds');
const cronoMiliseconds = document.querySelector('.crono__miliseconds');
let  counterSeconds = 0;
let  counterCentiseconds = 0;
let  cronoInterval = "";
let  isRunning = false ;


/*
* THIS FUNCTION STOPS INTERVAL IN STARTCRONO
*
*
* */


function startCrono(){
    if(!isRunning) {
       cronoInterval = setInterval(()=> {
            counterCentiseconds++;

            if (counterCentiseconds===100){
                counterSeconds += 1;
                counterCentiseconds =0;
            }


            cronoSeconds.innerHTML = counterSeconds;
            cronoMiliseconds.innerHTML = counterCentiseconds;


        }, 10);
    }

    isRunning =true;
    }


    function stopCrono(){
        clearInterval(cronoInterval);
        isRunning = false;

        
    }

    function zeroCrono(){
        cronoSeconds = 0;
        counterCentiseconds = 0;
        showInHtml(0, 0)
        isRunning = false;
    }


    


// LLAMADAS A FUNCIÓN, EVENTOS, ETC

cronoButtons.addEventListener('click', function(e){
  
    e.target.value === "start" && startCrono ();
    e.target.value ==="stop" && stopCrono();
    e.target.value ==="stop" && zeroCrono();

})