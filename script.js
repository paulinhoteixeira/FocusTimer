const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

let timerTimeOut
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent)

function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
  buttonPause.classList.add("hide");
  updateDisplayTimer(minutes, 0)
}

function updateDisplayTimer(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");

}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateDisplayTimer(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 3;
      --minutes
      
    }

    updateDisplayTimer(minutes, String(seconds - 1));

    countDown();
  }, 1000);
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonStop.classList.remove("hide");
  buttonSet.classList.add("hide");

  countDown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  clearTimeout(timerTimeOut)

});

buttonStop.addEventListener("click", function(){
  resetControls()
  clearTimeout(timerTimeOut)
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOff.classList.remove("hide");
  buttonSoundOn.classList.add("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSet.addEventListener("click", function () {
  newMinutes = prompt("Quantos minutos?");
  if(!newMinutes){
    resetControls()
    return
  }
  minutes = newMinutes
  updateDisplayTimer(minutes, 0)
});
