'use strict';
var map_to_three_multiples = function(collections){
  var result = collections.map(function (element){
	return element*3;
  });
  return result;
};

module.exports = map_to_three_multiples;
