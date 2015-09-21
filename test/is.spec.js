define.test(function (use) {
  'use strict';

  var expect = require('expect.js'),
      isDefined = use('mu.is.defined');

  describe('is', function () {
    describe('defined', function () {
      it('should be a function', function () {
        expect(isDefined).to.be.a('function');
      });
    });
  });
});
