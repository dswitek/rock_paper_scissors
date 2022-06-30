/* Computer randomly picking from arrayList */
function computerPlay() {
    const pick = ["Rock", "Paper", "Scissors"];
    return pick[Math.floor(Math.random()*pick.length)];
}
/* One round of rock, paper, scissors game */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    }
    
}

// Now all game with 5 rounds and scoreboard
function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))