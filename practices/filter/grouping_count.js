'use strict';

function choose_no_repeat_number(collection) {
	if(collection.length > 0){
		var result = {};
		var array = array_remove_repeat(collection);
		var count = 0;
		for (let index_array = 0; index_array < array.length; index_array++)
		{
			for (let index_collection = 0; index_collection < collection.length ; index_collection++ )
			{
				if(array[index_array]  == collection[index_collection]){
					count++;
				}
			}
			result[index_array+1]=count;
			count = 0;
		}
		return result;
	}
}
function array_remove_repeat(a) { // 去重
    var result = [];
    for(var index = 0; index < a.length; index ++) {
        var flag = true;
        var temp = a[index];
        for(var j = 0; j < result.length; j ++) {
            if(temp === result[j]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            result.push(temp);
        }
    }
    return result;
}
module.exports = choose_no_repeat_number;
