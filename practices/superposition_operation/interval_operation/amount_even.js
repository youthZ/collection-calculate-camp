'use strict';

function amount_even(collection) {
	return collection.filter(function (e){
		return e %2 == 0;
	}).reduce(function (pre, next){
		return pre + next;
	});
		
}

module.exports = amount_even;