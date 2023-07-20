function getComputerChoice() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let choixOrdinateur = getRandomInt(3);

    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    if (choixOrdinateur === 0) {
        return rock;
    } else if (choixOrdinateur === 1) {
        return paper;
    } else if (choixOrdinateur === 2) {
        return scissors;
    }
} 

let computerChoice = getComputerChoice();

