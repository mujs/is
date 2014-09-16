define('mu.is', function () {
  'use strict';
  
  var isDefined = function (arg) {
    return typeof arg !== 'undefined';
  };
  
  return {
    defined: isDefined
  }
});
