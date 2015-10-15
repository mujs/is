'use strict';
var expect  = require('expect.js'),
    mockery = require('mockery');

describe('scalar', function () {
  var isScalar;

  before(function () {
    mockery.enable({ warnOnUnregistered: false });

    var is = function (type) {
      return function (arg) {
        return typeof arg === type;
      };
    };

    mockery.registerMock('mu.is.string', is('string'));
    mockery.registerMock('mu.is.number', is('number'));
    mockery.registerMock('mu.is.boolean', is('boolean'));

    isScalar = require('../dist/node/scalar');
  });

  after(function () {
    mockery.disable();
  });

  it('should be a function', function () {
    expect(isScalar).to.be.a('function');
  });

  it('should return true with scalar values (primitives)', function () {
    expect(isScalar('abc')).to.be(true);
    expect(isScalar(123)).to.be(true);
    expect(isScalar(false)).to.be(true);
  });

  it('should return false for anything else', function () {
    expect(isScalar([])).to.be(false);
    expect(isScalar({})).to.be(false);
    expect(isScalar(function () {})).to.be(false);
    expect(isScalar()).to.be(false);
    expect(isScalar(null)).to.be(false);
  });
});
