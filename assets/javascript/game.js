//Array for char a-z

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
 "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//vars for scoreboard

 var guesses = 9;
 var wins = 0;
 var losses = 0;
 var lettersGuessed = [];

//Assigns a random letter for computer 
var computerGuess = letters[Math.floor(Math.random()*letters.length)];
//when user wins or loses a rest is applied
var reset = function () {

	guesses = 9;
	lettersGuessed = [];
	computerGuess = letters[Math.floor(Math.random()*letters.length)];

}

document.onkeyup = function () {
//Picks up on any user char a-z and also lower cases pick
	var myGuess = String.fromCharCode(event.keyCode).toLowerCase();

	lettersGuessed.push(myGuess);
 	

//logic for game

	if (guesses > 0){
		guesses--;


		if (computerGuess === myGuess) {
			wins++;
			var winsText = document.getElementById('wins')
			winsText.textContent = "Wins: " + wins
			reset();
		}
		else if (guesses == 0){
			losses++;
			var lossesText = document.getElementById('losses')
			lossesText.textContent = "Losses: " + losses
			reset();
		}

	}

	var guessesText = document.getElementById('guesses')
	guessesText.textContent = 'Guesses left:  ' + guesses



	var lettersUsed = document.getElementById('letters')
	lettersUsed.textContent = ' Guessed letters so far ' + lettersGuessed + ",  "
	console.log(computerGuess);
};	


