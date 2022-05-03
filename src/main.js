//main.js
//creates the game object, and declairs global variables

//screen configs
const screenWidth = 1920;
const screenHeight = screenWidth*1.294;
let screenCenterX = screenWidth / 2;
let screenCenterY = screenHeight / 2;

//global vars:
debugToggle = false;

//standard text config
let menuConfig = {
    fontFamily: 'horror',
    fontSize: '100px',
    color: '#000000',
    align: 'center',
    padding: {
        top: 5,
        bottom: 5,
    }
}  

//standard text config
let textConfig = {
    fontFamily: 'horror',
    fontSize: '70px',
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
    parent: "game",
    width: screenWidth,
    height: screenHeight,
    dom:{
        createContainer: true
    },
    // scalse breaks
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene:[Menu],
    backgroundColor: 0xFFFFFF
}

//define the game
let game = new Phaser.Game(config);