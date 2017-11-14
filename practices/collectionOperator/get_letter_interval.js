'use strict';
function get_letter_interval(number_a, number_b) {
  var result = [];
	var indexResult = 0;
	  if(!isNaN(number_a) && !isNaN(number_b)){
		if(number_a > number_b && number_a > 0 && number_b > 0){
			for(let index = number_a; index > (number_b-1); index--){
					result[indexResult] = NumberToABC(index);
					indexResult++;
			}
		}else if( number_a < number_b && number_a > 0 && number_b > 0){
			for(let index = number_a; index < (number_b+1); index++){
					result[indexResult] = NumberToABC(index);
					indexResult++;
			}
		}else{
				result[0] = NumberToABC(number_a);
		}
	  }
	  return result;
}


function NumberToABC(number){
	var value=['z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];
	var temp=[];
	var tempIndex = 0;
	var res;
	var resultString="";
	while(number > 26){
		res = number % 26;
		temp[tempIndex] = value[res];
		tempIndex++;
		number = parseInt(number/26);
	}
	temp[tempIndex] = value[number];
	for(let index = temp.length-1; index >= 0 ; index--){
		resultString +=temp[index]; 
	}
	return resultString;
}
module.exports = get_letter_interval;
