// Should be a constructor File.

// Controls whether or not a letter appears as a "_" or as itself
// on-screen.

// 1) You can use letter.js to store a constructor function that 
// takes in a letter. The letter constructor can have a property 
// to check if the letter passed in is supposed to appear and a 
// method that, based on the property for the letter appearing, 
// shows the letter or shows an underscore.

// 2) The letter.js constructor can be used inside the word.js 
// file. The word.js constructor can have the following properties:

// word: equivalent to the word passed in.

// lets: array of letter objects

// found: boolean

// getLets: method to construct letter objects from the word 
// passed in and push the letter objects to the lets array.

// didWeFindTheWord: method that sets this.found in the word 
// object to true or false if all letter objects have a true 
// value in their appear property.

// checkIfLetterFound: method that checks to see if the letter 
// that was guessed matches the letter(s) in the word.

// wordRender: render the word as string from lets objects.

// NOTE: THIS IS PART OF THE GAME FUNCTION IN THE GAME FILE, SO
// I HAVEN'T SEPARATED IT OUT YET.

module.exports = Letter;