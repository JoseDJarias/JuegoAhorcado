
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
        // console.log(this.wordsArray.indexOf(num));
        console.log(num);
    };

    showCorrect(letter){
        
       let str = letter.toLowerCase();
       let position = this.selectedWord.search(str);
       console.log(position);
        if (position >=0) {
            const lowbars = document.querySelectorAll('.lowbar-style');
            let newLowBars = [...lowbars];
            console.log(newLowBars);
            for (let index = 0; index < newLowBars.length; index++) {
                newLowBars[position].textContent =str
                
            }
            return true;
        };
        
       
    }
        

}

export {Panel};
