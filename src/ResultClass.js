class Result {
    constructor() {
        this.messageVictory = 'Has ganado la partida con la letra:  ';
        this.messageFailure = 'Has perdido la partida con la letra: ';
        this.messagePlayAgain = ' Deseas jugar otra vez ?';
        this.messageContainer = document.querySelector('.message');
        this.messageParagraph = document.querySelector('.message-paragraph')
        this.messageContainer.className = 'hide-element';
        this.button1 = document.querySelector('.message-btn1')
        this.button1.textContent = 'Aceptar';

    }

    showResult(isWin, word) {
        this.messageContainer.className = 'message';
        this.disableKeyboard();
        if (isWin) {
            this.messageParagraph.textContent = this.messageVictory + " " + word
                + this.messagePlayAgain;
            this.button1.addEventListener('click', this.button1Handler)
        } else {
            this.messageParagraph.textContent = this.messageFailure + " " + word
                + this.messagePlayAgain;
            this.button1.addEventListener('click', this.button1Handler)
        }
    }

    disableKeyboard() {
        let keyboardButtons = document.querySelectorAll('.keyboard-buttons')
        keyboardButtons.forEach(function (boton) {
            boton.disabled = true;
        });
    }

    button1Handler() {
        window.location.reload();
    }

}
export { Result };