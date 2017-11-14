'use strict';
var calculate_median = function(collection){
	var result = collection.filter(function(index,e){
		if(index % 2 ==0){
			return e;
		}
	});
	var middle;
	if(result.length % 2 ==0){
		middle = result.length / 2;
		return parseInt((result[middle-1] + result[middle])/2);
	}else{
		return result[(result.length + 1)/2-1];
	}
};
module.exports = calculate_median;