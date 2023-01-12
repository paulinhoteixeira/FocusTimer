let buttonPlay = document.querySelector(".play")
let buttonPause =document.querySelector(".pause")


buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
})