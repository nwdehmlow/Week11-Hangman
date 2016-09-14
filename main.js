// Contains the logic of your app. Running it in Terminal/Bash will
// start the game.

// Require word.js:
var inquirer 	= require('inquirer');
var word 		= require('./word.js');

// GLOBAL VARIABLES:

var lettersInWord 		= [];
var numBlanks 			= 0;
var blanksAndSuccesses 	= [];
var wrongLetters		= [];

// Game Counters:
var winCount			= 0;
var lossCount			= 0;
var guessesLeft			= 0;

// MAIN PROCESS

startGame();

// Captures Key Clicks
document.onkeyup = function(event) {

	// Determines which exact key was selected. Makes it CAPS.
	// FIX THIS TO ONLY ACCEPT ALPHANUMERIC KEYS. Right now, arrow 
	// keys, etc. are being logged as entries.
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	checkLetters(userGuess);
	roundComplete();

	// Show the letter guessed:
	console.log('You guessed ' + userGuess);

}