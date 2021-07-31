import {computerPlay} from './rpsGenerator.js'
import {playOneRound} from './playOneRound.js'

const game = (event) => {
    alert(event.target.id);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', game)
})

/*
const game = () => {
    for(let i = 0; i < 4; i++) {
        const userChoice = prompt("Choose between rock or paper or scissors")
        const result = playOneRound(userChoice, computerPlay())
        alert(result)
    }
}

game()
*/