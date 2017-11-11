'use strict';

function double_to_one(collection) {
	 var result = flaten(collection).filter(function (element,index,self){
		return self.indexOf(element)== index;
	});
	return result;
}

function flaten(collection){
	var temp = (collection+" ").split(",");
	var result = temp.map(function (element){
		return Number(element);
	});
	return result;
}
module.exports = double_to_one;
