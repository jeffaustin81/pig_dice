describe('Player', function() {
  it("will get a player name, roll score, total score", function(){
    var testPlayer = new Player("Jeff", 24, 60);
    expect(testPlayer.playerName).to.equal("Jeff");
    expect(testPlayer.rollScore).to.equal(24);
    expect(testPlayer.totalScore).to.equal(60);
  });
});
