import { HangmanGame } from "./HangmanClass.js";

class Panel {

    constructor() {
        this.lowBar = document.createElement('p');
    }

    createPanel() {
        let hangmangame = new HangmanGame();
        let randomWord = hangmangame.startGame();
        for (let index = 0; index < randomWord.length; index++) {

            this.lowBar.textContent = '_';
            const panel = document.querySelector('.panel')
            panel.appendChild(this.lowBar);
            this.lowBar.className = 'lowbar-style'
        }

    };

    updatePanel(word) {
        this.lowBar.textContent = word;
    }

    // showCorrect(letter){

    //    let str = letter.toLowerCase();
    //    let position = this.selectedWord.search(str); 
    //    console.log(position);
    //     if (position >=0) {
    //         const lowbars = document.querySelectorAll('.lowbar-style');
    //         let newLowBars = [...lowbars];
    //         console.log(newLowBars);
    //         for (let index = 0; index < newLowBars.length; index++) {
    //             newLowBars[position].textContent =str

    //         }
    //         return true;
    //     };


    // }


}

export { Panel };
