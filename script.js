let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let gameWinner;


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
        return computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return playerScore++;
    }
    
}

// Now all game with 5 rounds and scoreboard
function game(){
    computerScore = 0
    playerScore = 0
    gameWinner = playerScore + ":" + computerScore;
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        console.log(gameWinner);  
    }
    if(playerScore > computerScore){
        console.log('You win the game')
    }
    else if(playerScore < computerScore){
        console.log('You lose the game')
    }
    else if(playerScore === computerScore){
        console.log('Draw')
    }
    console.log(gameWinner); 
}

game()   



