'use strict';
function one_add_next_multiply_three(collection){
	var rs=[];
  for (var index = 0; index < collection.length-1; index++)
  {
	  rs[index] = (collection[index]+collection[index+1]) * 3;
  }
  return rs;
}
module.exports = one_add_next_multiply_three;