module('mu.is.defined', function () {
  'use strict';

  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };

  return isDefined;
});
