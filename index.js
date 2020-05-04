
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // short-hand for line4 and line6

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // short-hand for line8 and line 10


//dice game result
 if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
 }
 else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 }
 else {
   document.querySelector("h1").innerHTML = "🚩 It's a Tie! 🚩";
 }
