$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 20 + 10);
    var score = 0 + score;
    var redValue = Math.floor(Math.random() * 10);


    $("#target-number").text(targetNumber);
    $("#score-number").text(score);

    $("#red-gem").on("click", function () {

        var jewelNumber;
        jewelNumber = Math.floor(Math.random() * 10);

        jewelNumber = $("#test-click")


    });

    if (score > targetNumber) {
        alert("You lose!");
    };

   if (score === targetNumber) {
       alert("You win!");
   }

});

