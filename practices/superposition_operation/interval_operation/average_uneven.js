'use strict';

function average_uneven(collection) {
	var sum = collection.filter(function (e){
		return e %2 != 0;
	}).reduce(function (pre, next){
		return pre + next;
	});
	return parseFloat((sum/(collection.length/2)).toFixed(1));
}

module.exports = average_uneven;