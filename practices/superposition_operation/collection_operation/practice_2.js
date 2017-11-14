'use strict';

function hybrid_operation_to_uneven(collection) {
	return collection.filter(function (e){
		return e %2 != 0;
	}).map(function (ele){
		return ele*3+2;
	});
}

module.exports = hybrid_operation_to_uneven;