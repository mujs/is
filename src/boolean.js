module('mu.is.boolean', function () {
  'use strict';

  var isBoolean = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  };

  return isBoolean;
});
