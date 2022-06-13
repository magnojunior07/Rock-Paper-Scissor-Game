const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const playerScore = document.getElementById('p-score')
const compScore = document.getElementById('c-score')
let playerScoreValue = 0
let compScoreValue = 0
const result = document.getElementById('result')


function getCompChoice() {
    let choices = ['r', 'p', 's']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function toWord(letter){
    if(letter == 'r'){
        return 'Pedra'
    } else if (letter == 'p') {
        return 'Papel'
    } else return 'Tesoura'
}

function especific(userChoice, compChoice) {
    switch(userChoice + compChoice){
        case 'rp':
        case 'pr':
            return `${toWord('p')} cobre ${toWord('r')}`
        case 'sp':
        case 'ps':
            return `${toWord('s')} corta ${toWord('p')}`
        case 'sr':
        case 'rs':
            return `${toWord('r')} quebra ${toWord('s')}`
    }
}

function win(userChoice, compChoice) {
    playerScoreValue++
    playerScore.innerHTML = playerScoreValue
    result.innerHTML = `${especific(userChoice, compChoice)}. Você venceu!
    <br>
    <h5 class="fChoice">Sua escolha: ${toWord(userChoice)}
    <br>
    Escolha da máquina: ${toWord(compChoice)}</h5>`
}

function loss(userChoice, compChoice) {
    compScoreValue++
    compScore.innerHTML = compScoreValue
    result.innerHTML = `${especific(userChoice, compChoice)}. Você perdeu!
    <br>
    <h5 class="fChoice">Sua escolha: ${toWord(userChoice)}
    <br>
    Escolha da máquina: ${toWord(compChoice)}</h5>`
}

function draw(userChoice, compChoice) {
    result.innerHTML = `${toWord(userChoice)} e ${toWord(compChoice)} são iguais. Empate!
    <br>
    <h5 class="fChoice">Sua escolha: ${toWord(userChoice)}
    <br>
    Escolha da máquina: ${toWord(compChoice)}</h5>`
}


function game(userChoice) {
    const compChoice = getCompChoice() 
    switch(userChoice + compChoice){
        case 'rp':
            loss('r', 'p')
        break
        case 'pr':
            win('r', 'p')
        break
        case 'sp':
            win('s', 'p')
        break
        case 'ps':
            loss('p', 's')
        break
        case 'sr':
            loss('s', 'r')
        break
        case 'rs':
            win('r', 's')
        break
        case 'rr':
            draw('r','r')    
        break
        case 'pp':
            draw('p','p')    
        break
        case 'ss':
            draw('s','s')    
        break
        }

}

rock.addEventListener('click', ()=> {
    game('r')
});
paper.addEventListener('click', ()=> {
    game('p')
})
scissor.addEventListener('click', ()=> {
    game('s')
})