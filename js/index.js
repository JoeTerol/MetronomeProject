// VARIABLES

let playNow = false;
let BPM = 50; 
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


function playorpause(ppm, audio, isplay, actualInterval) {
    let miIntervalo;
    clearInterval(actualInterval);
    if (isplay) {
      miIntervalo = setInterval(function() {
        audio.currentTime = 0;
        audio.play();
      }, PPMtoMilisecond(ppm));
    }
    return miIntervalo;
  }

function PPMtoMilisecond(ppm){
    return (60 / ppm) * 1000;
}

function decreasePPM(actualPPM, quantity=1){
const result = actualPPM - quantity;
return result < 0 ? 0 : result; 
}
 function creasePPM(actualPPM, quantity=1) {
    return actualPPM + quantity;

 }
 function eventplay(event) {
    playNow = !playNow;
    if (playNow) {
      interval = playorpause(BPM, audioMetronome, true, interval);
    } else {
      clearInterval(interval);
    }
    renderchanges(BPM, playNow);
  }
  
  buttonPlay.addEventListener("click", eventplay);
  
 function eventdecrease5PPM(event) {
    BPM = decreasePPM(BPM, 5);
    interval = playorpause(BPM, audioMetronome, playNow, interval);
    renderchanges(BPM, playNow);

}

 function eventdecrease1PPM(event){
    BPM = decreasePPM(BPM);
    interval = playorpause(BPM, audioMetronome, playNow, interval);
    renderchanges(BPM, playNow);
 }
function eventcrease1PPM(event) {
    BPM = creasePPM(BPM);
    interval = playorpause(BPM, audioMetronome, playNow, interval);
    renderchanges(BPM, playNow);

}
function eventcrease5PPM(event) {
    BPM = creasePPM(BPM, 5 );
    interval = playorpause(BPM, audioMetronome, playNow, interval);
    renderchanges(BPM, playNow);

}
// EVENTS
 buttonDecrease5PPM.addEventListener("click", eventdecrease5PPM);
 buttonDecrease1PPM.addEventListener("click", eventdecrease1PPM);
 buttonCrease5PPM.addEventListener("click", eventcrease5PPM );
 buttonCrease1PPM.addEventListener("click", eventcrease1PPM);


//  Start


renderchanges(BPM,playNow);




