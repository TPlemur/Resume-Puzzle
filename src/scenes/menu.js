class Menu extends Phaser.Scene {
    constructor(){
        super('menuScene')
    }

    preload(){
    }
    create(){
        this.titleText = this.add.text(screenWidth/2, screenHeight/2 - 410, 'Welcome', textConfig).setOrigin(0.5);
    }
    update(){
    }
}