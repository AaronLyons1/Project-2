// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let buttons = document.getElementsByClassName("btn");
let pcScore = document.getElementsByClassName("pc-score");
let playerImage = document.getElementById("ply-image");
let pcImage = document.getElementById("pc-image");
let playerScore = document.getElementsByClassName("ply-score");
let options = ["rock", "paper", "scissors"];
const pcChoice = null;

/**
 * Eventlisteners here!
 */

for (let button of buttons) {
	button.addEventListener("click", function() {
		let gamerChoice = this.getAttribute("data-choice");
		runGame(gamerChoice);
	});
}

function runGame(gamerChoice) {


	let pcChoice = Math.floor(Math.random() * 3);

	let result = checkWinner(options[pcChoice], gamerChoice);

	updateScore(result);
}

function checkWinner(pcChoice, gamerChoice) {
	let currentGame = `${pcChoice} against ${gamerChoice}`;

	//Check if the game is a tie
	if (gamerChoice === pcChoice) {
		alert(`${currentGame} is a Draw!`);
		return;
	}



	//rock
	else if (gamerChoice === "rock") {
		if (pcChoice === "scissors")
			alert(`${currentGame} = You Have Won! Yay`);
		else
			alert(`${currentGame} = Dam, the Computer was just better`);
	}


	//paper
	else if (gamerChoice === "paper") {
		if (pcChoice === "rock")
			alert(`${currentGame} = You Have Won! Yay`);
		else
			alert(`${currentGame} = Dam, the Computer was just better`);
	}


	//scissors
	if (gamerChoice === "scissors") {
		if (pcChoice === "paper")
			alert(`${currentGame} = You Have Won! Yay`);
		else
			alert(`${currentGame} = Dam, the Computer was just better`);
	}
}

function updateScore() {
	if (alert === "`${currentGame} = Dam, the Computer was just better`") {
		++pcScore;
	} else {
		++playerScore;
	}
}