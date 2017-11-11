'use strict';

function compute_average(collection) {
  var result = collection.reduce(function (pre, next){
	return pre+next;
  });
    return parseFloat((result/collection.length).toFixed(1));
}

module.exports = compute_average;

