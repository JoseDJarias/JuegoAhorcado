class BodyParts{
    constructor(){
        this.arrayImg = ['../assets/images/Hangman1.png','../assets/images/Hangman2.png','../assets/images/Hangman3.png'];
        this.imageElement = document.querySelector('.image-container');
    }

    updateImg(attempts){
        
        this.imageElement.src = this.arrayImg[attempts] 
        
        // decidir como mostrar las images
    }


}

export{BodyParts};