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

// function getUserSelection() {
//     let playerSelection = prompt("What do you want do play ? (Rock, paper or scissors)");
//     return playerSelection;
// }

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    let resultat;

    if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            resultat = 1;
        } else {
            resultat = 2;
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "scissors") {
            resultat = 3;
        } else {
            resultat = 4;
        }

    } else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            resultat = 5;
        } else {
            resultat = 6;
        }
    }

    return resultat;
}

function game() {

    // Création de variable pour compter les points, une pour l'ordi, une pour l'utilisateur
    //Boucle pour jouer 5 tours
    //Afficher score après chaque tour
    //Après 5 tours afficher le vainqueur

    let userScore = 0;
    let computerScore = 0;

    for(i = 1; i <= 5; i++) {

        let playerSelection = getUserSelection();
        let computerSelection = getComputerChoice();

        let resultatRound = playRound(playerSelection, computerSelection);

        if (resultatRound == 1) {

            computerScore++;
            console.log("You loose ! Paper beats rock.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");

        } else if (resultatRound == 2) {

            userScore++;
            console.log("You win ! Rock beats scissors.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");
            
        } else if (resultatRound == 3) {

            computerScore++;
            console.log("You loose ! Scissors beats paper.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");

        } else if (resultatRound == 4) {

            userScore++;
            console.log("You win ! Paper beats rock.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");

        }  else if (resultatRound == 5) {

            computerScore++;
            console.log("You loose ! Rock beats scissors.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");

        } else if (resultatRound == 6) {

            userScore++;
            console.log("You win ! Scissors beats paper.");
            console.log("The actual score is : computer " + computerScore + " points. You : " + userScore + " points.");
        }
    }

    if (computerScore > userScore) {
        console.log("The computer wins with " + computerScore + " and you have " + userScore + " points.");
    } else {
        console.log("You win ! You have " + userScore + " points, the computer has " + computerScore + "points.");
    }
}
// game();