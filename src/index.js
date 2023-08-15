import { Panel } from "./PanelClass.js";
import { Keyboard } from "./Keyboard.js";
import { Result } from "./ResultClass.js";
import { BodyParts } from "./BodyPartClass.js";
import { HangmanGame } from "./HangmanClass.js";

// instance hangmangame
let hangmangame = new HangmanGame();

// instance class panel 
let panel = new Panel();
// instance class keyboard
let keyboard = new Keyboard();
// instance result class
let result = new Result();
// instance bodyparts class
let bodyparts = new BodyParts();

// timer
let startTimer;
let timerInterval;

hangmangame.startGame();

/* Select all the keyboard buttons and foreach one a event click
 wich call a function */
const button = document.querySelectorAll('.keyboard-buttons');
button.forEach((button) => {
    button.addEventListener('click', () => {
        handlerLetterClick(button);
    });
});

function handlerLetterClick(button) {
    result.removeInitialAlert();
    let letter = button.textContent;
    const isLetterCorrect = hangmangame.checkLetter(letter);
    changeColorLetter(isLetterCorrect, letter);
    if (!startTimer) {
        startTimer = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
    if (isLetterCorrect) {
        button.disabled = true;
        const newStatus = hangmangame.getStatus(letter);
        panel.updatePanel(newStatus)
        let resultChecked = hangmangame.checkIfPlayerWin(letter);
        if (resultChecked) {
            stopTimer();
            result.showResult(true, hangmangame.selectedWord)
        }
    }
    if (!isLetterCorrect) {
        button.disabled = true;
        let attemps = parseInt(document.querySelector('.attemps-counter').textContent);
        bodyparts.updateImg(attemps);
        attemps++;  
        panel.updateHeartIcons(attemps);
        console.log('Intentos', attemps);
        document.querySelector('.attemps-counter').textContent = attemps;
        hangmangame.incorrectGuesses = attemps;
        let resultChecked = hangmangame.checkIfPlayerLost(attemps);
        if (resultChecked) {
            result.showResult(false, hangmangame.selectedWord)
        }
        if (attemps > 6) {
            stopTimer();
            console.log('Paro el timepo');
        }

    }
};

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTimer) / 1000); // Calcular el tiempo transcurrido en segundos
    const timer = document.querySelector('.timer')
    timer.textContent = elapsedTime;
    if (elapsedTime > 60) {
        stopTimer();
        result.showMessageIfPlayerRunOutOfTime();
    }
}
function stopTimer() {
    clearInterval(timerInterval);
}

function changeColorLetter(isLetterCorrect, letter) {
    if (isLetterCorrect) {
        keyboard.showCorrect(letter);
    } else keyboard.showIncorrect(letter);
};

// save and load game buttons
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

// save and load game events 
saveButton.addEventListener('click', () => {
    hangmangame.saveGame();
});

loadButton.addEventListener('click', () => {
    hangmangame.loadGame();
});


