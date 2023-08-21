import { Panel } from "./PanelClass.js";
import { Keyboard } from "./Keyboard.js";
import { Result } from "./ResultClass.js";
import { BodyParts } from "./BodyPartClass.js";
import { HangmanGame } from "./HangmanClass.js";
import { Points } from "./PointsClass.js";
import { PokeApi } from "../api/pokemon-api.js";

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
// instance points class
let points = new Points();
// instance poke api
let pokeApi = new PokeApi();

// timer
let startTimer;
let timerInterval;
let isTimeOut = false;


hangmangame.startGame();
hangmangame.startClues();

let buttonGiveLetter = document.querySelector('.giveLetter-button');
buttonGiveLetter.disabled = true;

/* Select all the keyboard buttons and foreach one a event click
 wich call a function */
const button = document.querySelectorAll('.keyboard-buttons');
button.forEach((button) => {
    button.addEventListener('click', () => {
        handlerLetterClick(button);
    });
});
function handlerLetterClick(button) {
    let letter = button.textContent;
    activarAcordion(true)
    const isLetterCorrect = hangmangame.checkLetter(letter);
    changeColorLetter(isLetterCorrect, letter);
    if (!startTimer) {
        startTimer = Date.now();
        hangmangame.startTime = startTimer;
        timerInterval = setInterval(updateTimer, 1000);
    }

    const newStatus = hangmangame.getStatus(letter);
    // clue that show to the player a random (correct)letter in the panel 
    buttonGiveLetter.disabled = false;
    buttonGiveLetter.addEventListener('click', () => {
        let random = hangmangame.getRandomNumber(newStatus);
        let selectedWordArray = hangmangame.selectedWord.split('');
        if (random !== -1) {
            newStatus[random] = selectedWordArray[random];
            resultCheckedAndStopTimer(letter, newStatus);
        };
        points.discountPoints(20);

    });

    if (isLetterCorrect) {
        button.disabled = true;
        panel.updatePanel(newStatus);
        resultCheckedAndStopTimer(letter, newStatus);
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
        points.discountPoints(2);
        let resultChecked = hangmangame.checkIfPlayerLost(attemps);
        if (resultChecked) {
            displayNoneAcordion();
            buttonGiveLetter.disabled = true;
            result.showResult(false, hangmangame.selectedWord)
        }
        if (attemps > 6) {
            stopTimer();
            console.log('Paro el timepo');
        }

    }
};

// accordion event
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordion = document.querySelector('.accordion-header');

accordion.style.cursor = 'not-allowed';
function activarAcordion(alert) {
    accordion.style.cursor = 'pointer';
    accordionHeaders.forEach((header) => {
        header.addEventListener('click', function () {
            if (alert) {
                const accordionContent = this.nextElementSibling;
                accordionContent.style.display = (accordionContent.style.display === 'block') ? 'none' : 'block';
            } 
        });
    });
};


function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTimer) / 1000); // Calcular el tiempo transcurrido en segundos
    const timer = document.querySelector('.timer')
    timer.textContent = elapsedTime;
    if (elapsedTime > 120) {
        displayNoneAcordion();
        result.showMessageIfPlayerRunOutOfTime();
        stopTimer();
        result.disableKeyboard();
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

function resultCheckedAndStopTimer(letter, newStatus) {
    panel.updatePanel(newStatus);
    let resultChecked = hangmangame.checkIfPlayerWin(letter);
    if (resultChecked) {
        displayNoneAcordion();
        buttonGiveLetter.disabled = true;
        stopTimer();
        result.showResult(true, hangmangame.selectedWord);
    }
};

function displayNoneAcordion() {
    let accordion = document.querySelector('.accordion')
    const accordionHeaders = document.querySelector('.buttonImageClue');
    accordionHeaders.style.display = 'none'; 
}




// save and load game buttons
// const saveButton = document.getElementById('saveButton');
// const loadButton = document.getElementById('loadButton');

// // save and load game events
// saveButton.addEventListener('click', () => {
//     hangmangame.saveGame();
// });

// loadButton.addEventListener('click', () => {
//     hangmangame.loadGame();
// });


