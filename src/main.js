//main.js
//creates the game object, and declairs global variables

//screen configs
const screenWidth = 1920;
const screenHeight = 1080;
let screenCenterX = screenWidth / 2;
let screenCenterY = screenHeight / 2;

//global vars:
debugToggle = false;

//standard text config
let textConfig = {
    fontFamily: 'horror',
    fontSize: '100px',
    color: '#000000',
    align: 'center',
    padding: {
        top: 5,
        bottom: 5,
    }
}  

//game config
let config = {
    type: Phaser.AUTO,
    width: screenWidth,
    height: screenHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene:[Menu],
    physics:{
        default:'arcade',
        arcade:{
            gravity: {y:1600},
            debug: debugToggle
            
        }
    },
    backgroundColor: 0xFFFFFF
}

//define the game
let game = new Phaser.Game(config);