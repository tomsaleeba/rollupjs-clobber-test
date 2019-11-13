(function () {
  'use strict';

  function blah() {
    return foobar()
  }

  function foobar() {
    return 'from module'
  }

  function foobar$1() {
    return 'from main'
  }

  console.log(blah());
  console.log(foobar$1());

}());
