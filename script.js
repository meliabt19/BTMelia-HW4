var startQuiz = document.querySelector("#startQuiz");
var quizBtn = document.querySelectorAll(".quizBtn");
var currentIndex = 0;



var score = 0;


startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    startTimer();
    console.log("Current Index at startQuiz click" + currentIndex);
    document.querySelector("#boxOne").style.display = "none"; 
    
    document.querySelector("#boxTwo").style.display = "block";
    showQs();
});

function showQs() {
    var question = quizQs[currentIndex];
    
    document.querySelector("#title").innerHTML = question.title;
    document.querySelector("#chA").innerHTML = question.choices[0];
    document.querySelector("#chB").innerHTML = question.choices[1];
    document.querySelector("#chC").innerHTML = question.choices[2];
    document.querySelector("#chD").innerHTML = question.choices[3];
}

for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
        event.stopPropagation();
        
        if(event.currentTarget.innerText === quizQs[currentIndex].answer){
            score++;
            console.log(score);
            
            document.querySelector("#checkAns").innerHTML = "correct";
        } else {
            document.querySelector("#checkAns").innerHTML = "wrong";
            secondsLeft = secondsLeft - 15;
        }
        console.log("Current Index before ++" + currentIndex);
        currentIndex++;
        
        if (currentIndex < 5) {
        showQs();
        }
    });
}
  
var quizQs = [
    {
        title: "NaN stands for: ",
        choices: ["Numbers-aNonymous", "Not-any-Nannies", "Not-a-Number", "No-absolutely-Not"],
        answer: "Not-a-Number"
    },
    {
        title: "An array is enclosed in: ",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "square brackets"
    },
    {
        title: "Who created Javascript: ",
        choices: ["Steve Jobs", "Brendan Eich", "Bill Gates", "Sid Meier"],
        answer: "Brendan Eich"
    },
    {
        title: "The greater than/or equal operator is: ",
        choices: [">>", "<=", "+=", ">="],
        answer: ">="
    },
    {
        title: "Which data type isn't suppoerted by Javascript: ",
        choices: ["number", "symbol", "string", "primitive"],
        answer: "primitive"
    },
  ];