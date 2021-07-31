const playOneRound = (playerSelection, computerSelection, 
    currentPlayerScore, currentOpponentScore) => {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result;

    if(playerSelection === computerSelection) {
        result = "It's a Tie!";
    }
    
    else if(playerSelection === "rock") {
        switch(computerSelection) {
            case "scissors":
                currentPlayerScore += 1;
                result = "You Win! (You) Rock beats Scissors (Opponent)";
                break;
            case "paper": 
                currentOpponentScore += 1;
                result = "You Lose! (Opponent) Paper beats Rock (You)";
                break;
        }
    }

    else if(playerSelection === "paper") {
        switch(computerSelection) {
            case "scissors":
                currentOpponentScore += 1;
                result = "You Lose! (Opponent) Scissors beat Paper (You)";
                break;
            case "rock": 
                currentPlayerScore += 1;
                result = "You Win! (You) Paper beats Rock (Opponent)";
                break;
        }
    }

    else if(playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                currentOpponentScore += 1;
                result = "You Lose! (Opponent) Rock beats Scissor (You)";
                break;
            case "paper": 
                currentPlayerScore += 1;
                result = "You Win! (You) Scissors beat Paper (Opponent)";
                break;
        }
    }

    return [result, currentPlayerScore, currentOpponentScore]
}

export {playOneRound}