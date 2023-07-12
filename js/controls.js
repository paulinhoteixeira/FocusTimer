export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutes,
  updateDisplay
  
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonStop.classList.remove("hide");
    buttonSet.classList.add("hide");
  }

  function pause() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

 
  function reset() {
    buttonPlay.classList.remove("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
    buttonPause.classList.add("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      
      return false;
    }
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  };
}
