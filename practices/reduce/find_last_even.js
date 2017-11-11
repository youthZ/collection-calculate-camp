'use strict';

function find_last_even(collection) {
   var result = collection.filter(function (element){
	return element % 2 == 0;
  });
  return result[result.length-1];
}

module.exports = find_last_even;
