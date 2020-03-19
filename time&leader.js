var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScorePrint = document.querySelector("#highScorePrint");
var clearHighScore = document.querySelector("#clear");



window.addEventListener("load", function(){printHighScore()});

function printHighScore() {
    highscores = scoresSorted(highscores, 'score');
    

    for (var i = 0; i < highscores.length; i++) {
      console.log(highscores[i].score);
      var home = document.createElement("li"); 
      var words = document.createTextNode(highscores[i].initials + ": " + highscores[i].score)  ; 
      home.appendChild(words);
      highScorePrint.appendChild(home);
    }
}


function scoresSorted(array, key) {
  return array.sort(function(a,b) {
    if (a.score < b.score) {
      return 1;
    }
    return -1;
  });
}


clearHighScore.addEventListener("click", function() {
    localStorage.removeItem("highscores");
    window.location.reload();
});


// Timer //
var userName = document.querySelector("#userName");
var endMsg = document.querySelector("#endMsg");
var yourScore = document.querySelector("#yourScore");

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var submitBtn = document.querySelector("#submitNameScore");
var secondsLeft = 91;

function startTimer () {

  var interval = setInterval(function() {
    secondsLeft--;
    document.querySelector("#counterDisplay").innerHTML = secondsLeft;
    console.log(secondsLeft);
    
    
    if (secondsLeft === 0) {
      clearInterval(interval);
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
     
      document.querySelector("#boxThree").setAttribute("style", "display: block");
    } else if (currentIndex === 5) {
      clearInterval(interval); 
      
      document.querySelector("#boxTwo").setAttribute("style", "display: none");
    
      document.querySelector("#boxFour").setAttribute("style", "display: block");
      
    
      score = ((score)*(secondsLeft));
      
      if (isNaN(score)) {
        yourScore.innerHTML = "Your score is: 0";
      } else {
        endMsg.innerHTML = "You made it to the end!";
        yourScore.innerHTML = "Your score is: " + score;
      }
    }
  }, 1000) 
}




submitBtn.addEventListener("click", function(event) {
  event.stopPropagation();

 
  var initials = userName.value;
  console.log("initials" + initials);

  var finalScore = {
    initials, 
    score
  };
  console.log("finalScore" + finalScore);
  
  
  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(initials, score);
});