var numberrOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberrOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimations(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimations(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("audios/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("audios/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("audios/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("audios/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("audios/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("audios/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("audios/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimations(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  },100);
}

