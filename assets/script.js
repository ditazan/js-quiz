var timeLeft = 2;

var quizArea = $("#quiz-area");
var colorButtons = $(".butt-options");
var score = "";

var colorButton = "";

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

var buttons = ["wrong", "wrong", "wrong", "right"];

function makeColorButtons(c) {
  $("#start-btn").remove();
  for (var i = 0; i < c.length; i++) {
    $(".butt-options").append(
      '<button class= "btn color-btn ' + c[i] + '">  .......  </button>'
    );
  }
}

var timerEl = $("#timer");

function end() {
  var scoreBtn = $(
    "<button id ='score-btn' class='btn btn-warning'> Submit </button>"
  );
  $("h1").text("Times up !");
  $("p").text("Your scored a : " + score);
  $(".color-btn").remove();
  var initials = $("<form> Enter Your Initials : <input type='text'></form>");
  initials.appendTo(".butt-options");
  scoreBtn.appendTo(".butt-options");
}

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.text("time : " + timeLeft);
      timeLeft--;
    } else if (timeLeft === 0) {
      timerEl.text("time : " + timeLeft);
      clearInterval(timeInterval);
      end();
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

var highscorePg = function hsPg() {
  $(".butt-options").empty();
  $("header").remove();
  $("p").remove();
  $("h1").text("Highscores :");
  $(
    "<ol class= 'list-group list-group-numbered w-100 mb-3 text-center'> <li class='list-group-item'>placeholder</li> <li class='list-group-item'>placeholder</li> </ol>"
  ).appendTo(".butt-options");
  $("ol").after(
    "<button id ='back-btn' class='btn btn-warning'> Back </button>"
  );
  $("ol").after(
    "<button id ='clear-btn' class='btn btn-warning'> Clear </button>"
  );
};

start();

$(".butt-options").on("click", "#start-btn", function () {
  makeColorButtons(buttons);
  countdown();
});

$(".butt-options").on("click", "#score-btn", function () {
  highscorePg();
});

$(".butt-options").on("click", "#back-btn", function () {
  location.reload();
});

$(".butt-options").on("click", "#clear-btn", function () {
  $("ol").empty();
});
