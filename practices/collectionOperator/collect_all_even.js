'use strict';

function collect_all_even(collection) {
	if(collection.length > 0){
		var result=[], indexResult = 0;
		for(let index = 0; index < collection.length; index++){
			if(collection[index] % 2 == 0){
				result[indexResult] = collection[index];
				indexResult++;
			}
		}
		return result;
	}
}

module.exports = collect_all_even;
