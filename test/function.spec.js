'use strict';
var expect = require('expect.js');

describe('function', function () {
  var isFunction = require('../dist/function');

  it('should be a function', function () {
    expect(isFunction).to.be.a('function');
  });

  it('should return true with functions', function () {
    expect(isFunction(function () {})).to.be(true);
  });

  it('shouuld return true with Function instances', function () {
    expect(isFunction(new Function())).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isFunction()).to.be(false);
    expect(isFunction(null)).to.be(false);
    expect(isFunction('abc')).to.be(false);
    expect(isFunction(123)).to.be(false);
    expect(isFunction(true)).to.be(false);
  });
});
