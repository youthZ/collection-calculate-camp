'use strict';

function get_union(collection_a, collection_b) {
  if(collection_a.length > 0 && collection_b.length > 0){
	return array_remove_repeat(collection_a.concat(collection_b));
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
module.exports = get_union;

