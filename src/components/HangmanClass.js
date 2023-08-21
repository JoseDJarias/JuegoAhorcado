import { Keyboard } from "./Keyboard.js";
import { Panel } from "./PanelClass.js";
import { Result } from "./ResultClass.js";
import { PokeApi } from "../api/pokemon-api.js";
import { Points } from "./PointsClass.js";

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
        this.pokeImage = document.createElement('img');
        this.pokeImageContainer = document.querySelector('.image-pokeapi-container');
        this.buttonImageClue = document.querySelector('.imageClue-button');
        this.buttonGiveLetter = document.querySelector('.giveLetter-button');
        this.clueFlag = false;
        this.clueFlag1 = false;
        this.giveAbilityButton = document.querySelector('.giveAbility-button');
        this.giveTypeButton = document.querySelector('.giveType-button');
        this.giveSpecieButton = document.querySelector('.giveSpecie-button');
        this.points = new Points();
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
        console.log(this.data);
        this.fillArrayLength();
        this.panel.createPanel(this.selectedWord);

        this.asyncTest();
    };

    asyncTest() {
        // console.log('After initialization', this.selectedWord);
        // console.log(this.data.sprites.other["official-artwork"]["front_default"]);
        // console.log(this.data.sprites.other["official-artwork"]["front_shiny"]);
        // console.log(this.data);
        // console.log(this.data.name, 'palabra');
    }


    checkLetter(letter) {
        console.log('Letra a jugar : ', this.selectedWord);
        let str = letter.toLowerCase();
        let position = this.selectedWord.search(str);
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

    // -------------------------------Clue ----------------------------------------------
    startClues() {
        this.createButtonImageEvent();
        this.giveTypeClue();
        this.giveAbilityClue();
        this.giveSpecieClue();
    };

    giveTypeClue() {
        this.giveTypeButton.addEventListener('click', () => {
            this.points.discountPoints(5)
            alert((this.data.types['0']['type']['name']));
            this.giveTypeButton.disabled = true;
        })
    };

    giveAbilityClue() {
        this.giveAbilityButton.addEventListener('click', () => {
            this.points.discountPoints(5)
            alert((this.data.abilities[0]['ability']['name']));
            this.giveAbilityButton.disabled = true;
        });
    };

    giveSpecieClue() {
        this.giveSpecieButton.addEventListener('click', () => {
            this.points.discountPoints(5)
            alert((this.data.species['name']));;
            this.giveSpecieButton.disabled = true;
        });
    };



    // clue with image
    createImageClue(number, state) {
        this.pokeImage.src = this.data.sprites.other["official-artwork"]["front_shiny"];
        this.pokeImage.style.filter = `brightness(${number})`
        this.pokeImageContainer.appendChild(this.pokeImage);
        this.buttonImageClue.textContent = 'Presiona para otra pista';
        if (state) {
            this.buttonImageClue.disabled = true;
        };
    }
    // event in the button
    createButtonImageEvent() {

        this.buttonImageClue.addEventListener('click', () => {
            console.log(this.clueFlag);
            this.points.discountPoints(7)
            if (!this.clueFlag && !this.clueFlag1) {
                this.clueFlag = true;
                console.log('entro al if');
                this.createImageClue(0, false)
            } else if (this.clueFlag) {
                this.clueFlag = false;
                this.clueFlag1 = true;
                this.createImageClue(0.3, false);
                console.log('entro en el else if')
            } else if (this.clueFlag1) {
                console.log('entro en el else if 2')
                this.createImageClue(0.6, true);
            }
        });

    };

 

    // clue reveal Letter to  the player
    getRandomNumber(array) {
        const emptyIndex = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "_") {
                emptyIndex.push(i);
            }
        }

        // Verifica si no hay posiciones vacías
        if (emptyIndex.length === 0) {
            console.log("No hay posiciones vacías.");
            return -1;
        }

        // Elige un índice aleatorio de las posiciones vacías
        const randomIndex = Math.floor(Math.random() * emptyIndex.length);
        return emptyIndex[randomIndex];
    }


    // -------------------------------Clue ----------------------------------------------



    /*-------------------First Alert when the game start-------------------*/
    swalAlert() {
        Swal.fire({
            title: 'Al presionar el primer boton del teclado \nInicia el cronometro y empieza el  juego \n Recuerda, tienes solo 60 segundos \n El menu de pistas se activa al iniciar el juego',
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


    /*----------------------Save and load the game------------------------*/
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

