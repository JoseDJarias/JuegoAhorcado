import { HangmanGame } from "./HangmanClass.js";

class Panel {

    constructor() {
    }
    
    createPanel(word) {
        // let hangmangame = new HangmanGame();
        // let randomWord = hangmangame.startGame();
        // console.log('Prueba en panel',randomWord);
        for (let index = 0; index < word.length; index++) {
            let lowBar = document.createElement('p');
            lowBar.textContent = '_';
            const panel = document.querySelector('.panel')
            panel.appendChild(lowBar);
            lowBar.className = 'lowbar-style'
            console.log('panel word',word);
        }

    };

    updatePanel(array) {
       console.log('array que llega: ',array);
       let lowbar = document.querySelectorAll('.lowbar-style');
       console.log('Lista de nodos: ',lowbar);
       let newLowBars = Array.from(lowbar);
       console.log('New Array',newLowBars);
        for (let index = 0; index < array.length; index++) {
        newLowBars[index].textContent = array[index]      
        }
     
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
