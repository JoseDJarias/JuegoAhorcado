import { HangmanGame } from "./HangmanClass.js";

class Points{

    constructor(){
        this.hangManClass = new HangmanGame();
        this.pointsContainer = document.querySelector('.point-container');
        this.pointsParagraph = document.querySelector('.points');

    }

    // ver(){
    //     let descontar = this.hangManClass.createButtonImageEvent();
    //     console.log('ver valor',descontar);
    // }

}
export{Points}