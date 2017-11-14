'use strict';

function median_to_letter(collection) {
	var middle;
	var middleBit;
	var arr = collection;
	if(collection.length % 2 == 0){
		middle = parseInt(collection.length / 2);
		middleBit = parseInt((arr[middle-1]+arr[middle])/2);
	}else{
		middle = parseInt((collection.length+1) / 2);
		middleBit = arr[middle-1];
	}
	if(middleBit <= 26){
		return String.fromCharCode(97 +　middleBit);
	}else{
		var str="";
		while(middleBit > 26){
			var res = middleBit % 26;
			str += String.fromCharCode(97 + res);
			middleBit = parseInt(middle / 26);
		}
		str = String.fromCharCode(97 + middleBit) + str;
		return str;
	}
}

module.exports = median_to_letter;