function collect_same_elements(collection_a, collection_b) {
  if(collection_a.length > 0 && collection_b.length > 0){
	var result =[];
	var lengthA = collection_a.length;
	var lengthB_row = collection_b.length;
	var indexA, indexB_row, indexB_col, indexResult=0;
	for(indexA = 0; indexA < lengthA; indexA++){
		for(indexB_row = 0; indexB_row < lengthB_row; indexB_row++){
			var lengthB_col = collection_b[indexB_row].length;
			for(indexB_col = 0; indexB_col < lengthB_col; indexB_col++){
				if(collection_a[indexA] == collection_b[indexB_row][indexB_col]){
					result[indexResult] = collection_a[indexA];
					indexResult++;
				}
			}
		}
	}
  	return result;
  }
}

module.exports = collect_same_elements;
