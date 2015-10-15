module('mu.is.string', function () {
  'use strict';

  var isString = function (arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  return isString;
});
