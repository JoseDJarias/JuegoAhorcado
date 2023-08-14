import { Keyboard } from "./Keyboard.js";
import { Panel } from "./PanelClass.js";
import { Result } from "./ResultClass.js";

class HangmanGame {
    constructor() {
        this.wordsArray = ['javascript', 'coding', 'trello'];
        this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.textArray = [];
        this.newTextArray = [];
        this.keyboard = new Keyboard();
        this.panel = new Panel();
        this.result = new Result();
    }

    startGame() {
        this.swalAlert();
        this.keyboard.createKeyboard();
        this.panel.createPanel(this.selectedWord);
        this.panel.createHeartIcons();
        this.fillArrayLength();
    }

    checkLetter(letter) {
        console.log('checkletterword: ', this.selectedWord);
        let str = letter.toLowerCase();
        let position = this.selectedWord.search(str);
        console.log('position: ', position);
        if (position >= 0) {
            return true;
        };
    };

    fillArrayLength() {
        for (let index = 0; index < this.selectedWord.length; index++) {
            this.textArray.push('_')
        };
    }

    getStatus(letter) {
        let text = this.selectedWord;
        this.newTextArray = text.split("")
        let lowerLetter = letter.toLowerCase();
        console.log('Prueba si hace el lower', lowerLetter);
        console.log('Letra status: ', letter);
        for (let index = 0; index < text.length; index++) {
            if (lowerLetter === this.newTextArray[index]) {
                this.textArray[index] = lowerLetter
            }
        }
        return this.textArray;
    }

    setStatus() {

    }

    checkIfPlayerWin(letter) {
        let textArray = this.getStatus(letter);
        if (!textArray.includes("_")) {
            return true;
        }
        return false
    }

    checkIfPlayerLost(attemps) {
        if (attemps >= 7) {
            console.log('Juego terminado');
            return true
        }
        return false
    }

    swalAlert() {
        Swal.fire({
            title: 'Al presionar el primer boton del teclado, inicia el cronometro',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
            `
        })
    }
}
export { HangmanGame }

