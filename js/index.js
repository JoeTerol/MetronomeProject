// VARIABLES

let playNow = false;
let PPM = 50; 
let interval = undefined;
const textPlaying = 'Empezar'
const textStoped = 'Pausar';
const titlePPM =  document.querySelector('#ppm');
const buttonDecrease5PPM = document.querySelector('#button-decrease-5-ppm')
const buttonDecrease1PPM = document.querySelector('#button-decrease-1-ppm')
const buttonCrease5PPM = document.querySelector('#buttton-crease-5-ppm')
const buttonCrease1PPM = document.querySelector('#buttton-crease-1-ppm')
const buttonPlay = document.querySelector('#button-play')
const audioMetronome = document.querySelector('#audio-metronome')

// FUNCTIONS

function renderchanges(ppm, isplay){
    titlePPM.textContent = ppm;
    buttonPlay.textContent = playNow ? textStoped : textPlaying;
    
    return true;
}


function playorpause(ppm, audio, isplay , actualInterval){
    let miIntervalo ;
    clearInterval(actualInterval);
    if(isplay){
        miIntervalo = setInterval(function() {
            audio.play();

            

        }); PPMtoMilisecond(ppm)
 
    }
    return miIntervalo
}

function PPMtoMilisecond(ppm){
    return (60 / ppm) * 1000;
}

function decreasePPM(actualPPM, quantity){
const result = actualPPM - quantity;
return result < 0 ? 0 : result; 
}
 function creasePPM(actualPPM, quantity=1) {
    return actualPPM + quantity;

 }

 function eventplay(event){
  playNow = !playNow;
  interval = playorpause(PPM, audioMetronome, playNow, interval)
  renderchanges(PPM, playNow);
 }
 function eventdecrease5PPM(event) {
    PPM = decreasePPM(PPM, 5);
    interval = playorpause(PPM, audioMetronome, playNow, interval);
    renderchanges(PPM, playNow);

}

 function eventdecrease1PPM(event){
    PPM = decreasePPM(PPM);
    interval = playorpause(PPM, audioMetronome, playNow, interval);
    renderchanges(PPM, playNow);
 }
function eventcrease1PPM(event) {
    PPM = decreasePPM(PPM);
    interval = playorpause(PPM, audioMetronome, playNow, interval);
    renderchanges(PPM, playNow);

}
function eventcrease5PPM(event) {
    PPM = decreasePPM(PPM, 5 );
    interval = playorpause(PPM, audioMetronome, playNow, interval);
    renderchanges(PPM, playNow);

}
// EVENTS
 buttonDecrease5PPM.addEventListener("click", eventdecrease5PPM);
 buttonDecrease1PPM.addEventListener("click", eventdecrease1PPM);
 buttonCrease5PPM.addEventListener("click", eventdecrease5PPM );
 buttonDecrease1PPM.addEventListener("click", eventdecrease1PPM);


//  Start


renderchanges(PPM,playNow);




