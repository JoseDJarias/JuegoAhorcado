class HangmanGame {
    constructor() {
        this.wordsArray = ['javascript', 'coding', 'trello'];
        this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.textArray = [];
        this.newTextArray = [];
    }
    startGame() {
        console.log('Start word: ',this.selectedWord);
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
        // if (!this.textArray.includes("_")) {
        // }
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