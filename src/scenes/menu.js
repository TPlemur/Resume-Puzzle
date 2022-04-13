class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload(){
        this.load.html("form","src/form.html")
    }
    create(){
        this.titleText = this.add.text(screenWidth/2, screenHeight/2 - 410, 'Welcome', textConfig).setOrigin(0.5);

        this.nameInput = this.add.dom(screenWidth/2, screenHeight/2).createFromCache("form");
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.returnKey.on("down", event => {
            let name = this.nameInput.getChildByName("inputBox");
            if(name.value != "") {
                this.titleText.setText("Hello, " + name.value);
                name.value = "";
            }
        });
    }
    update(){
    }
}