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
    return this.rollScore;
  } else {
    this.rollScore = this.rollScore + roll;
    this.roll = roll;
  }
  return this.rollScore;
}

//add to total
Player.prototype.roundScore = function() {
  this.totalScore += this.rollScore;
  this.rollScore = 0;
}


$(document).ready(function() {
  $("#twoplayer").click(function() {
    var player1 = new Player("Player One", 0, 0, 0);
    var player2 = new Player("Player Two", 0, 0, 0);

    $("button#oneplayer").hide();
    $("button#twoplayer").hide();
    $("div#player1").show();
    $("div#player2").show();
    $("#roll_score2").text(player2.rollScore);
    $("#roll_score1").text(player1.rollScore);
    $("#total_score1").text(player1.totalScore);
    $("#total_score2").text(player2.totalScore);
    // $("#player2roll").off();

    //player 1
    $("button#player1roll").click(function() {
      // var roll = ;
      // Still need to evalute this if statement
      if (player1.diceRoll() === 0) {
        player1.roundScore();
        $("div#player1").addClass("lightgrey");
        $("div#player2").removeClass("lightgrey");
        // $("#player1roll").off();
        // $("#player2roll").on();
        $("button#player1roll").hide();
        $("button#player2roll").show();

      }
      var output = "&#x268" + (player1.roll - 1) + "; ";
      $("#roll_score1").fadeOut(300).fadeIn().val(player1.rollScore).text(player1.rollScore);
      document.getElementById('dice').innerHTML = output;

    });

    $("button#player1hold").click(function() {
      player1.roundScore();
      if (player1.totalScore >= 100) {
        $("div#player2").hide();
        $("div#player1").hide();
        $("div#playeronewins").show();
      }
      $("#total_score1").val(player1.totalScore).text(player1.totalScore);
      $("#roll_score1").val(player1.rollScore).text(player1.rollScore);
      $("div#player1").addClass("lightgrey");
      $("div#player2").removeClass("lightgrey");
      // $("#player1roll").off();
      // $("#player2roll").on();

    });

    $("button#player2roll").click(function() {
      if (player2.diceRoll() === 0) {
        player2.roundScore();
        $("div#player2").addClass("lightgrey");
        $("div#player1").removeClass("lightgrey");
        // $("#player2roll").off();
        // $("#player1roll").on();


      }
      $("#roll_score2").fadeOut(300).fadeIn().val(player2.rollScore).text(player2.rollScore);
    });

    $("button#player2hold").click(function() {
      player2.roundScore();
      if (player2.totalScore >= 100) {
        $("div#player2").hide();
        $("div#player1").hide();
        $("div#playertwowins").show();
      }
      $("#total_score2").val(player2.totalScore).text(player2.totalScore);
      $("#roll_score2").val(player2.rollScore).text(player2.rollScore);
      $("div#player1").removeClass("lightgrey");
      $("div#player2").addClass("lightgrey");
      // $("#player2roll").off();
      // $("#player1roll").on();



    });




  });

});
