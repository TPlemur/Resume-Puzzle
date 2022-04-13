//smush the text around a bit, just to discourage actualy getting the password out of the source code
function encrypt (inString){
    outString = inString;
    for(i=0;i<inString.length;i++){outString=outString.substring(0,i)+String.fromCharCode(outString.charCodeAt(i)+1)+outString.substring(1+i);}
    for(i=0;i<inString.length;i++){outString=outString.substring(i)+outString.substring(0,i);}
    for(i=0;i<inString.length -1;i+=2){outString=outString.substring(0,i)+outString[i+1]+outString[i]+outString.substring(i+2);}
    return outString;
}