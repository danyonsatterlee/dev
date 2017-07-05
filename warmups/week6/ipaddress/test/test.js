let chai = require("chai");
let assert = chai.assert;

let errorMessage = "invalid ip address";
let address = require("../app.js");
// IPv4 addresses are represented in dot-decimal notation, which consists of
// four decimal numbers, each ranging from `0` to `255`, separated by dots, e.g.,
// `172.16.254.1` Given a string, find out if it satisfies the IPv4 address
// naming rules.

describe("a function that finds if it is a valid IPv4 address", () => {
    if ("should return an error if it is invalid", () => {
        //includes non-digits exceptfor periods
        assert.throws(() => {
            address("adb.ewe.1")
        }, errorMessage);
        //doesn't include 4 different numbers
        assert.throws(() => {
            address("152.1.34")
        }, errorMessage);
        //not within range 0-255// for loop
        assert.throws(() => {
            address("765.653.9")
        }, errorMessage);
        //only 3 or less . //
        assert.throws(() => {
            address("123.44.1")
        }, errorMessage);
        //not within range of 7-15 characters//
        assert.throws(() => {
            address("4.1.2")
        }, errorMessage);

    }) 
    ;

    it("should return if a valid IP address", () => {
        assert.equal(address("0.0.0.0"), true);
        assert.equal(address("0.12.11.13"), true);
        assert.equal(address("111.23.0.0"), true);
    });
});
