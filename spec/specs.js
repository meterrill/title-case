describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("dog")).to.equal("Dog");
  });

  it("capitalizes the first letter of all the words in a title", function() {
    expect(titleCase("dog show")).to.equal("Dog Show");
  });

  it("doesn't capitalize certain words", function() {
    expect(titleCase("color of money")).to.equal("Color of Money");
  });
});
