class Result {
    constructor() {
        this.messageVictory = 'Has ganado la partida con la palabra:  ';
        this.messageFailure = 'Has perdido la partida con la palabra: ';
        this.messagePlayAgain = ' Deseas jugar otra vez ?';
        this.messageTimeOff = 'Se te ha acabado el tiempo';
        this.messaeInitialAlert = "Al presionar el primer boton del teclado comienza a correr el cronometro. "
        this.messageContainer = document.getElementById('message-container');
        this.messageParagraph = document.querySelector('.message-paragraph')
        this.button1 = document.querySelector('.message-btn1')
        this.button1.textContent = 'Presiona Aceptar';

    }


    removeInitialAlert() {
        // Oculta la alerta
        this.messageContainer.className = 'hide-message'
    }

    showResult(isWin, word) {
        console.log(this.messageContainer);
        this.messageContainer.className = 'message';
        this.button1.style.visibility = 'visible';
        this.disableKeyboard();
        if (isWin) {
            this.messageContainer.classList.add('success')
            this.messageParagraph.innerHTML = this.messageVictory + " " + word + "<br>" + this.messagePlayAgain;
            this.button1.addEventListener('click', this.button1Handler)
        } else {
            this.messageContainer.classList.add('warning')
            this.messageParagraph.innerHTML = this.messageFailure + " " + word + "<br>"
                + this.messagePlayAgain;
            this.button1.addEventListener('click', this.button1Handler)
        }
    }

    showMessageIfPlayerRunOutOfTime() {
        this.messageContainer.classList.add('warning')
        this.messageContainer.className = 'message';
        this.disableKeyboard();
        this.messageParagraph.innerHTML = this.messageTimeOff + "<br>" + this.messagePlayAgain;
        this.button1.addEventListener('click', this.button1Handler)
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