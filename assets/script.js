

var quizArea = $("#quiz-area");
var colorButtons = $(".butt-options");

var colorButton = "";

var buttons = ['btn-dark', 'btn-primary', 'btn-primary', 'btn-primary'];

function makeColorButtons(c) {
  for (var i = 0; i < c.length; i++) {
    $('.butt-options').append('<button class= "btn ' +c[i]+ '">  .......  </button>');
  }
}


var timerEl = $('#timer');

function countdown() {
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.text('time : ' + timeLeft);
        timeLeft--;
      } else if (timeLeft === 0) {
        timerEl.text('time : ' + timeLeft);
        clearInterval(timeInterval);
     
        
      }
    }, 1000);
  }

  countdown();
  makeColorButtons(buttons);

  console.log(timerEl);