import {computerPlay} from './rpsGenerator.js'
import {playOneRound} from './playOneRound.js'

const game = () => {
    for(let i = 0; i < 4; i++) {
        const userChoice = prompt("Choose between rock or paper or scissors")
        const result = playOneRound(userChoice, computerPlay())
        alert(result)
    }
}

game()