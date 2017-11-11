'use strict';

function find_first_even(collection) {
  var result = collection.filter(function (element){
	return element % 2 == 0;
  });
  return result[0];
}

module.exports = find_first_even;