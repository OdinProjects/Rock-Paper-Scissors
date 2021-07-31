const playOneRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if(playerSelection === computerSelection) {
        return "It's a Tie!"
    }
    
    if(playerSelection === "rock") {
        switch(computerSelection) {
            case "scissors":
                return "You Win! (You) Rock beats Scissors (Opponent)"
            case "paper": 
                return "You Lose! (Opponent) Paper beats Rock (You)"
        }
    }

    if(playerSelection === "paper") {
        switch(computerSelection) {
            case "scissors":
                return "You Lose! (Opponent) Scissors beat Paper (You)"
            case "rock": 
                return "You Win! (You) Paper beats Rock (Opponent)"
        }
    }

    if(playerSelection === "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You Lose! (Opponent) Rock beats Scissor (You)"
            case "paper": 
                return "You Win! (You) Scissors beat Paper (Opponent)"
        }
    }
}

export {playOneRound}