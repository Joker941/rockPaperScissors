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


// Fonctions créées pour l'UI

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

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    let resultat;

    if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            resultat = "CW";
        } else if (computerSelection == "scissors") {
            resultat = "CL";
        } else {
            resultat = "Draw";
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "scissors") {
            resultat = "CW";
        } else if (computerSelection == "rock") {
            resultat = "CL";
        } else {
            resultat = "Draw";
        }

    } else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            resultat = "CW";
        } else if (computerSelection == "paper") {
            resultat = "CL";
        } else {
            resultat = "Draw";
        }
    }

    return resultat;
}

let computerPoints = 0, userPoints = 0;

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

const buttonRefresh = document.querySelector(".rechargement");

buttonRefresh.addEventListener("click", function () {
    location.reload();
})
buttonRock.addEventListener("click", function () {
    
    if (computerPoints === 5 || userPoints === 5) {

        alert("The game is over. Refresh the page to play another game.");
    } else {

        let computerChoice = getComputerChoice();

        let result = playRound("rock", computerChoice);

        if (result == "CW") {

            computerPoints ++;

            document.querySelector("#js_score > p").textContent = computerPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Rock and Javascript played Paper. You loose this one !";

            if (computerPoints === 5 ) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Too bad ! Javascript won this match ! Better luck next time...";
                document.querySelector("#recapRound").appendChild(messageEndGame);

            }
        } else if (result == "CL") {

            userPoints ++;

            document.querySelector("#user_score > p").textContent = userPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Rock and Javascript played Scissors. You won this one !";

            if (userPoints === 5) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Congratulations, you won ! Can you do it again ?";
                document.querySelector("#recapRound").appendChild(messageEndGame);
            }
        } else {

            document.querySelector("#recapRound > p").textContent = "You've played Rock and Javascript played Rock too. It's a draw !";
        }

    }

})

buttonPaper.addEventListener("click", function () {
    
    if (computerPoints === 5 || userPoints === 5) {

        alert("The game is over. Refresh the page to play another game.");
    } else {

        let computerChoice = getComputerChoice();

        let result = playRound("paper", computerChoice);

        if (result == "CW") {

            computerPoints ++;

            document.querySelector("#js_score > p").textContent = computerPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Paper and Javascript played Scissors. You loose this one !";

            if (computerPoints === 5 ) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Too bad ! Javascript won this match ! Better luck next time...";
                document.querySelector("#recapRound").appendChild(messageEndGame);

            }

        } else if (result == "CL") {

            userPoints ++;

            document.querySelector("#user_score > p").textContent = userPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Paper and Javascript played Rock. You won this one !";

            if (userPoints === 5) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Congratulations, you won ! Can you do it again ?";
                document.querySelector("#recapRound").appendChild(messageEndGame);
            }

        } else {

            document.querySelector("#recapRound > p").textContent = "You've played Paper and Javascript played Paper too. It's a draw !";

        }

    }

})

buttonScissors.addEventListener("click", function () {
   
    if (computerPoints === 5 || userPoints === 5) {

        alert("The game is over. Refresh the page to play another game.");
    } else {

        let computerChoice = getComputerChoice();

        let result = playRound("scissors", computerChoice);

        if (result == "CW") {

            computerPoints ++;

            document.querySelector("#js_score > p").textContent = computerPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Scissors and Javascript played Rock. You loose this one !";

            if (computerPoints === 5 ) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Too bad ! Javascript won this match ! Better luck next time...";
                document.querySelector("#recapRound").appendChild(messageEndGame);

            }

        } else if (result == "CL") {

            userPoints ++;

            document.querySelector("#user_score > p").textContent = userPoints;

            document.querySelector("#recapRound > p").textContent = "You've played Scissors and Javascript played Paper. You won this one !";

            if (userPoints === 5) {

                let messageEndGame = document.createElement("p");
                messageEndGame.textContent = "Congratulations, you won ! Can you do it again ?";
                document.querySelector("#recapRound").appendChild(messageEndGame);

            }

        } else {

            document.querySelector("#recapRound > p").textContent = "You've played Scissors and Javascript played Scissors too. It's a draw !";

        }

    }
})
