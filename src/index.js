import { Panel } from "./PanelClass.js";
import { Keyboard } from "./Keyboard.js";


// instance class panel 
let panel = new Panel();
// instance class keyboard
let keyboard = new Keyboard();


panel.showPanel();
keyboard.createKeyboard();

const button = document.querySelectorAll('.keyboard-buttons');
button.forEach((button) =>{
button.addEventListener('click',() =>{
    if (panel.showCorrect(button.textContent)) {
        button.classList.add('correct-letter');
    }else button.classList.add('wrong-letter');
    
})
})

