//Making a player Object
function Player(playerName, rollScore, totalScore) {
  this.playerName = playerName;
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
    var player1 = new Player("Player One", 0, 0);
    var player2 = new Player("Player Two", 0, 0);

    $("button#oneplayer").hide();
    $("button#twoplayer").hide();
    $("div#player1").show();
    $("#roll_score2").text(player2.rollScore);
    $("#roll_score1").text(player1.rollScore);
    $("#total_score1").text(player1.totalScore);
    $("#total_score2").text(player2.totalScore);

    //player 1
    $("button#player1roll").click(function() {
      // player1.diceRoll();
      // Still need to evalute this if statement
      if(player1.diceRoll() === 0) {
          player1.roundScore();
          // $("#total_score1").val(player1.totalScore).text(player1.totalScore);
          // $("#roll_score2").val(player2.rollScore).text(player2.rollScore);
          $("div#player1").hide();
          $("div#player2").show();
      }
      $("#roll_score1").fadeOut(300).fadeIn().val(player1.rollScore).text(player1.rollScore);
    });

    $("button#player1hold").click(function() {
      player1.roundScore();
      $("#total_score1").val(player1.totalScore).text(player1.totalScore);
      $("#roll_score2").val(player2.rollScore).text(player2.rollScore);
      $("div#player1").hide();
      $("div#player2").show();
    });

    $("button#player2roll").click(function() {
      player2.diceRoll();
      $("#roll_score2").fadeOut(300).fadeIn().val(player2.rollScore).text(player2.rollScore);
    });

    $("button#player2hold").click(function() {
      player2.roundScore();
      $("#total_score2").val(player2.totalScore).text(player2.totalScore);
      $("#roll_score1").val(player1.rollScore).text(player1.rollScore);
      $("div#player2").hide();
      $("div#player1").show();
    });


  });

});
