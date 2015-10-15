module('mu.is.scalar', function (require) {
  'use strict';

  var isString  = require('mu.is.string'),
      isNumber  = require('mu.is.number'),
      isBoolean = require('mu.is.boolean');

  var isScalar = function (arg) {
    return isString(arg) || isNumber(arg) || isBoolean(arg);
  };

  return isScalar;
});
