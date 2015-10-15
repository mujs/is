'use strict';
var expect = require('expect.js');

describe('array', function () {
  var isArray = require('../dist/node/array');

  it('should be a function', function () {
    expect(isArray).to.be.a('function');
  });

  it('should return true with strict arrays', function () {
    expect(isArray([])).to.be(true);
    expect(isArray(new Array())).to.be(true);
  });

  it('shouuld return true with Array instances', function () {
    expect(isArray(new Array())).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isArray({ length: 0 })).to.be(false);
    expect(isArray(function () {})).to.be(false);
    expect(isArray()).to.be(false);
    expect(isArray(null)).to.be(false);
  });
});
