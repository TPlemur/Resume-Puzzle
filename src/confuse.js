//smush the text around a bit, just to discourage actualy getting the password out of the source code
function encrypt (inString){
    outString = inString;
    for(i=0;i<inString.length;i++){outString=outString.substring(0,i)+String.fromCharCode(outString.charCodeAt(i)+1)+outString.substring(1+i);}
    for(i=0;i<inString.length;i++){outString=outString.substring(i)+outString.substring(0,i);}
    for(i=0;i<inString.length -1;i+=2){outString=outString.substring(0,i)+outString[i+1]+outString[i]+outString.substring(i+2);}
    return outString;
}

//returns a random hint from the list
function randHint(){
    var hints = [
        "I'm sure you'll get around to the answer eventually.",
        "I hope this puzzle doesn't have you bordering on madness.",
        "If androids dream of electric sheep, \ncould one count to 26 before falling asleep?",
        "I could really go for some Bacon right now.",
        "If you're desparate you could always try inspect element.",
        "Don't feel left behind, \nI'm sure you're heading right on track.",
        "If you feel like your going round in circles, \ndon't worry, you are closer than you think",
        "Zeros stay where they are, don't be a zero, \nget out there and do something."
    ];
    return hints[Math.floor(Math.random()*hints.length)];
}