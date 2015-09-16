describe('Contact', function() {
  it("Creates anew contact with the given specifications", function(){
    var testContact = new Contact("Rita", "Morena");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Morena");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});
