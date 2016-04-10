'use strict';
var expect = require('expect.js');

describe('boolean', function () {
  var isBoolean = require('../dist/boolean');

  it('should be a function', function () {
    expect(isBoolean).to.be.a('function');
  });

  it('should return true with strict booleans', function () {
    expect(isBoolean(true)).to.be(true);
    expect(isBoolean(false)).to.be(true);
  });

  it('should return true with Boolean instances', function () {
    expect(isBoolean(new Boolean(0))).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isBoolean()).to.be(false);
    expect(isBoolean(null)).to.be(false);
    expect(isBoolean(0)).to.be(false);
    expect(isBoolean(1)).to.be(false);
    expect(isBoolean('true')).to.be(false);
  });
});
