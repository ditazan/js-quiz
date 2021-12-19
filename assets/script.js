var timeLeft = 10;
var backBtn = $(
  "<button id ='back-btn' class='btn btn-warning'> Back </button>"
);
var startBtn = $(
  "<button id ='start-btn' class='btn btn-warning'> Start </button>"
);

var score = "";

function makeColorButtons() {
  $("#container").show();
 

  var pickColor = function(){
    //pick a "red" from 0-255
    r = r+ math.floor(math.random()*10);
    //pick a "green" from 0-255
    g = g+ math.floor(math.random()*10);
    //pick a "blue" from 0-255
    b = b+ math.floor(math.random()*10);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  }


    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

   var baseColor = "rgb(" + r + ", " + g + ", " + b + ")";
  
   $(".square").each(function (i) {
    this.style.background = baseColor;
  });
}

var timerEl = $("#timer");

function end() {
  $(".butt-options").empty();
  var scoreBtn = $(
    "<button id ='score-btn' class='btn btn-warning'> Submit </button>"
  );
  $("h1").text("Times up !");
  $("p").text("Your scored a : " + score);
  $(".color-btn").remove();
  var initials = $(
    "<form class='mb-3 w-100 text-center'>Enter Your Initials : <input type='text'></form>"
  );
  initials.appendTo(".butt-options");
  backBtn.appendTo(".butt-options");
  scoreBtn.appendTo(".butt-options");
}

function countdown() {
  startBtn.remove();
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
  $("#container").hide();
  var startPrompt = $(
    "<p id= 'start-prompt' class='text-light text-center'> Test your eyes by selecting the odd color out. </p>"
  );
  startPrompt.insertAfter("h1");

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
  $("ol").after(backBtn);
  $("ol").after(
    "<button id ='clear-btn' class='btn btn-warning'> Clear </button>"
  );
};

start();

$("header").on("click", "#view-hs", function () {
  highscorePg();
});

$(".butt-options").on("click", "#start-btn", function () {
  makeColorButtons();
  countdown();
});

$(".butt-options").on("click", ".square", function () {
  makeColorButtons();
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
  localStorage.clear();
});
