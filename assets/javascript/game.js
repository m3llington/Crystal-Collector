$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 30 + 10);
    var score = 0;
    var redValue = Math.floor(Math.random() * 10) + 1;
    var greenValue = Math.floor(Math.random() * 10) + 1;
    var orangeValue = Math.floor(Math.random() * 10) + 1;
    var blueValue = Math.floor(Math.random() * 10) + 1;
    var wins = 0;
    var losses = 0;


    function resetfunction() {
        score = 0;
        targetNumber = 0 + Math.floor(Math.random() * 30 + 10);
        redValue = 0 + Math.floor(Math.random() * 10) + 1;
        greenValue = 0 + Math.floor(Math.random() * 10) + 1;
        orangeValue = 0 + Math.floor(Math.random() * 10) + 1;
        blueValue = 0 + Math.floor(Math.random() * 10) + 1;
        wins = 0 + wins;
        losses = 0 + losses;
        $("#target-number").text(targetNumber);
        $("#score-number").text(score);
        $("#win-number").text(wins);
        $("#lose-number").text(losses);
    };

    $("#target-number").text(targetNumber);
    $("#score-number").text(score);
    $("#win-number").text(wins);
    $("#lose-number").text(losses);

    $("#red-gem").on("click", function () {

        score += redValue;
        $("#score-number").text(score);
        console.log(redValue);
    });

    $("#green-gem").on("click", function () {

        score += greenValue;
        $("#score-number").text(score);
        console.log(greenValue);
    });

    $("#blue-gem").on("click", function () {

        score += blueValue;
        $("#score-number").text(score);
        console.log(blueValue);
    });

    $("#orange-gem").on("click", function () {

        score += orangeValue;
        $("#score-number").text(score);
        console.log(orangeValue);
    });


    $(".col-3").on("click", function () {

        if (score === targetNumber) {
            wins++;
            $("#win-number").text(wins);
            resetfunction();
        }

        else if (score > targetNumber) {
            losses++;
            $("lose-number").text(losses);
            resetfunction();
        }



    });


});

