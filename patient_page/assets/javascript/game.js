//define variables for game play
var winCount = 0;
var lossCount = 0;
var letterFont = 180;
var patientScore = "";
var round = 1;

// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

//prompt exam instructions
if (round == 1){
alert("Please cover you right eye, keep your head in the box when lighting green, proceed to complete the exam when ready");
}

//to connect to css variable
let root = document.documentElement;
//to change the font size value in css
root.style.setProperty('--fontSize', letterFont + "px");

// set up the computer to pick a random indexed value from aray for the random letters
var randomIndex = Math.floor(Math.random() * alphabet.length);
//getting the random variable
var computerChoice = alphabet[randomIndex];
//to display value in html
document.getElementById("computerChoice").innerHTML = computerChoice;
//display to console for debugging
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


    // if user is incorrect
    if (computerChoice != userChoice) {
      lossCount++;
      //to display value in html
      document.getElementById("lossCount").innerHTML = lossCount;
      //display to console for debugging
      console.log("Incorrect");
      //alert("Incorrect");
      
      //reset the leter with random one
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      //display to console for debugging
      console.log(computerChoice);
      //to display value in html
      document.getElementById("computerChoice").innerHTML = computerChoice;
    }

    //exam reset and end for left eye, reset all values
    if (lossCount == 3) {
      if (round == 1){
      alert("Thank you for taking the exam you scoreed " + patientScore + " on your left eye, now cover your left eye the exam will reset");
      round++
      //to reset letter font
      root.style.setProperty('--fontSize', (letterFont) + "px");
      winCount = 0;
      //to display value in html
      document.getElementById("winCount").innerHTML = winCount;
      lossCount = 0;
      //to display value in html
      document.getElementById("lossCount").innerHTML = lossCount;
      }
      if (round == 2){
      alert("Thank you for taking the exam you scoreed " + patientScore + " on your right eye, the exam is now finished and will be submitted to your doctor, feel free to take the exam again");
      //reset round for user to try the exam again
      round = 1;
      //to reset letter font
      root.style.setProperty('--fontSize', (letterFont) + "px");
      winCount = 0;
      //to display value in html
      document.getElementById("winCount").innerHTML = winCount;
      lossCount = 0;
      //to display value in html
      document.getElementById("lossCount").innerHTML = lossCount;
      }
    }


    // compares the randomly selected computer choice and user choice
    if (computerChoice === userChoice) {
      winCount++;
      console.log("Correct");
      //alert("Correct");
      document.getElementById("winCount").innerHTML = winCount;
      
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      document.getElementById("computerChoice").innerHTML = computerChoice;
    }

    console.log(winCount);
    //exam level increase
    switch(winCount) {
      case 1:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 40) + "px");
        console.log("shrink");
        patientScore = "20/200";
        console.log(patientScore);
        break;

      case 3:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 70) + "px");
        console.log("shrink");
        patientScore = "20/100";
        console.log(patientScore);
        break;

      case 6:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 100) + "px");
        patientScore = "20/70";
        console.log(patientScore);
        break;
      
      case 10:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 120) + "px");
        patientScore = "20/50";
        console.log(patientScore);
        break;

      case 15:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 140) + "px");
        patientScore = "20/40";
        console.log(patientScore);
        break;

      case 21:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 160) + "px");
        patientScore = "20/30";
        console.log(patientScore);
        break;

      case 28:
        //to change the font size value in css
        root.style.setProperty('--fontSize', (letterFont - 165) + "px");
        patientScore = "20/25";
        console.log(patientScore);
        break;
        
      case 36:
          //to change the font size value in css
        //root.style.setProperty('--fontSize', (letterFont - 170) + "px");
        patientScore = "20/20";
        console.log(patientScore);

        if (round == 1){
          alert("Congratulations you scored " + patientScore + " on your left eye, now cover your left eye the exam will reset");
          round++
          //to reset letter font
          root.style.setProperty('--fontSize', (letterFont) + "px");
          winCount = 0;
          //to display value in html
          document.getElementById("winCount").innerHTML = winCount;
          lossCount = 0;
          //to display value in html
          document.getElementById("lossCount").innerHTML = lossCount;
          break;
        }
        if (round == 2){
          alert("Congratulations you scored " + patientScore + " on your right eye, the exam is now finished and will be submitted to your doctor, feel free to take the exam again");
          }
        break;

      default:
        break;
    }
  }
