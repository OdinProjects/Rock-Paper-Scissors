import {computerPlay} from './rpsGenerator.js'
import {playOneRound} from './playOneRound.js'

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

let currentPlayerScore = 0;
let currentOpponentScore = 0;

const game = (event) => {
    const message = document.createElement('p');
    const play = playOneRound(event.target.id, computerPlay(), currentPlayerScore, currentOpponentScore);
    message.textContent = play[0];
    currentPlayerScore = play[1];
    currentOpponentScore = play[2];
    console.log(currentPlayerScore, currentOpponentScore)
    result.appendChild(message);

    const winner = document.createElement('p');
    if(currentPlayerScore === 5) {
        winner.textContent = "Congrats! You've just won the game!";
        currentPlayerScore = 0;
        currentOpponentScore = 0;
        result.appendChild(winner);
    }
    else if(currentOpponentScore === 5) {
        winner.textContent = "Better Luck Next Time!";
        currentPlayerScore = 0;
        currentOpponentScore = 0;
        result.appendChild(winner);
    }   
}

buttons.forEach(button => {
    button.addEventListener('click', game);
})
