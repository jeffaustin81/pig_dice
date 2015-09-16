describe('Player', function() {
  it("will get a player name, roll score, total score", function(){
    var testPlayer = new Player("Jeff", 24, 60);
    expect(testPlayer.playerName).to.equal("Jeff");
    expect(testPlayer.rollScore).to.equal(24);
    expect(testPlayer.totalScore).to.equal(60);
  });

  it("will add roll score to total score", function() {
    debugger;
    var testPlayer = new Player("Alex", 0, 0);
    testPlayer.diceRoll();
    testPlayer.diceRoll();
    testPlayer.diceRoll();
    testPlayer.roundScore();
    expect(testPlayer.totalScore).to.be.within(0,18);
  });
});

describe('Dice', function() {
  it("will return a random between 0-6, excluding 1", function(){
    var testPlayer = new Player("Jeff", 0, 0);
    expect(testPlayer.diceRoll()).to.be.within(0,6);

  });

  it("will return the value of two rolls of the dice", function(){
    var testPlayer = new Player("Jeff", 0, 0);
    testPlayer.diceRoll();
    testPlayer.diceRoll();
    expect(testPlayer.rollScore).to.be.within(0,12);
  });
});
