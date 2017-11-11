'use strict';

function double_to_one(collection) {
	
	var temp = (collection+" ").split(",");
	var result = temp.map(function (element){
		return Number(element);
	});
	return result;

}

module.exports = double_to_one;
