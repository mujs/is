module('mu.is.function', function () {
  'use strict';

  var isFunction = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Function]';
  };

  return isFunction;
});
