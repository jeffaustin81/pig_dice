//Making a contact Object prototype
function Player(playerName, rollScore, totalScore){
  this.playerName = playerName;
  this.rollScore = rollScore;
  this.totalScore = totalScore;
}

Player.prototype.diceRoll = function() {
  var roll = (1 + Math.floor(Math.random() * 6));
  if(roll === 1){
    this.rollScore = 0;
    return this.rollScore;
  }else{
  this.rollScore = this.rollScore + roll;
  }
  return this.rollScore;
}

Player.prototype.roundScore = function() {
  this.totalScore += this.rollScore;
  this.rollScore = 0;
}
