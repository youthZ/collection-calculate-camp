'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = collection.map(function (element){
	return element*4+1;
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
