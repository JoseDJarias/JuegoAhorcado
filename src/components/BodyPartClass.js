class BodyParts {
    constructor() {
        this.arrayImg = ['../assets/images/Hangman1.png', '../assets/images/Hangman2.png', '../assets/images/Hangman3.png', '../assets/images/Hangman4.png', '../assets/images/Hangman5.png', '../assets/images/Hangman6.png', '../assets/images/Hangman7.png'];
        this.imageContainerFather = document.querySelector('.image-container-father');
        this.imageElement = document.querySelector('.image-container');
        this.imageContainerFather.classList.add('hide-image');
        this.imageElement.classList.add('hide-image') ;

    }

    updateImg(attempts) {
        this.imageContainerFather.classList.remove('hide-image') ;
        this.imageElement.classList.remove('hide-image') ;
        this.imageElement.src = this.arrayImg[attempts]

    }
}

export { BodyParts };