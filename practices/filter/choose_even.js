'use strict';

function choose_even(collection) {
	var result = collection.filter(function (n){
		return n%2 == 0;
	});
	return result;
}

module.exports = choose_even;
