var assert = require("lib/assert");

exports['test module transitive'] = function() {
    assert.equal(require("a").foo(), 1, "transitive");
};