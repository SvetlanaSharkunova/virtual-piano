const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const audio = document.querySelector(".audio");

const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll(".btn");

const btnNotes = document.querySelector(".btn-notes");
const btnLetters = document.querySelector(".btn-letters");



/*========  btns Letters/Notes ========*/

btnContainer.addEventListener("click", function(e) {

  btns.forEach(function(btn) {
    if (btn.classList.contains("btn-active")) {
      btn.classList.remove("btn-active");
    }
  });
  e.target.classList.add("btn-active");

  if (e.target.classList.contains("btn-letters")) {
    pianoKeys.forEach(function(pianoKey) {
      pianoKey.classList.add("letter");
    });
  } else {
    pianoKeys.forEach(function(pianoKey) {
      pianoKey.classList.remove("letter");
    });
  }

});

/*======== audio function  ========*/ 

function playAudio(note) {
  const url = `assets/audio/${note}.mp3`;  
  audio.src = url;
  audio.currentTime = 0;
  audio.play();
}

/*========  pianoKeys + audio ========*/

piano.addEventListener("mousedown", function(e) {

  pianoKeys.forEach(function(pianoKey) {
    if (pianoKey.classList.contains("piano-key-active")) {
      pianoKey.classList.remove("piano-key-active");
    }
  });

  if (e.target.classList.contains("piano-key")) {
    e.target.classList.add("piano-key-active");
    const dataNote = e.target.dataset.note;    
    playAudio(dataNote);
  }
});


piano.addEventListener("mouseup", function(e){
  if (e.target.classList.contains("piano-key-active")) {
    e.target.classList.remove("piano-key-active");
  }
});
