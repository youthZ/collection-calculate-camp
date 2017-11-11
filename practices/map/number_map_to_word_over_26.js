'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(element){
	if(element >= 26 && element <=1 ){
		return Stirng.fromCharCode(96+parseInt(element));
	}else{
		var stringName ="";
		while(element > 26) {
           var count = parseInt(element/26);
           var remainder = element%26;
           if(remainder == 0) {
             remainder = 26;
             count--;
             stringName = String.fromCharCode(96 + parseInt(remainder)) + stringName;
           } else {
             stringName = String.fromCharCode(96 + parseInt(remainder)) + stringName;
           }
           element = count;
         }
         stringName = String.fromCharCode(96 + parseInt(element)) + stringName;
		return stringName;
	}
  });
};

module.exports = number_map_to_word;
