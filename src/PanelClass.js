
class Panel{
    
    constructor(){
        this.wordsArray = ['javascript', 'coding','trello'];
        this.selectedWord = '';
    }

    showPanel(){
        let num =  this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)];
        this.selectedWord = num;
        for (let index = 0; index<num.length; index++) {
            const lowBar = document.createElement('p');
            lowBar.textContent = '_';
            const panel = document.querySelector('.panel')
            panel.appendChild(lowBar);
            lowBar.className = 'lowbar-style'   
        }
        console.log(this.wordsArray.indexOf(num));
        console.log(num);
    }

}

export {Panel};
