//Making a player Object
function Player(playerName, roll, rollScore, totalScore) {
    this.playerName = playerName;
    this.roll = roll;
    this.rollScore = rollScore;
    this.totalScore = totalScore;
}

//Dice rolling prototype
Player.prototype.diceRoll = function() {
    var roll = (1 + Math.floor(Math.random() * 6));
    if (roll === 1) {
        this.rollScore = 0;
        var zero = "&#x2680; ";
        document.getElementById('dice').innerHTML = zero;
        return this.rollScore;
    } else {
        this.rollScore = this.rollScore + roll;
        this.roll = roll;
    }
    return this.rollScore;
};

//add to total
Player.prototype.roundScore = function() {
    this.totalScore += this.rollScore;
    this.rollScore = 0;
};


$(document).ready(function() {
    var player1 = new Player("Player One", 0, 0, 0);
    var player2 = new Player("Player Two", 0, 0, 0);

    $("#oneplayer").hide();
    $("#twoplayer").hide();
    $("#player1").show();
    $("#player2").show();
    $("#roll_score2").text(player2.rollScore);
    $("#roll_score1").text(player1.rollScore);
    $("#total_score1").text(player1.totalScore);
    $("#total_score2").text(player2.totalScore);
    $("#player2roll").hide();
    $("#player2hold").hide();

    //player 1
    $("#player1roll").click(function() {

        if (player1.diceRoll() === 0) {
            player1.roundScore();
            var zero = "&#x2680; ";
            document.getElementById('dice').innerHTML = zero;
            $("#player1").addClass("lightgrey");
            $("#player2").removeClass("lightgrey");
            $("#player1roll").hide();
            $("#player1hold").hide();
            $("#player2roll").show();
            $("#player2hold").show();
        }

        if (player1.roll !== 0) {
            var output = "&#x268" + (player1.roll - 1) + "; ";
            document.getElementById('dice').innerHTML = output;
        }

        $("#dice").addClass("animated flip").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flip');
        });

        $("#roll_score1").fadeOut(300).fadeIn().val(player1.rollScore).text(player1.rollScore);
    });

    $("#player1hold").click(function() {
        player1.roundScore();

        if (player1.totalScore >= 100) {
            $("#player2").hide();
            $("#player1").hide();
            $("#playeronewins").show();
            $("#playeronewins").addClass("animated bounceInLeft");
            $("#dice").addClass("animated infinite flip");
        }

        $("#total_score1").val(player1.totalScore).text(player1.totalScore);
        $("#roll_score1").val(player1.rollScore).text(player1.rollScore);
        $("#player1").addClass("lightgrey");
        $("#player2").removeClass("lightgrey");
        $("#player1roll").hide();
        $("#player1hold").hide();
        $("#player2roll").show();
        $("#player2hold").show();

    });

    $("#player2roll").click(function() {
        if (player2.diceRoll() === 0) {
            player2.roundScore();
            $("#player2").addClass("lightgrey");
            $("#player1").removeClass("lightgrey");
            $("#player2roll").hide();
            $("#player2hold").hide();
            $("#player1roll").show();
            $("#player1hold").show();
        }

        if (player2.roll !== 0) {
            var output = "&#x268" + (player2.roll - 1) + "; ";
            $("#dice").fadeOut(5).fadeIn();
            document.getElementById('dice').innerHTML = output;
        }

        $("#dice").addClass("animated flip").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flip');
        });

        $("#roll_score2").fadeOut(300).fadeIn().val(player2.rollScore).text(player2.rollScore);
    });

    $("#player2hold").click(function() {
        player2.roundScore();

        if (player2.totalScore >= 100) {
            $("#player2").hide();
            $("#player1").hide();
            $("#playertwowins").show();
            $("#playertwowins").addClass("animated bounceInLeft");
            $("#dice").addClass("animated infinite flip");
        }

        $("#total_score2").val(player2.totalScore).text(player2.totalScore);
        $("#roll_score2").val(player2.rollScore).text(player2.rollScore);
        $("#player1").removeClass("lightgrey");
        $("#player2").addClass("lightgrey");
        $("#player2roll").hide();
        $("#player2hold").hide();
        $("#player1roll").show();
        $("#player1hold").show();
    });
});
