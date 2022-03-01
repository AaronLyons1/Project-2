// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let button = document.getElementsByClassName("btn")
let pcScore = document.getElementsByClassName("pc-score")
let playerImage = document.getElementById("ply-image")
let pcImage = document.getElementById("pc-image")
let playerScore = document.getElementsByClassName("ply-score")
let options = ["paper","rock","scissors"]

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

    let pcChoice = Math.floor(Math.random() * 3)

    pcImage.src = `assets/images/${options[gamerChoice]}`;
    pcImage.alt = options[gamerChoice];

    let result = checkWinner(options[pcChoice], options[playerChoice]);

    updateScore(result);
}

function checkWinner(){
    let currentGame = `${pcChoice} against ${playerChoice}`;

    if (pcScore === playerScore){
        alert(`${currentGame} is a Draw!`)
        return
    }
    
}