'use strict';

function collect_max_number(collection) {
  return collection.reduce(function (x,y){
	return x > y ? x : y;
  });
}

module.exports = collect_max_number;