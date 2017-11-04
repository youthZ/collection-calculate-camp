'use strict';

function choose_divisible_integer(collection_a, collection_b) {
 var result = collection_a.filter(function (element){
		var index= 0;
		for (; index < collection_b.length; index++)
		{
			if(element % collection_b[index] == 0){
				return true;
			}
		}
		return false;
	});
	return result;
}

module.exports = choose_divisible_integer;
