// play audio on key press
function playKeyAudio(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const instrument = document.querySelector(
    `.instrument[data-key="${event.keyCode}"]`
  );
  // check if audio exists for key pressed
  if (!audio) {
    return;
  }
  audio.play();
  // reset the audio to play from beginning
  audio.currentTime = 0;
  // add the animation style to indicate active press
  instrument.classList.add("play");
}

const instruments = document.querySelectorAll(".instrument");

// play audio on mouse-click
// add click event listener to every instrument
for (let i = 0; i < instruments.length; i++) {
  instruments[i].addEventListener("click", function () {
    // store the appropriate class name in a variable to pass into the function
    let instrumentName = this.classList[1];
    playClickAudio(instrumentName);
    // add the animation style to indicate active click
    this.classList.add("play");
  });
}

function playClickAudio(instrument) {
  // play respective audio based on class name
  switch (instrument) {
    case "crash-cymbal":
      let crash = new Audio("sounds/crash-single-hit-a-key-02.wav");
      crash.play();
      break;

    case "small-tomtom":
      let tomtomSM = new Audio("sounds/low-tom-drum-single-hit-c-key-13.wav");
      tomtomSM.play();
      break;

    case "large-tomtom":
      let tomtomLG = new Audio("sounds/hi-tom-key-05.wav");
      tomtomLG.play();
      break;

    case "ride-cymbal":
      let ride = new Audio("sounds/ride-sample-b-key-07.wav");
      ride.play();
      break;

    case "hi-hat":
      let hiHat = new Audio("sounds/hi-hat-key-02.wav");
      hiHat.play();
      break;

    case "snare-drum":
      let snare = new Audio("sounds/snare-drum-sound-a-key-01.wav");
      snare.play();
      break;

    case "floor-tom":
      let floorTom = new Audio("sounds/floor-tom-key-13.wav");
      floorTom.play();
      break;

    case "bass-drum":
      let bass = new Audio("sounds/bass-drum-key-103.wav");
      bass.play();
      break;

    default:
      console.log(" ");
  }
}

// remove transition previously added
function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("play");
}

// Event Listeners
// when the transition ends (i.e after 0.07s)
instruments.forEach((x) =>
  x.addEventListener("transitionend", removeTransition)
);
// when key on keyboard is pressed
window.addEventListener("keydown", playKeyAudio);
