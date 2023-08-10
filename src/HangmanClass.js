class HangmanGame {
    constructor() {
        this.wordsArray = ['javascript', 'coding', 'trello'];
        this.selectedWord = '';
        this.textArray = [];
        this.newTextArray = [];
    }
    startGame() {
        // probando el panel
        return this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];

    }

    checkLetter(letter) {
        console.log('word: ', this.selectedWord);
        let str = letter.toLowerCase();
        console.log('wordToLower: ', str);
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
        if (!this.textArray.includes("_")) {
            return this.textArray;
        }
        // console.log(this.textArray);
    }
    setStatus() {

    }

    checkIfPlayerWin() {


    }
    checkIfPlayerLost() {

    }

}

export { HangmanGame }