// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let text = document.getElementById("text");
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
	button.addEventListener("click", function () {
		let gamerChoice = this.getAttribute("data-choice");
		runGame(gamerChoice);
	});
}

const handOptions = {
	"rock": "assets/images/rock.png",
	"scissors": "assets/images/snip.png",
	"paper": "assets/images/paper.png"
};

const pickUserHand = (hands) => {
	console.log(hands);
	let hand = document.getElementById("game");
	hand.style.display = "none";

	let contest = document.querySelector(".results");
	contest.style.display = "flex";

	document.getElementById("ply-image").src = handOptions[hands];
};

document.getElementsByClassName("newRound").onclick = runGame

function runGame(gamerChoice) {

	// playerImage.src = `assets/images/${options[gamerChoice]}.png`;
	// playerImage.alt =  options[gamerChoice];

	let pcChoice = Math.floor(Math.random() * 3);

	pcImage.src = `assets/images/${options[pcChoice]}.png`;
	pcImage.alt = options[pcChoice];

	let result = checkWinner(options[pcChoice], gamerChoice);



	updateScore(result);
}


function checkWinner(pcChoice, gamerChoice) {
	let currentGame = `${gamerChoice} against ${pcChoice}`;

	//Check if the game is a tie
	if (gamerChoice === pcChoice) {
		text.innerHTML = `${currentGame} It's a Draw!`
		return;
	}
	//rock
	else if (pcChoice === "rock") {
		if (gamerChoice === "paper")
			text.innerHTML = `${currentGame} You Have Won! Yay`
		else
			text.innerHTML = `${currentGame} Dam, the Computer was just better`
	}
	//paper
	else if (pcChoice === "paper") {
		if (gamerChoice === "scissors")
		text.innerHTML = `${currentGame} You Have Won! Yay`
		else
			text.innerHTML = `${currentGame} Dam, the Computer was just better`
	}
	//scissors
	if (pcChoice === "scissors") {
		if (gamerChoice === "rock")
		text.innerHTML = `${currentGame} You Have Won! Yay`
		else
		text.innerHTML = `${currentGame} Dam, the Computer was just better`
	}

}

function updateScore() {


	if (alert === "`${currentGame} = Dam, the Computer was just better`") {
		pcScore++;
	} else {
		playerScore++;
	}
}