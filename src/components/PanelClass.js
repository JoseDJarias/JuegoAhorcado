
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
        console.log('Weyy',array);
        let lowbar = document.querySelectorAll('.lowbar-style');
        let newLowBars = Array.from(lowbar);
        for (let index = 0; index < array.length; index++) {
            newLowBars[index].textContent = array[index]
        }
    };

}

export { Panel };
