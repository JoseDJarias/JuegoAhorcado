class Result {
    constructor() {
        this.messageVictory = 'Has ganado la partida con la palabra:  ';
        this.messageFailure = 'Has perdido la partida con la palabra: ';
        this.messagePlayAgain = ' Deseas jugar otra vez ?';
        this.messageTimeOff = 'Se te ha acabado el tiempo';
        this.messaeInitialAlert = "Al presionar el primer boton del teclado comienza a correr el cronometro. "
        this.messageContainer = document.getElementById('message-container');
        this.messageContainer.style.visibility = 'hidden'
        this.messageParagraph = document.querySelector('.message-paragraph')
        this.button1 = document.querySelector('.message-btn1')
        this.button1.textContent = 'Presiona Aceptar';

    }
    
    showResult(isWin, word) {
        this.messageContainer.style.visibility = 'visible';
        
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
        this.messageContainer.style.visibility = 'visible';
        this.disableKeyboard();
        this.messageParagraph.innerHTML = this.messageTimeOff + "<br>" + this.messagePlayAgain;
        let botton = document.querySelector('.buttonImageClue');
        botton.style.display = 'none';
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