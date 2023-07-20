function getComputerChoice() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let choixOrdinateur = getRandomInt(3);

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (choixOrdinateur === 0) {
        return rock;
    } else if (choixOrdinateur === 1) {
        return paper;
    } else if (choixOrdinateur === 2) {
        return scissors;
    }
} 

const computerChoice = getComputerChoice();

const playerSelection = prompt("What do you want do play ? (Rock, paper or scissors)");

//console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection);

    if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            console.log("You loose ! Paper beats rock.");
        } else {
            console.log("You win ! Rock beats scissors.");
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            console.log("You win ! Paper beats rock.");
        } else {
            console.log("You loose ! Scissors beats paper.");
        }

    } else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            console.log("You loose ! Rock beats scissors.");
        } else {
            console.log("You win ! Scissors beats paper.");
        }
    }
}

playRound(playerSelection, computerChoice);