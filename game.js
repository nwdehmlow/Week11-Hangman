// This file randomly selects a word for the player.

// Array of Robert De Niro movie titles.
var wordOptions		= [
	'GOODFELLAS',
	'HEAT',
	'CASINO',
	'SLEEPERS',
	'RONIN',
	];
var selectedWord 	= "";




// Start Game Function:
function startGame(){
	// Computer randomly chooses one of the movie titles from the array.
	selectedWord	= wordOptions[Math.floor(Math.random()*wordOptions.length)];
	// Break selectedWord apart into individual letters:
	lettersInWord	= selectedWord.split("");
	// Determine number of blanks for selectedWord:
	numBlanks		= lettersInWord.length;

	// Reset SOME of the variables for each successive game:
	guessesLeft			= 9;
	wrongLetters		= [];
	blanksAndSuccesses	= [];

	// Populate blanksAndSuccesses with correct number of blanks:
	for ( var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect game conditions:

	// Print blanks to HTML page:
	document.getElementById("wordToGuess").innerHTML	= blanksAndSuccesses.join("  ");
	// Print number of guesses left to HTML page:
	// document.getElementById("numGuesses").innerHTML		= guessesLeft;
	// Print winCount to HTML page:
	document.getElementById("winCounter").innerHTML		= winCount;
	// Print lossCount to HTML page:
	document.getElementById("lossCounter").innerHTML	= lossCount;

	// Testing / Debugging:
	console.log('Correct Answer: ' + selectedWord);
	console.log(lettersInWord);
	console.log('Number of Blanks: ' + numBlanks);
	console.log(blanksAndSuccesses);
}

