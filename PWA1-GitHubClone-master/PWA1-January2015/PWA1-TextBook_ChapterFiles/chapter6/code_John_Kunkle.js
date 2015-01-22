//John Kunkle
/*
var access = document.getElementById("code9");//accesses the html ID code 9
var code = access.innerHTML; //set a var to catch access.innerHTML
code = code + " midnight"; //uses var code
alert(code);
*/
function init() {

    var myGreenText = document.getElementById("mygreentext");
    myGreenText.innerHTML = "John's 4th GREEN Alert: hit by phaser fire!";
    myGreenText.setAttribute("class", "greentext");

    var myGreenPlanet = document.getElementById("mygreenplanet");
    myGreenPlanet.innerHTML = "Green Planet";
    myGreenPlanet.setAttribute("class", "greentext");

    var myRedText = document.getElementById("myredtext");
    myRedText.innerHTML = "John's 4th RED Alert: hit by phaser fire!";
    myRedText.setAttribute("class", "redtext");

    var myRedPlanet = document.getElementById("myredplanet");
    myRedPlanet.innerHTML = "Red Planet";
    myRedPlanet.setAttribute("class", "redtext");

    var myBlueText = document.getElementById("mybluetext");
    myBlueText.innerHTML = "John's BLUE Alert: hit by phaser fire!";
    myBlueText.setAttribute("class", "bluetext");

    var myBluePlanet = document.getElementById("myblueplanet");
    myBluePlanet.innerHTML = "Blue Planet";
    myBluePlanet.setAttribute("class", "bluetext");
}
window.onload = init;
