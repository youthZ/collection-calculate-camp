'use strict';
var even_asc_odd_desc = function(collection){
	var odd = [];
	var even = [];
	odd = collection.filter(function (ele){
		return ele % 2 != 0;
	}).sort(function (pre, next){
		return next - pre;
	});
	even = collection.filter(function (ele){
		return ele % 2 == 0;
	}).sort(function (pre, next){
		return pre - next;
	});
	return even.concat(odd);
};
module.exports = even_asc_odd_desc;