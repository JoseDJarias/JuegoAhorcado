
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
            console.log('panel word', word);
        }
    };


    createHeartIcons() {
        const lives = document.querySelector('.lives')
        lives.innerHTML = '';
        for (let index = 0; index < 7; index++) {
            let icons = document.createElement('img');
            icons.src = '../assets/images/emoticonos.png';
            lives.appendChild(icons);
            icons.className = 'icons-styles'
        }
    };

    updateHeartIcons(attemps) {
        const lives = document.querySelector('.lives')
        lives.innerHTML = '';
        const totalIcons = 7 - attemps
        console.log('Heart total', totalIcons);
        for (let index = 0; index < totalIcons; index++) {
            let icons = document.createElement('img');
            icons.src = '../assets/images/emoticonos.png';
            lives.appendChild(icons);
            icons.className = 'icons-styles'
            if (totalIcons < 4) {
                icons.src = '../assets/images/herir1.png';
            }
        }
    }

    updatePanel(array) {
        console.log('array que llega: ', array);
        let lowbar = document.querySelectorAll('.lowbar-style');
        console.log('Lista de nodos: ', lowbar);
        let newLowBars = Array.from(lowbar);
        console.log('New Array', newLowBars);
        for (let index = 0; index < array.length; index++) {
            newLowBars[index].textContent = array[index]
        }

    }


}

export { Panel };
