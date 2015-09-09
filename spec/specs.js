describe('pigLatin', function() {
  // it("attaches 'ay' to end of word", function() {
  //   expect(pigLatin("apple")).to.eq("appleay");
  // });
  //
  // it("moves first consecutive consonants to the end of word", function() {
  //   expect(pigLatin("chello")).to.eq("ellochay");
  // });

  it("converts sentences into pig latin", function() {
    expect(pigLatin("Yo Frodo, go into Mordor")).to.eq("oyay odofray ogay intoay ordormay");
  });
});
