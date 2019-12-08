//define variables for game play
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 1;
var guessedLetters = [];

//to generate a random font number for the exam letters
var randomFont = Math.floor(Math.random() *200 + 10);
console.log(randomFont);
//to connect to css variable
let root = document.documentElement;
//to change the font size value in css
root.style.setProperty('--fontSize', randomFont + "px");

// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

//to display value in html
document.getElementById("computerChoice").innerHTML = computerChoice;
console.log(computerChoice);

// add a listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;


  // make sure the user selects a value a-z
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(userChoice);
    }


    // reset computer choice if the user loses
    if (computerChoice != userChoice) {
      lossCount++;
      document.getElementById("lossCount").innerHTML = lossCount++;
      console.log("Incorrect");
      //alert("Incorrect");
      guessesRemaining = 1;
      guessedLetters = [];
      
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      document.getElementById("computerChoice").innerHTML = computerChoice;

      //to generate a random font number for the exam letters
      var randomFont = Math.floor(Math.random() *200 + 10);
      console.log(randomFont);
      //to change the font size value in css
      root.style.setProperty('--fontSize', randomFont + "px");
    }


    // compares the randomly selected computer choice and user choice
    if (computerChoice === userChoice) {
      console.log("Correct");
      //alert("Correct");
      document.getElementById("winCount").innerHTML = winCount++;
      guessedLetters = [];
      
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      document.getElementById("computerChoice").innerHTML = computerChoice;
      guessesRemaining = 1;

      //to generate a random font number for the exam letters
      var randomFont = Math.floor(Math.random() *200 + 10);
      console.log(randomFont);
      //to change the font size value in css
      root.style.setProperty('--fontSize', randomFont + "px");
    } 
}
