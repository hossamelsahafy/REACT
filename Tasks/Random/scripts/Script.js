const rollImages = [
    './images/Rol/dice-six-faces-one.png',
    './images/Rol/dice-six-faces-two.png',
    './images/Rol/dice-six-faces-three.png',
    './images/Rol/dice-six-faces-four.png',
    './images/Rol/dice-six-faces-five.png',
    './images/Rol/dice-six-faces-six.png'
]

const rollValues = {
    './images/Rol/dice-six-faces-one.png': 1,
    './images/Rol/dice-six-faces-two.png': 2,
    './images/Rol/dice-six-faces-three.png': 3,
    './images/Rol/dice-six-faces-four.png': 4,
    './images/Rol/dice-six-faces-five.png': 5,
    './images/Rol/dice-six-faces-six.png': 6
}

var totalScore1 = 0;
var totalScore2 = 0;
var isPlayer1Background = true;
var counter1 = document.querySelector('.counter1')
var counter2 = document.querySelector('.counter2')
var totalCounter1 = document.querySelector('.totalCounter1 p')
var totalCounter2 = document.querySelector('.totalCounter2 p')
var rollImage = document.querySelector('.rollDice img')


function rollDice() {
    const randomImage = Math.floor(Math.random() * rollImages.length)
    const selectedImage = rollImages[randomImage]
    rollImage.src = selectedImage;
    const rollValue = rollValues[selectedImage];
    if (isPlayer1Background) {
        if (rollValue == 1) {
            counter1.textContent = `Score: 0`;
            totalScore1 = 0;
            Hold()
        } else {
            counter1.textContent = `Score: ${rollValue}`
            totalScore1 += rollValue;
        }
        totalCounter1.textContent = totalScore1;
        checkWinner(totalScore1, 'leftSide');
    } else {
        if (rollValue == 1) {
            counter2.textContent = `Score: 0`;
            totalScore2 = 0;
            Hold();
        } else {
            counter2.textContent = `Score: ${rollValue}`;
            totalScore2 += rollValue; 
        }
        totalCounter2.textContent = totalScore2;
        checkWinner(totalScore2, 'rightSide');
    }
}
function Hold() {
        if(isPlayer1Background){
            document.body.style.backgroundImage = "url('./images/Player2.png')";
            counter1.textContent = `Score: 0`
        } else {
            document.body.style.backgroundImage = "url('./images/Player1.png')";
            counter2.textContent = `Score: 0`
        }
        isPlayer1Background = !isPlayer1Background
    }

function newGame() {
    totalScore1 = 0;
    totalScore2 = 0;
    counter1.textContent = `Score: 0`;
    counter2.textContent = `Score: 0`;
    totalCounter1.textContent = 0;
    totalCounter2.textContent = 0;
    document.querySelector('.leftSide').classList.remove('winner');
    document.querySelector('.rightSide').classList.remove('winner');
}

function checkWinner(score, playerClass) {
    const playerElement = document.querySelector(`.${playerClass}`);
    if (score >= 50) {
        playerElement.classList.add('winner');
        setTimeout(() => {
            playerElement.classList.remove('winner');
            newGame();
        }, 5000);
    }
}

document.querySelector('.Roll').addEventListener('click', rollDice);
document.querySelector('.Hold').addEventListener('click', Hold);
document.querySelector('.NewGame').addEventListener('click', newGame)
