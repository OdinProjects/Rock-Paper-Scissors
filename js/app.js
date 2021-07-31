import {computerPlay} from './rpsGenerator.js'
import {playOneRound} from './playOneRound.js'

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')

const game = (event) => {
    const message = document.createElement('p')
    message.textContent = playOneRound(event.target.id, computerPlay())
    result.appendChild(message)
}

buttons.forEach(button => {
    button.addEventListener('click', game)
})