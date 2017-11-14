'use strict';

function average_to_letter(collection) {
	var sum = collection.reduce(function (pre ,next){
		return pre + next;
	});
	return String.fromCharCode(97 + parseInt(sum/collection.length) % 26);
}

module.exports = average_to_letter;