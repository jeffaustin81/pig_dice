describe('Player', function() {
  it("will get a player name, roll score, total score", function(){
    var testPlayer = new Player("Jeff", 24, 60);
    expect(testContact.playerName).to.equal("Jeff");
    expect(testContact.rollScore).to.equal(24);
    expect(testContact.totalScore).to.equal(60);
  });
});
