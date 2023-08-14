class BodyParts {
    constructor() {
        this.arrayImg = ['../assets/images/Hangman1.png', '../assets/images/Hangman2.png', '../assets/images/Hangman3.png', '../assets/images/Hangman4.png', '../assets/images/Hangman5.png', '../assets/images/Hangman6.png', '../assets/images/Hangman7.png'];
        this.imageContainerFather = document.querySelector('.image-container-father');
        this.imageElement = document.querySelector('.image-container');
        this.imageContainerFather.className = 'hide-image'
        this.imageElement.className = 'hide-image'

    }

    updateImg(attempts) {
        this.imageContainerFather.className = 'image-container-father'
        this.imageElement.className = 'image-container'
        this.imageElement.src = this.arrayImg[attempts]

    }
}

export { BodyParts };