'use strict';

function even_to_letter(collection) {
	var result = collection.filter(function (element){
		return element % 2 != 0;
	}).map(function (e){
		return String.fromCharCode(97+(e%26));
	});
	return result;
}

module.exports = even_to_letter;