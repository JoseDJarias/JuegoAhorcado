class HangmanGame{
    constructor(){
        this.wordsArray = ['javascript', 'coding','trello'];
        this.selectedWord = '';
    }
    startGame(){
        // probando el panel
    this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
    
    }

    checkLetter(letter){

    }

    getStatus(){

    }
    setStatus(){

    }

}

export{HangmanGame}