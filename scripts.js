const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine()) 

    if (humanChoice === 'rock') {
        paper.style.display ="none"
        scissors.style.display ="none"
    }else if (humanChoice === 'paper') {
        rock.style.display ="none"
        scissors.style.display ="none"
    }else {
        paper.style.display ="none"
        rock.style.display ="none"
    }
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
    
const rockMachine = document.querySelector('.rock-machine')
const paperMachine = document.querySelector('.paper-machine')
const scissorsMachine = document.querySelector('.scissors-machine')

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} Maquina: ${machine}`)

    if (machine === 'rock') {
        paperMachine.style.display ="none"
        scissorsMachine.style.display ="none"
    }else if (machine === 'paper') {
        rockMachine.style.display ="none"
        scissorsMachine.style.display ="none"
    }else {
        paperMachine.style.display ="none"
        rockMachine.style.display ="none"
    }
    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você venceu!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu!'
    }
}

const resetButton = () => {

    rockMachine.style.display ="initial"
    paperMachine.style.display ="initial"
    scissorsMachine.style.display ="initial"
    rock.style.display ="initial"
    paper.style.display ="initial"
    scissors.style.display ="initial"

    setTimeout(resetButton, 3000);
}
resetButton()

fun
