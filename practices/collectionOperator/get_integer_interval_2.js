'use strict';

function get_integer_interval(number_a, number_b) {
	var result = [];
	var indexResult = 0;
	  if(!isNaN(number_a) && !isNaN(number_b)){
		if(number_a > number_b){
			for(let index = number_a; index > (number_b-1); index--){
				if(index % 2 == 0){
					result[indexResult] = index;
					indexResult++;
				}
			}
		}else if(number_a < number_b){
			for(let index = number_a; index < (number_b+1); index++){
				if(index % 2 == 0){
					result[indexResult] = index;
					indexResult++;
				}
			}
		}else{
			if(number_a % 2 ==0){
				result[0] = number_a;
			}
		}
	  }
	  return result;
}


module.exports = get_integer_interval;

