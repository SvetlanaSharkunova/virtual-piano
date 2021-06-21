const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const audio = document.querySelector(".audio");

const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll(".btn");

const notesBtn = document.querySelector(".btn-notes");
const lettersBtn = document.querySelector(".btn-letters");



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