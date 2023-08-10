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
bodyparts.updateImg(0);

hangmangame.startGame();
keyboard.createKeyboard();



panel.createPanel();
hangmangame.fillArrayLength();

const button = document.querySelectorAll('.keyboard-buttons');
button.forEach((button) => {
    button.addEventListener('click', () => {
        handlerLetterClick(button);
    });
});

function handlerLetterClick(button) {
    let letter = button.textContent;
    const isLetterCorrect = hangmangame.checkLetter(letter);
    changeColorLetter(isLetterCorrect, letter);
    if (isLetterCorrect) {
        const newStatus = hangmangame.getStatus(letter);
        console.log(newStatus, 'Prueba status');
        panel.updatePanel(newStatus);
    }
    if (!isLetterCorrect) {
        bodyparts.updateImg();
    }
    // faltan los intentos
    // chequear si gano o no
};

function changeColorLetter(isLetterCorrect, letter) {
    if (isLetterCorrect) {
        keyboard.showCorrect(letter);
    } else keyboard.showIncorrect(letter);
};

