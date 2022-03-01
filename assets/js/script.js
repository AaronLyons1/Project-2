// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let buttons = document.getElementsByClassName("btn");
let pcScore = document.getElementsByClassName("pc-score");
let playerImage = document.getElementById("ply-image");
let pcImage = document.getElementById("pc-image");
let playerScore = document.getElementsByClassName("ply-score");
let options = ["rock","paper","scissors"]
const pcChoice = document.getAttribute("data-choice")
const gamerChoice = document.getAttribute("data-choice")

/**
 * Eventlisteners here!
 */
for( let button of buttons){
    button.addEventListener("click", function (){
        let gamerChoice = this.getAttribute("data-choice");
        runGame(gamerChoice);
    } );
}

function runGame(gamerChoice){

    playerImage.src = `assets/images/${options[gamerChoice]}`;
    playerImage.alt = options[gamerChoice];

    let pcChoice = Math.floor(Math.random() * 3);

    pcImage.src = `assets/images/${options[gamerChoice]}`;
    pcImage.alt = options[gamerChoice];

    let result = checkWinner(options[pcChoice], options[gamerChoice]);

    updateScore(result);
}

function checkWinner(){
    let currentGame = `${pcChoice} against ${gamerChoice}`;

    //Check if the game is a tie
    if (pcScore === playerScore){
        alert(`${currentGame} is a Draw!`);
        return;
    }


    //rock
    if(gamerChoice === "rock"){
        if(pcChoice === "scissors")
        alert(`${currentGame} = You Have Won! Yay`);
    } else {
        alert(`${currentGame} = Dam, the Computer was just better`);
    }

    //paper
    if(gamerChoice === "paper"){
        if(pcChoice === "rock")
        alert(`${currentGame} = You Have Won! Yay`);
    } else {
        alert(`${currentGame} = Dam, the Computer was just better`);
    }

    //scissors
    if (gamerChoice === "scissors"){
        if(pcChoice === "paper")
        alert(`${currentGame} = You Have Won! Yay`);
    } else {
        alert(`${currentGame} = Dam, the Computer was just better`);
    }
}

function updateScore(){
    if (alert === "`${currentGame} = Dam, the Computer was just better`"){
        ++pcScore;
    }else {
        ++playerScore;
    }
}