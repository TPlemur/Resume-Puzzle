class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.html("form","src/form.html")
    }
    create(){
        this.titleText = this.add.text(screenWidth/2, screenHeight/2 - 410, 'Welcome', menuConfig).setOrigin(0.5);
        this.descriptionText = this.add.text(screenWidth/2, screenHeight/2 - 310, 'Please input the code below', textConfig).setOrigin(0.5);
        this.resultText = this.add.text(screenWidth/2, screenHeight/2 - 110, encrypt(""), textConfig).setOrigin(0.5);
        

        this.nameInput = this.add.dom(screenWidth/2, screenHeight/2 - 210).createFromCache("form");
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        //passPhrase:
        // distinctgreenpandaeatingbamboo
        this.returnKey.on("down", event => {
            let name = this.nameInput.getChildByName("inputBox");
            if(encrypt(name.value) == "pdssdfuusbfhu"){
                this.resultText.setText("Congradulations")
            }
            else if(encrypt(name.value) === "eofbubojchnbpceptjjudohufsofbq") {
                this.resultText.setText("Nice Try");
            }
            else{
                this.resultText.setText("Sorry, wrong answer")
            }
        });
    }
    update(){
    }
}