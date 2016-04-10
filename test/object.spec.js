'use strict';
var expect = require('expect.js');

describe('object', function () {
  var isObject = require('../dist/object');

  it('should be a function', function () {
    expect(isObject).to.be.a('function');
  });

  it('should return true with basic objects', function () {
    expect(isObject({})).to.be(true);
    expect(isObject(new Object())).to.be(true);
  });

  it('shouuld return true with Object instances', function () {
    expect(isObject(new Object())).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isObject([])).to.be(false);
    expect(isObject(function () {})).to.be(false);
    expect(isObject(new Date())).to.be(false);
    expect(isObject(new RegExp())).to.be(false);
    expect(isObject()).to.be(false);
    expect(isObject(null)).to.be(false);
    expect(isObject('abc')).to.be(false);
    expect(isObject(1)).to.be(false);
    expect(isObject(new Number(1))).to.be(false);
  });
});
