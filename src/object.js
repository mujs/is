module('mu.is.object', function () {
  'use strict';

  var isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  return isObject;
});
