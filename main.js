// Contains the logic of your app. Running it in Terminal/Bash will
// start the game.

// GLOBAL VARIABLES:

// Array of Robert De Niro movie titles.
var wordOptions		 	= [
	'GOODFELLAS',
	'HEAT',
	'CASINO',
	'SLEEPERS',
	'RONIN',
	];
var selectedWord 		= "";
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