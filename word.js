// Constructor File.

// Contains all of the methods which will check the letters guessed
// versus the random word selected.

// Check Letters:
function checkLetters(letter) {
	// Does the letter exist anywhere in the selectedWord?
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
			console.log('Letter Found.');
		}
	}

	// Check where in word letter appears, then populate
	// blanksAndSuccesses array.
	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	// Letter wasn't found:
	else {
		wrongLetters.push(letter);
		guessesLeft--
	}

	// Testing and debugging:
	console.log(blanksAndSuccesses);
}

// Check each time to see if round is finished:
function roundComplete() {
	console.log(
		"Win Count: " + winCount + 
		" | Loss Count: " + lossCount + 
		" | Guesses Left: " + guessesLeft);

	// Update HTML each round:
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if user won:
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		// Update win counter:
		winCount++;
		// Push win counter to HTML:
		document.getElementById("winCounter").innerHTML = winCount;
		// Congratulate player and offer new game:
		confirm("You Won! Would you like to play again?");

		// FIX THIS TO start new game ONLY if they click OK. 
		// Not if they click Cancel.
		startGame();
	}
	// Check if user lost:
	else if (guessesLeft == 0) {
		// Update loss counter:
		lossCount++;
		// Push loss counter to HTML:
		document.getElementById("lossCounter").innerHTML = lossCount;
		// Offer player a new game:
		confirm("Sorry, you've used up all your guesses. Would you like to start a new game?");
		// FIX THIS TO start new game ONLY if they click OK. Not if they click Cancel.
		startGame();
	}
}