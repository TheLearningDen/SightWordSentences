// jshint esversion: 6

/* Copyright (c) 2020 The Learning Den */

/*************************** Variables ***************************/
var sightWords = ['dog', 'car', 'fish', 'ball', 'cat', 'plane', 'books'];
var currentWordIndex = sightWords.length - 1;

/********************* Set Initial Page State ********************/
document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

setTimeout(function () {
  playSound('iLikeMy');
}, 300);

setTimeout(function () {
  playSound(sightWords[currentWordIndex]);
}, 1850);

/************************ Event Listeners ************************/

// on each click of prev, display previous word
document.querySelector('#prev').addEventListener('click', function () {
  prevWord();
});

// on each click of next, display next word
document.querySelector('#next').addEventListener('click', function () {
  nextWord();
});

// on each click of sight word, repeat word audio
document.querySelector('.sightWord').addEventListener('click', function () {
  playSound(sightWords[currentWordIndex]);
});

// various keydown events
document.addEventListener('keydown', function (event) {
  // same as down arrow click
  if (event.key === 'ArrowDown') {
    nextWord();
  }

  // same as up arrow click
  if (event.key === 'ArrowUp') {
    prevWord();
  }

  // same as color name click
  if (event.key === 'Enter' || event.key === ' ') {
    playSound(sightWords[currentWordIndex]);
  }
});

// prevents highlighting of sight word if user clicks quickly (double-clicks)
document.querySelector('.sightWord').addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);

/*************************** Functions ***************************/

// called when down arrow is clicked or down arrow button is pressed
function nextWord() {

  // increment current word index
  currentWordIndex++;

  // if index has gone out of scope, reset to first index
  if (currentWordIndex >= sightWords.length) {
    currentWordIndex = 0;
  }

  // display new sight word on screen
  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

  // read full sentence; "I like my...[NEW WORD]"
  setTimeout(function () {
    playSound('iLikeMy');
  }, 250);

  setTimeout(function () {
    playSound(sightWords[currentWordIndex]);
  }, 1800);
}

// called when up arrow is clicked or up arrow button is pressed
function prevWord() {

  // decrement current word index
  currentWordIndex--;

  // if index has gone out of scope, reset to last index
  if (currentWordIndex < 0) {
    currentWordIndex = sightWords.length - 1;
  }

  // display new sight word on screen
  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

  // read full sentence; "I like my...[NEW WORD]"
  setTimeout(function () {
    playSound('iLikeMy');
  }, 250);

  setTimeout(function () {
    playSound(sightWords[currentWordIndex]);
  }, 1800);
}

function playSound(word) {
  let audio = new Audio(`audio/${word}.mp3`);
  audio.play();
}
