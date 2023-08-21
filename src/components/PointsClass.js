import { HangmanGame } from "./HangmanClass.js";

class Points{

    constructor(){
        this.pointsContainer = document.querySelector('.point-container');
        this.pointsParagraph = document.querySelector('.points');

    }

    discountPoints(quantity){
        let number =parseInt(this.pointsParagraph.textContent);
        let total =number - quantity;
        document.querySelector('.points').textContent =total;
        
    }

  
}
export{Points}