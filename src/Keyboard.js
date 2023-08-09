
class Keyboard{
    constructor(){
        this.keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }
    
    createKeyboard(){   
        this.keys.map(keys =>{
            const keyboard = document.querySelector('.keyboard')
            const div = document.createElement('div');
            const buttons = document.createElement('button');
            buttons.textContent=keys;
            div.appendChild(buttons);
            keyboard.appendChild(div);
            div.className = 'keyboard-div'
            buttons.className = 'keyboard-buttons';
            keyboard.classList.add('keyboard-style');
        });
    }

    

}

export {Keyboard};
