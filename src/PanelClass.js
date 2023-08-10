
class Panel {

    constructor() {
    }
    
    createPanel(word) {
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

}

export { Panel };
