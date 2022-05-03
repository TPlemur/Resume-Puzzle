class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.html("form","src/form.html")
    }
    create(){
        //all the text
        this.titleText = this.add.text(screenWidth/2, screenHeight/2 - 410, 'Welcome', menuConfig).setOrigin(0.5);
        this.descriptionText = this.add.text(screenWidth/2, screenHeight/2 - 310, 'Please input the Passphrase below', textConfig).setOrigin(0.5);
        this.resultText = this.add.text(screenWidth/2, screenHeight/2 - 110, encrypt(""), textConfig).setOrigin(0.5);
        this.hintText = this.add.text(screenWidth/2, screenHeight/2 - 10, "", textConfig).setOrigin(0.5);
        
        //input box
        this.nameInput = this.add.dom(screenWidth/2, screenHeight/2 - 210).createFromCache("form");
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        //answer detection
        //passPhrase:
        // distinctgreenpandaeatingbamboo
        this.returnKey.on("down", event => {
            let name = this.nameInput.getChildByName("inputBox");
            if(encrypt(name.value) == "sgfjeoitqjpnjubwjuopvc{{pxusziutbscxsfzs"){
                this.resultText.setText("Congradulations")
            }
            else if(encrypt(name.value) === "eofbubojchnbpceptjjudohufsofbq") {
                this.resultText.setText("Nice Try");
            }
            else{
                this.resultText.setText("Sorry, wrong answer")
            }
        });

        //hint button
        this.launchBtn = this.add.sprite(screenCenterX, screenCenterY - 120, 'launchButton').setInteractive().setScale(0.9); //Initialize the button
        this.launchBtn.on('pointerdown', () => this.hintText.setText(randHint())); //What happens when you click   
    }
    update(){
    }
}