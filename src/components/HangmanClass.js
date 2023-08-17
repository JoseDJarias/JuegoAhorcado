import { Keyboard } from "./Keyboard.js";
import { Panel } from "./PanelClass.js";
import { Result } from "./ResultClass.js";
import { PokeApi } from "../api/pokemon-api.js";

class HangmanGame {
    constructor() {
        // this.wordsArray = ['javascript', 'coding', 'trello'];
        // this.selectedWord = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.selectedWord = '';
        this.textArray = [];
        this.newTextArray = [];
        this.keyboard = new Keyboard();
        this.panel = new Panel();
        this.result = new Result();
        this.guessedWord = [];
        this.incorrectGuesses = 0;
        this.remainingGuesses = 7 - this.incorrectGuesses;
        this.selectedLetters = [];
        this.elapsedTime = 0;
        this.currentTime = 0;
        this.startTime = 0;
        this.pokeApi = new PokeApi();
        this.data = new Object();
        this.pokeImage =  document.createElement('img');
        this.pokeImageContainer = document.querySelector('.image-pokeapi-container');
        this.buttonImageClue = document.querySelector('.imageClue-button');
        this.clueFlag = false;

    }
    // poke-api  data
    async initializePokeApiData() {
        this.data = await this.pokeApi.getPokemonAsync(this.pokeApi.number);
        this.selectedWord = this.data.name;
        return this.data;
    }

    async startGame() {
        this.swalAlert();
        this.keyboard.createKeyboard();
        this.panel.createHeartIcons();
        this.data = await this.initializePokeApiData();
        this.fillArrayLength();
        this.panel.createPanel(this.selectedWord);

        this.asyncTest();
    };
    
    asyncTest(){
        console.log('After initialization', this.selectedWord);
        console.log(this.data.sprites.other["official-artwork"]["front_default"]);
        console.log(this.data.sprites.other["official-artwork"]["front_shiny"]);
        console.log(this.data);
        console.log(this.data.name, 'palabra');
    }
    // Clue ----------------------------------------------------------------------------
    
    createImageClue(number,state){
        this.pokeImageContainer.style.height = '300px';
        this.pokeImage.style.width = '300px';
        this.pokeImage.src = this.data.sprites.other["official-artwork"]["front_shiny"];
        this.pokeImage.style.filter = `brightness(${number})`
        this.pokeImageContainer.appendChild(this.pokeImage);
        this.buttonImageClue.textContent = 'Presiona para otra pista';
        if (state) {
            // this.buttonImageClue.style.visibility = 'hidden';
            // this.buttonImageClue.style.width = '0';
            // this.buttonImageClue.style.height = '0';
            this.buttonImageClue.disabled = true;
        };
    }

    createButtonImageEvent(){
        
        this.buttonImageClueStyle();
        this.buttonImageClue.addEventListener('click',()=>{
            console.log(this.clueFlag);
            if (!this.clueFlag) {
                this.clueFlag = true;
                console.log('entro al if');
                this.createImageClue(0,false)
            }else{
                this.createImageClue(0.3,true);
                console.log('entro en el else');
            }
        });
        
    };

    buttonImageClueStyle(){
        this.buttonImageClue.style.height ='110px';
        this.buttonImageClue.style.width ='100px';
        this.buttonImageClue.style.borderRadius = '20px';
        this.buttonImageClue.style.border = '1px solid red';
        
    }
    // Clue ----------------------------------------------------------------------------
    
    // Points --------------------------------------------------------------------------


    // Points --------------------------------------------------------------------------



    checkLetter(letter) {
        console.log('checkletterword: ', this.selectedWord);
        let str = letter.toLowerCase();
        let position = this.selectedWord.search(str);
        console.log('position: ', position);
        this.selectedLetters.push(str);
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
        this.newTextArray = text.split("");
        let lowerLetter = letter.toLowerCase();
        for (let index = 0; index < text.length; index++) {
            if (lowerLetter === this.newTextArray[index]) {
                this.textArray[index] = lowerLetter
            }
        }
        this.guessedWord = this.textArray;
        console.log(this.guessedWord, 'Palabra adivinada');
        return this.textArray;
    }

