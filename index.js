function randomizer() {
  var randomNum1 = Math.ceil(Math.random() * 6);
  var dice1 = document.querySelector("#dice-1 img");
  var imgSrc1 = "images/dice" + randomNum1 + ".png";
  dice1.setAttribute("src", imgSrc1);

  var randomNum2 = Math.ceil(Math.random() * 6);
  var dice2 = document.querySelector("#dice-2 img");
  var imgSrc2 = "images/dice" + randomNum2 + ".png";
  dice2.setAttribute("src", imgSrc2);

// For Announcing the winner
  function winner(){
    var heading = document.querySelector("h1");
    if(randomNum1===randomNum2){
        heading.innerHTML = "Draw🫠";
    }
    else if(randomNum1<randomNum2){
        heading.innerHTML = player1+" Wins🚩";
    }
    else{
        heading.innerHTML = player2+" Wins🚩";
    }
  }
  winner();
  document.querySelector(".button").textContent = "Reroll";
}
var player1 = prompt("Enter Name of Player 1 : ");
var player2 = prompt("Enter Name of Player 2 : ");
document.querySelector(".player-1 p").textContent = player1;
document.querySelector(".player-2 p").textContent = player2;

