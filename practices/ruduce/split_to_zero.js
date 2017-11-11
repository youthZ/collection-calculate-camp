'use strict';

function spilt_to_zero(number, interval) {
  var result =[];
  var indexResult = 0;
  result[indexResult] = number;
  while(number > 0){
	indexResult++;
	number = parseFloat((number - interval).toFixed(1));
	result[indexResult] = number;
  }
  return result;
}

module.exports = spilt_to_zero; 