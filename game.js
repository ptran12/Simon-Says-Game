 var gamePattern = [];
 var buttonColors = ["Red", "Green", "Blue", "Yellow"];

 function newSequence() {
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor)
   console.log(randomChosenColor);
}
 

newSequence();
console.log(gamePattern);

// test git 