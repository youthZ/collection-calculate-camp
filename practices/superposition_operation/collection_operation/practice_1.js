'use strict';

function hybrid_operation(collection) {
	return collection.map(function (e){
		return e*3+2;
	}).reduce(function(pre, next){
		return pre+next;
	});
}

module.exports = hybrid_operation;