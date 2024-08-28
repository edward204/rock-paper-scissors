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

