'use strict';
function map_to_even(collection){
  var result = collection.map(function (element){
	return element*2;
  });
  return result;
}
module.exports = map_to_even;
