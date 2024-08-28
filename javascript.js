function getComputerChoice() {
    // Generate a random number between 0 and 2
    let choice = Math.floor(Math.random() * 3);

    // Depending on the generated number return one of the string values
    if (choice == 2) {
        return "rock";

    } else if (choice == 1) {
        return "paper";

    } else {
        return "scissors";
    } 
}

function getHumanChoice() {
    // Takes the users choice and returns it
    let humanChoice = prompt("Type either Rock, Paper, or Scissors:").toLowerCase();
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore = humanScore + 1;

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore = humanScore + 1;

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore = humanScore + 1;

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore = computerScore + 1;

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore = computerScore + 1;

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore = computerScore + 1;
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);


//console.log(getHumanChoice());
//console.log(getComputerChoice());