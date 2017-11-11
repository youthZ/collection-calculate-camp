'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(element){
	return String.fromCharCode(96 +parseInt(element));
  });
};

module.exports = number_map_to_word;
