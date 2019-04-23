 var gamePattern = [];
 var buttonColors = ["Red", "Green", "Blue", "Yellow"];
 var userClickedPattern = [];


$(".btn").click(function(event){
  var userChosenColor = event.target.id
  // console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern)

  playSound(userChosenColor);

  animatePress(userChosenColor);

});

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  
}

// function to play the sound 

function playSound (name) {

  $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
}
