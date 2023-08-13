class HangmanGame {
    constructor() {
        this.wordsArray = ['javascript', 'coding', 'trello'];
        this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.textArray = [];
        this.newTextArray = [];
    }
    startGame() {
        console.log('Start word: ', this.selectedWord);
        return this.selectedWord;

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
            alert('Has ganado')
            let text = 'Deseas volver a jugar?'
            if (!confirm(text)) {
                let keyboardButtons = document.querySelectorAll('.keyboard-buttons')
                keyboardButtons.forEach(function (boton) {
                    boton.disabled = true;
                });
            } else {
                window.location.reload();
            }

        }
    }

    checkIfPlayerLost(attemps) {
        if (attemps >= 7) {
            console.log('Juego terminado');
            alert('Has perdido')
            let text = 'Deseas volver a jugar?'
            if (!confirm(text)) {
                let keyboardButtons = document.querySelectorAll('.keyboard-buttons')
                keyboardButtons.forEach(function (boton) {
                    boton.disabled = true;
                });
            } else {
                window.location.reload();
            }
        }
    }
}

export { HangmanGame }