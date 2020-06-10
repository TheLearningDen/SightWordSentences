// jshint esversion: 6

// variables
var sightWords = ['dog', 'car', 'fish', 'ball', 'cat', 'plane', 'books'];
var currentWordIndex = sightWords.length - 1;

// set initial sight word
document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

// on each click of prev, display previous word
document.querySelector('#prev').addEventListener('click', function () {

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
});

// on each click of next, display next word
document.querySelector('#next').addEventListener('click', function () {

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
});

// on each click of sight word, repeat word audio
document.querySelector('.sightWord').addEventListener('click', function () {
  playSound(sightWords[currentWordIndex]);
});

function playSound(word) {
  let audio = new Audio(`audio/${word}.mp3`);
  audio.play();
}
