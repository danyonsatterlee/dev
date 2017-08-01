let chai = require("chai");
let assert = chai.assert;

let noVowels = require("../app.js");



describe("return an object from a word with one with consitents and one of the vowels", () => {
    it("no vowels and vowels", () => {
        assert.deepEqual(noVowels("Jacob"), {noVowels: "jcb", vowels: "ao"});
        assert.deepEqual(noVowels("Inspire"), {noVowels: "nspr", vowels: "iie"});
        assert.deepEqual(noVowels("Poop is not fun"), {noVowels: "ppsntfn", vowels: "ooiou"});
    });
})