class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.html("form","src/form.html")
        this.load.image('hintButton', './assets/Hbutton.png');
        this.load.image('background', './assets/EncodingScroll.png');
    }
    create(){

        //background image
        this.bgborder = this.add.sprite(screenCenterX, screenCenterY, 'background').setScale(2.23);

        //all the text
        this.titleText = this.add.text(screenWidth/2, screenHeight/2 - 810, 'Welcome', menuConfig).setOrigin(0.5);
        this.descriptionText = this.add.text(screenWidth/2, screenHeight/2 - 610, 'The goal of this puzzle is to find the correct passphrase.\nThe correct phrase is hidden both in my resume,\nand on this page.', textConfig).setOrigin(0.5);
        this.descriptionText = this.add.text(screenWidth/2, screenHeight/2 - 310, 'Please type the passphrase and press enter', textConfig).setOrigin(0.5);
        this.resultText = this.add.text(screenWidth/2, screenHeight/2 - 110, encrypt(""), textConfig).setOrigin(0.5);
        this.hintText = this.add.text(screenWidth/2, screenHeight/2 + 90, "", textConfig).setOrigin(0.5);
        
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
        this.launchBtn = this.add.sprite(screenCenterX, screenCenterY - 20, 'hintButton').setInteractive().setScale(0.9); //Initialize the button
        this.launchBtn.on('pointerdown', () => this.hintText.setText(randHint())); //What happens when you click   
    }
    update(){
    }
}