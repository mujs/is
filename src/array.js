module('mu.is.array', function () {
  'use strict';

  var isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  return isArray;
});
