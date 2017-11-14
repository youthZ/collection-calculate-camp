'use strict';
var even_group_calculate_average = function(collection){
	var evenArr = evenInArr(arrToEven(collection));

	if(evenArr.length > 0){
		/*
			为了方便起见，这里设置三个数组，分别来存储1,2,3位的数组
		*/
		var oneBitArr = oneInEven(evenArr);
		var twoBitArr = twoInEven(evenArr);
		var thrBitArr = thrInEven(evenArr);
		console.log(thrBitArr);
		if(thrBitArr.length > 0){
			if(oneBitArr.length >0 && twoBitArr.length >0){
				
				return aveageEven(oneBitArr).concat(aveageEven(twoBitArr)).concat(aveageEven(thrBitArr));
			}
			if(oneBitArr.length == 0 && twoBitArr.length == 0){
				return aveageEven(thrBitArr);
			}
		}
	}
	evenArr[0]=0;
	return evenArr;

};

function evenInArr(arr){
	return arr.filter(function (e){
		return e % 2 ==0;
	});
}

function arrToEven(collection){
	var returnArr = [];
	var indexReturn = 0;
	for (var index = 1; index < collection.length ; index+=2)
	{
		returnArr[indexReturn] = collection[index];
		indexReturn++;
	}

	return returnArr;
}

function oneInEven(evenArr){
	
	return evenArr.filter(function (e){
		return e.toString().length == 1;
	});
}

function twoInEven(evenArr){
	
	return evenArr.filter(function (e){
		return e.toString().length == 2;
	});
}

function thrInEven(evenArr){
	
	return evenArr.filter(function (e){
		return e.toString().length == 3;
	});
}

function aveageEven(bitArr){
	var sum = bitArr.reduce(function (pre, next){
		return pre + next;
	});
	var res = [];
	res[0] = parseInt(sum/bitArr.length); 
	return res;
}
module.exports = even_group_calculate_average;
//第一步，选出第偶数个元素
//第二步，选出其中的偶数（如果没有包含偶数的情况下，直接返回一个为零的数组）
//第三步，不含有1,2，但有3的肯定求值；1,2,3都有的肯定求值；（默认只有这两种情况下求值，否则返回一个为零的数组）
/*
	var returnArr = [];
	var indexReturn = 0;
	for (var index =0; index < evenArr.length ; index++)
	{
		if(evenArr[index].toString().length == 1){
			returnArr[indexReturn] = evenArr[index];
			indexReturn ++;
		}
	}
	reutrn returnArr;
*/