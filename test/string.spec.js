'use strict';
var expect = require('expect.js');

describe('string', function () {
  var isString = require('../dist/string');

  it('should be a function', function () {
    expect(isString).to.be.a('function');
  });

  it('should return true with strings', function () {
    expect(isString('')).to.be(true);
    expect(isString('abc')).to.be(true);
  });

  it('should return true with String instances', function () {
    expect(isString(new String('abc'))).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isString()).to.be(false);
    expect(isString(null)).to.be(false);
    expect(isString(true)).to.be(false);
    expect(isString(1)).to.be(false);
  });
});
