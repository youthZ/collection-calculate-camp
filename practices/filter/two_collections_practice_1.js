'use strict';

function choose_common_elements(collection_a, collection_b) {

    var result = collection_a.filter(function (n){
		return collection_b.indexOf(n) != -1;
	});
	return result;
}
module.exports = choose_common_elements;
