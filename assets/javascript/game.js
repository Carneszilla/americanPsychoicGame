$(document).ready(function(){
  var letters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var guesses = 10;
  var wins = 0;
  var losses = 0;
  var computerGuess;

function guessMastery() {
// Store random letter chosen from array 'letters' to computerGuess
    computerGuess = letters[Math.floor(Math.random() * 
    letters.length)];
    console.log(computerGuess);
  }

guessMastery();

  document.onkeyup = function(event) {
    // updates guesses# displayed on browser
    $("#guesses").html(guesses);

    // Store letter/key user pressed
    var userGuess = event.key;


    

    // how wins & losses should increment based on userguess/computerguess
    if (userGuess === computerGuess) {
      wins++;
      console.log(wins);
      guesses = 10;
      console.log(guesses);
      guessMastery();
      } 


    else {
      guesses--;
      console.log(guesses);
      }

     if (guesses < 1) {
        losses++;
        console.log(losses);
        guesses = 10;
        console.log(guesses);
        guessMastery();
      }


    var html = 
    "<h4>Wins: " + wins + "</h4>" +
    "<h4>Losses: " + losses + "</h4>" +
    "<h4>Guesses Left: " + guesses + "</h4>" +
    "<h6>You're PROBABLY wrong: " + userGuess + "</h6>";
   

    document.querySelector("#info").innerHTML = html;
  }

});