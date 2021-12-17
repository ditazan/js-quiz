

//////// 
var timer = $("#timer");
console.log(timer.val());
var quizArea = $("#quiz-area");
var colorButtons = $(".butt-options");

var colorButton = "";

var buttons = ["$yellow-300", "$yellow-300", "$yellow-300", "$yellow-400"];

function makeColorButtons(c) {
  for (var i = 0; i < c.length; i++) {
    $('.butt-options').append('<button class=' + c[i] + '>' + "color" +
      '</button>');
  }
}

makeColorButtons(buttons);