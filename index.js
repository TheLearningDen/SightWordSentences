// jshint esversion: 6

// variables
var sightWords = ['dog', 'car', 'fish', 'ball', 'cat', 'plane', 'books'];
var currentWordIndex = sightWords.length - 1;

// set initial sight word
document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

// on each click of prev, display prev word
document.querySelector('#prev').addEventListener('click', function () {
  currentWordIndex--;

  if (currentWordIndex < 0) {
    currentWordIndex = sightWords.length - 1;
  }

  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;
});

// on each click of next, display next word
document.querySelector('#next').addEventListener('click', function () {
  currentWordIndex++;

  if (currentWordIndex >= sightWords.length) {
    currentWordIndex = 0;
  }

  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;
});
