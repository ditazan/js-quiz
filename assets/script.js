

var timeLeft = 2;
var backBtn = $(
  "<button id ='back-btn' class='btn btn-warning'> Back </button>"
);
var startBtn = $(
  "<button id ='start-btn' class='btn btn-warning'> Start </button>"
);

var users = {};
var score = 0;
var baseColor = "";
var pickColor = "";

function makeColorButtons() {
  $("#container").show();

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  baseColor = "rgb(" + r + ", " + g + ", " + b + ")";

  var R = r + Math.floor(Math.random() * 50);
  var G = g + Math.floor(Math.random() * 50);
  var B = b + Math.floor(Math.random() * 50);
  pickColor = "rgb(" + R + ", " + G + ", " + B + ")";

  var answerSquare = $(".square")[Math.floor(Math.random() * 6)];

  $(".square").each(function (i) {
    this.style.background = baseColor;
  });

  answerSquare.style.background = pickColor;
}

var timerEl = $("#timer");

var saveScore = function () {
  localStorage.setItem("users", JSON.stringify(users));
};

var loadScore = function () {
  users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    users = {
      name: [],
      score: []
    };
  }

  $.each(users, function (list, arr) {
    console.log(list, arr);
    arr.forEach(function (user) {
      createUser(user.name, user.score, list);
    });
  });
};

function end() {
  
  $(".butt-options").empty();
  var scoreBtn = $(
    "<button id ='score-btn' class='btn btn-warning'> Submit </button>"
  );
  $("h1").text("Times up !");
  $("#start-prompt").text("Your score : " + score);
  $("#wrong").remove();
  $(".color-btn").remove();
  var initialsForm = $("<form class='mb-3 w-100 text-center'>Enter Your Initials : <input type='text'></form>");
  initialsForm.appendTo(".butt-options");
  backBtn.appendTo(".butt-options");
  scoreBtn.appendTo(".butt-options");

  
  

  $(".butt-options").on("click", "#score-btn", function () {
    var name = $("input").val();
    console.log(name);
    if (!name) {
      alert("please submit your initials");
      return false;
    } else {
      saveScore();
      highscorePg();
    }
  });
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

var createUser = function (name, score) {
    $("<li>" + name + " " + score + "</li>").appendTo("ol");
 
};

var highscorePg = function hsPg() {
  
  $(".butt-options").empty();
  $("header").remove();
  $("p").remove();
  $("h1").text("Highscores :");
  $(
    "<ol class= 'list-group list-group-numbered w-100 mb-3 text-center'> </ol>"
  ).appendTo(".butt-options");
  $("ol").after(backBtn);
  $("ol").after(
    "<button id ='clear-btn' class='btn btn-warning'> Clear </button>"
  );
  createUser(users.name, users.score);
};

start();

$("header").on("click", "#view-hs", function () {
  highscorePg();
});

$(".butt-options").on("click", "#start-btn", function () {
  makeColorButtons();
  countdown();
});

$(".butt-options").on("click", ".square", function (event) {
  if (event.target.style.background === pickColor) {
    score++;
    $("#wrong").remove();
  } else {
    $("<p id ='wrong' class='text-light'>Wrong !</p>").appendTo("#quiz-area");
    console.log("wrong");
  }
  makeColorButtons();
});

$(".butt-options").on("click", "#back-btn", function () {
  location.reload();
});

$(".butt-options").on("click", "#clear-btn", function () {
  $("ol").empty();
  localStorage.clear();
});
