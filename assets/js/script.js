// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


let userScore = 0;
let computerScore = 0;
let text = document.getElementById("text");
let buttons = document.getElementsByClassName("btn");
let playerImage = document.getElementById("ply-image");
let pcImage = document.getElementById("pc-image");
let pcScore = document.getElementById("pc-score");
let playerScore = document.getElementById("ply-score");
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
	"scissors": "assets/images/scissors.png",
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

function runGame(gamerChoice) {

	let pcChoice = Math.floor(Math.random() * 3);

	pcImage.src = `assets/images/${options[pcChoice]}.png`;
	pcImage.alt = options[pcChoice];

	let result = checkWinner(options[pcChoice], gamerChoice);


}


function checkWinner(pcChoice, gamerChoice) {
	let currentGame = `${gamerChoice} against ${pcChoice}`;

	//Check if the game is a tie
	if (gamerChoice === pcChoice) {
		text.innerHTML = `${currentGame}. It's a Draw!`
		return;
	}
	//rock
	else if (pcChoice === "rock") {
		if (gamerChoice === "paper"){
			text.innerHTML = `${currentGame}. You Have Won! Yay`
			userScore++;
			playerScore.innerHTML = userScore;
		}
		else{
			text.innerHTML = `${currentGame}. Damn, the Computer was just better`
			computerScore++;
			pcScore.innerHTML = computerScore;
		}
	}
	//paper
	else if (pcChoice === "paper") {
		if (gamerChoice === "scissors"){
			text.innerHTML = `${currentGame}. You Have Won! Yay`
			userScore++;
			playerScore.innerHTML = userScore;
		}
		else{
			text.innerHTML = `${currentGame}. Damn, the Computer was just better`
			computerScore++;
			pcScore.innerHTML = computerScore;
		}
	}
	//scissors
	if (pcChoice === "scissors") {
		if (gamerChoice === "rock"){
			text.innerHTML = `${currentGame}. You Have Won! Yay`
			userScore++;
			playerScore.innerHTML = userScore;
		}
		else{
			text.innerHTML = `${currentGame}. Damn, the Computer was just better`
			computerScore++;
			pcScore.innerHTML = computerScore;
			}
	}

}

const restartGame = () => {
	let hand = document.getElementById("game");
	hand.style.display = "flex";

	let contest = document.querySelector(".results");
	contest.style.display = "none";
}