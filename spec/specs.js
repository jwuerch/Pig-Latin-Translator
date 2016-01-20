describe("pigLatin", function() {


  it("if word begins with a vowel, tacks on 'ay' to the end of                              the word.", function() {
    expect(pigLatin("igloo")).to.equal("iglooay");
  });

  it("if word begins with the letters 'qu' move those letters to the end of the word and add 'ay'.", function () {
    expect(pigLatin("quick")).to.equal("ickquay");
  });

  it("if word begins with the letters 'squ' move those letters to the end of the word and add 'ay'.", function () {
    expect(pigLatin("squirm")).to.equal("irmsquay");
  });

  it("if word begins with any other consonant(s) move those letters to the end of the word and add 'ay'.", function () {
    expect(pigLatin("three")).to.equal("eethray");
  });




  // it("removes punctuation from an input string", function() {
  //   expect(pigLatin("there!")).to.equal("erethay");
  // });
});
