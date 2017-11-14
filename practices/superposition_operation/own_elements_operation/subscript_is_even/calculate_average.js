'use strict';
var calculate_average = function(collection){
	var result = collection.filter(function(index,e){
		if(index % 2 ==0){
			return e;
		}
	}).reduce(function(pre,next){
		return pre + next;
	});	
	if(collection.length % 2 == 0){
		return parseInt(result / (collection.length/2));
	}else{
		return parseInt(result / (parseInt(collection.length/2)+1));
	}
};
module.exports = calculate_average;