    setStatus() {

    }

    checkIfPlayerWin(letter) {
        let textArray = this.getStatus(letter);
        if (!textArray.includes("_")) {
            return true;
        }
        return false
    }

    checkIfPlayerLost(attemps) {
        if (attemps >= 7) {
            console.log('Juego terminado');
            return true
        }
        return false
    }

    swalAlert() {
        Swal.fire({
            title: 'Al presionar el primer boton del teclado, inicia el cronometro \n Recuerda, tienes solo 60 segundos',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
            `
        })
    };

    /*new functionality  //////////////////////////////////////////////////////////////////*/
    saveElapsedTime() {
        const timer = parseInt(document.querySelector('.timer').textContent)
        console.log(timer);
        return timer
    }

    saveGame() {
        const gameData = {
            selectedWord: this.selectedWord,
            guessedWord: this.guessedWord,
            incorrectGuesses: this.incorrectGuesses,
            remainingGuesses: this.remainingGuesses,
            selectedLetters: this.selectedLetters,
            elapsedTime: this.saveElapsedTime()
        };

        localStorage.setItem('hangmanGame', JSON.stringify(gameData));
        alert('Partida guardada.');
    };
    loadGame() {
        const savedGame = localStorage.getItem('hangmanGame');

        if (savedGame) {
            const gameData = JSON.parse(savedGame);
            this.selectedWord = gameData.selectedWord;
            this.guessedWord = gameData.guessedWord;
            this.incorrectGuesses = gameData.incorrectGuesses;
            this.remainingGuesses = gameData.remainingGuesses;
            this.selectedLetters = gameData.selectedLetters;
            this.elapsedTime = gameData.elapsedTime;

            console.log('Prueba del millon', this.elapsedTime);


            // update the panel with the guessed word at the moment of the save
            this.panel.updatePanel(this.guessedWord);
            this.panel.updateHeartIcons(this.incorrectGuesses)

            // update the attemps
            let attemps = parseInt(document.querySelector('.attemps-counter').textContent);
            attemps = this.incorrectGuesses;
            document.querySelector('.attemps-counter').textContent = attemps

            //update the keyboard
            /*  no lo cree en la clase keyboard para evitar el error 
                de dependencias circular y que genere
                Maximum call stack size exceeded    */
            this.updateKeyboard()

            // update timer
            this.updateElapsedTime(this.elapsedTime);

            alert('Partida cargada.');
        } else {
            alert('No hay partida guardada.');
        }
    }

    updateKeyboard() {
        const buttons = document.querySelectorAll('.keyboard-buttons');
        buttons.forEach(button => {
            const letter = button.textContent.toLowerCase();
            const isSelected = this.selectedLetters.includes(letter);
            const isCorrect = this.selectedWord.includes(letter);

            if (isSelected && !isCorrect) {
                // Agregar la clase correct-letter si la letra está seleccionada y es correcta
                button.classList.add('wrong-letter');
            } else if (isSelected && isCorrect) {
                // Agregar la clase wrong-letter si la letra está seleccionada pero es incorrecta
                button.classList.add('correct-letter');
            } else {
                // Remover ambas clases si la letra no está seleccionada
                button.classList.remove('correct-letter');
                button.classList.remove('wrong-letter');
            }
        });
    }
    updateElapsedTime() {
        let timerInterval = setInterval(this.updateTimer(this.elapsedTime), 1000);
    }
    updateTimer(elapsedTime) {
        console.log('Que vergas de params me llega: ', elapsedTime);
        const timer = document.querySelector('.timer')
        timer.textContent = elapsedTime;
        if (elapsedTime > 60) {
            stopTimer();
            result.showMessageIfPlayerRunOutOfTime();
        }
    }

}
export { HangmanGame }

