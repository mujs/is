define.test(function (use) {
  'use strict';

  var expect = require('expect.js');

  describe('is', function () {
    describe('defined', function () {
      var isDefined = use('mu.is.defined');

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

    describe('boolean', function () {
      var isBoolean = use('mu.is.boolean');

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

    describe('string', function () {
      var isString = use('mu.is.string');

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

    describe('number', function () {
      var isNumber = use('mu.is.number');

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

    describe('array', function () {
      var isArray = use('mu.is.array');

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

    describe('object', function () {
      var isObject = use('mu.is.object');

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

    describe('function', function () {
      var isFunction = use('mu.is.function');

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

    describe('scalar', function () {
      var isScalar = use('mu.is.scalar');

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
  });
});
