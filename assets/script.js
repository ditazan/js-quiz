var quizArea = $("#quiz-area");
var colorButtons = $(".butt-options");
// var score = "";

var colorButton = "";

const randomColor = Math.floor(Math.random()*16777215).toString(16);

var buttons = ["wrong", "wrong", "wrong", "right"];


function makeColorButtons(c) {
  for (var i = 0; i < c.length; i++) {
    $(".butt-options").append(
      '<button class= "btn color-btn ' + c[i] + '">  .......  </button>'
      
    );
  }
}

var timerEl = $("#timer");

function countdown() {
  var timeLeft = 10;
  var scoreBtnEl = "";

  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.text("time : " + timeLeft);
      timeLeft--;
    } else if (timeLeft === 0) {
      timerEl.text("time : " + timeLeft);
      clearInterval(timeInterval);
      $("h1").text("Times up !");
      $("p").text("Your scored a : " );
      
    }
    
  }, 1000);
}



function start() {
  var startPrompt = $(
    "<p id= 'start-prompt' class='text-light text-center'> Test your eyes by selecting the odd color out. </p>"
  );
  startPrompt.insertAfter("h1");
  var startBtn = $(
    "<button id ='start-btn' class='btn btn-warning'> Start </button>"
  );
  startBtn.appendTo(".butt-options");
}

start();

$(".butt-options").on("click", "#start-btn", function () {
$("#start-btn").remove();
  $("#start-prompt").remove();
  makeColorButtons(buttons);
  countdown();
});
