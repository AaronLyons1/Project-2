// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let button = document.getElementsByClassName("btn")
let pcScore = getElementsByClassName("pc-score")
let playerScore = getElementsByClassName("ply-score")
let choices = ["paper","rock","scissors"]

/**
 * Eventlisteners here!
 */
for( let button of buttons){
    button.addEventListener("click", function (){
        let gamerChoice = this.getAttribute("data-choice");
        runGame(gamerChoice);
    } );
}

