
class Keyboard {
    constructor() {
        this.keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.keyboard = document.querySelector('.keyboard')
    }

    createKeyboard() {
        this.keys.map(key => {
            const div = document.createElement('div');
            const buttons = document.createElement('button');
            buttons.textContent = key;
            div.appendChild(buttons);
            this.keyboard.appendChild(div);
            div.className = 'keyboard-div'
            buttons.className = 'keyboard-buttons';
            this.keyboard.classList.add('keyboard-style');
            buttons.setAttribute("data-letter", key);
        });
    };

    getLetterButton(letter) {
        return this.keyboard.querySelector(`.keyboard-buttons[data-letter="${letter}"]`);
    }

    showCorrect(letter) {
        const button = this.getLetterButton(letter);
        button.classList.add('correct-letter');
    }

    showIncorrect(letter) {
        const button = this.getLetterButton(letter);
        button.classList.add('wrong-letter');
    }



}

export { Keyboard };
