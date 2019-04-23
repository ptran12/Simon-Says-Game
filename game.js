 var gamePattern = [];
 var buttonColors = ["Red", "Green", "Blue", "Yellow"];
 var userClickedPattern = [];

 function newSequence() {
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor)
  //  console.log(randomChosenColor);

  // $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  // audio.play();
    
}
 
$(".btn").click(function(event){
  var userChosenColor = event.target.id
  console.log(userChosenColor);
});

newSequence();
console.log(gamePattern);
