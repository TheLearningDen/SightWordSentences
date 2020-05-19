// jshint esversion: 6

// variables
var sightWords = ['dog', 'car', 'fish', 'ball', 'cat', 'plane', 'books'];
var currentWordIndex = sightWords.length - 1;

// set initial sight word
document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

// prevents highlighting of sight word if user clicks quickly (double-clicks)
document.querySelector('.sightWord').addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);

// on each click of sight word, display new word
document.querySelector('.sightWord').addEventListener('click', function () {
  currentWordIndex++;

  if (currentWordIndex >= sightWords.length) {
    currentWordIndex = 0;
  }

  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;
});
