function collect_same_elements(collection_a, collection_b) {
  var result = [];
	if(collection_a.length > 0 && collection_b.length > 0){
	 var indexA = 0;
	 var indexB = 0;
	 var indexResult = 0;
	 var lengthA = collection_a.length;
	 var lengthB = collection_b.length;
	 for (indexA = 0;indexA < lengthA; indexA++){
            for(indexB = 0;indexB < lengthB; indexB++){
		if(collection_a[indexA]==collection_b[indexB]){
			result[indexResult] = collection_a[indexA];
			indexResult++;
                }
            }
	 }
		return result;
	}
	return result;
}

module.exports = collect_same_elements;
