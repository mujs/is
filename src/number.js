module('mu.is.number', function () {
  'use strict';

  var isNumber = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  return isNumber;
});
