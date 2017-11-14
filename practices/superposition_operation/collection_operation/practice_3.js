'use strict';

function hybrid_operation_to_uneven(collection) {
return collection.filter(function (e){
		return e %2 != 0;
	}).map(function (ele){
		return ele*3+5;
	}).reduce(function(pre, next){
		return pre + next;
	});
}

module.exports = hybrid_operation_to_uneven;