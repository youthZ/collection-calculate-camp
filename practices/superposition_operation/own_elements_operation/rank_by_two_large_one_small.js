'use strict';
function rank_by_two_large_one_small(collection){
	var arr = collection.sort(function(pre, next){
		return pre - next;
	});
	console.log(arr);
	var index = 0;
	var result="";
	for (;index < collection.length ; )
	{
		if((index + 3) < arr.length){
			result += arr[index+1].toString()+","+arr[index+2].toString()+","+arr[index].toString()+","; 
			index += 3;
		}else{
			result = result.substring(0,result.length-1);
			while(index < arr.length){
				result += ","+arr[index].toString();
				index += 1;
			}
		}
		
	}
	var resultArr = [];
	resultArr = result.split(",");
	console.log(resultArr);
	return resultArr.map(function (e){
		return parseInt(e);
	});
}
module.exports = rank_by_two_large_one_small;