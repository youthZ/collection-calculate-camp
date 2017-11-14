'use strict';
var single_element = function(collection){
	var result = [],indexR = 0;
	for (var row = 1; row < collection.length ; row+=2)
	{
		var count = 0;
		for (var col = 1; col < collection.length; col+=2)
		{
			if(collection[row] == collection[col]){
				count ++;
			}
		}
		console.log(row+":"+count);
		if(count == 1){
			result[indexR] = collection[row];
			indexR++;
		}
	}
	return result;
};
module.exports = single_element;