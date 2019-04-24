 var gamePattern = [];
 var buttonColors = ["Red", "Green", "Blue", "Yellow"];
 var userClickedPattern = [];

 var started = false;
 var level = 0;

 $(document).keypress(function() {
  if(!started) {
    
    $("#level-title").text("Level " + level);
    newSequence();
    started = true;
  }
});


$(".btn").click(function(event){
  var userChosenColor = event.target.id
  // console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern)

  playSound(userChosenColor);

  animatePress(userChosenColor);

});


function newSequence() {

  level++;

  $("#level-title").text("Level " + level);

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

// Press Animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },100);
}
