'use strict';
var is_exist_element = function(collection,element){
	var flag = false;
	for (var index =0;index < collection.length ; index+=2)
	{
		if(collection[index] == element){
			flag = true;
		}
	}
	return flag;
};
module.exports = is_exist_element;