'use strict';
var expect = require('expect.js');

describe('number', function () {
  var isNumber = require('../dist/node/number');

  it('should be a function', function () {
    expect(isNumber).to.be.a('function');
  });

  it('should return true with strict numbers', function () {
    expect(isNumber(0)).to.be(true);
    expect(isNumber(1)).to.be(true);
    expect(isNumber(-1)).to.be(true);
    expect(isNumber(Infinity)).to.be(true);
    expect(isNumber(NaN)).to.be(true);
  });

  it('shouuld return true with Number instances', function () {
    expect(isNumber(new Number('123'))).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isNumber()).to.be(false);
    expect(isNumber(null)).to.be(false);
    expect(isNumber('1')).to.be(false);
  });
});
