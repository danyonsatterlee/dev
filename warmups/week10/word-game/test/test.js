let chai = require("chai");
let assert = chai.assert;

let pigLatin = require("../app.js");

// When we Swedes are young, we are taught a SUPER-SECRET language that only
// kids know, so we can hide secrets from our confused parents. This language is
// known as "Rövarspråket" (which means "Robber's language", more or less), and
// is surprisingly easy to become fluent in, at least when you're a kid.
// Recently, the cheeky residents of /r/Sweden decided to play a trick on the
// rest on reddit, and get a thread entirely in Rövarspråket to /r/all. The
// results were hilarious. Rövarspråket is not very complicated: you take an
// ordinary word and replace the consonants with the consonant doubled and with
// an "o" in between. So the consonant "b" is replaced by "bob", "r" is replaced
// with "ror", "s" is replaced with "sos", and so on. Vowels are left intact.
// It's made for Swedish, but it works just as well in English. Your task today
// is to write a program that can encode a string of text into Rövarspråket.
// (note: this is a higly guarded Swedish state secret, so I trust that none of
// you will share this very privileged information with anyone! If you do, you
// will be extradited to Sweden and be forced to eat surströmming as penance.)
// (note 2: surströmming is actually not that bad, it's much tastier than its
// reputation would suggest! I'd go so far as to say that it's the tastiest
// half-rotten fish in the world!)

describe("swedish pig lagin", () => {
    it("shoudl dbl the consinents with an o inbetween", () => {
        assert.equal(pigLatin("redux"), "roredoduxox");
        assert.equal(pigLatin("hello"), "hohelollolo");
        assert.equal(pigLatin("jacob"), "jojacocobob");
    });
})