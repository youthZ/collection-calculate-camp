'use strict';

function compute_median(collection) {
  var arr = collection.sort(function (a,b){
	return a-b;
  });
  if(arr.length % 2==0){
      let middle = arr.length/2;
      console.log(middle);
			    console.log(arr);
	  	  console.log(arr[middle+1]);
	return parseFloat(((parseInt(arr[middle-1])+parseInt(arr[middle]))/2).toFixed(1));
  }else{
	 let middle = (arr.length+1)/2;
	 return arr[middle-1];
  }
}

module.exports = compute_median;


