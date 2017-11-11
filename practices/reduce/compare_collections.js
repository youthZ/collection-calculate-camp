'use strict';

function compare_collections(collection_a, collection_b) {
	var result = collection_a.map(function (element){
		return collection_b.indexOf(element) != -1;
	}).reduce(function (pre,next){
		return pre&&next;
	});
	return result;
}

module.exports = compare_collections;