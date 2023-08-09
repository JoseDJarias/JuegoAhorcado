class Result{
    constructor(){
        this.messageVictory = 'Has ganado la partida ';
        this.messageFailure = 'Has perdido la partida ';
        this.messagePlayAgain = 'Quiere jugar otra vez ?';
        this.messageContainer = document.querySelector('.message');
    }

    showResult(isWin,word){
        if (isWin) {
            this.messageContainer.textContent = this.messageVictory + word
            + this.messagePlayAgain;
            // se necesita volver a jugar otra vez
        }else{
            this.messageContainer.textContent = this.messageFailure + word
            + this.messagePlayAgain;
            // se necesita volver a jugar otra vez,investigar sobre el window.location.reload();
        }
    }
    
}
export{Result};