const _ = require('lodash');
const second = require('./second');

var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]

second('INCREMENT');

/*
  runs app at build time as will fail if any error thrown.
*/
