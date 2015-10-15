'use strict';
var expect = require('expect.js');

describe('defined', function () {
  var isDefined = require('../dist/node/defined');

  it('should be a function', function () {
    expect(isDefined).to.be.a('function');
  });

  it('should return false with undefined input', function () {
    expect(isDefined()).to.be(false);
  });

  it('should return true with nulls', function () {
    expect(isDefined(null)).to.be(true);
  });

  it('should return true with anithing else', function () {
    expect(isDefined(false)).to.be(true);
    expect(isDefined(0)).to.be(true);
    expect(isDefined('')).to.be(true);
    expect(isDefined({})).to.be(true);
    expect(isDefined([])).to.be(true);
    expect(isDefined(function () {})).to.be(true);
  });
});
