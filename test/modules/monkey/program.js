var assert = require("lib/assert");
var a = require("a");

exports['test module monkey'] = function() {
    assert.equal(exports.monkey, 10, "monkeys not permitted");
};