'use strict';

function get_intersection(collection_a, collection_b) {
	
	if(collection_a.length>0 && collection_b.length>0){
		var result = [];
		var indexResult = 0;
		for (let index_b = 0; index_b < collection_b.length ;index_b++ )
		{
			for (let index_a = 0; index_a < collection_a.length ;index_a++ )
			{
				if(collection_a[index_a] == collection_b[index_b]){
					result[indexResult] = collection_b[index_b];
					indexResult++;
				}
			}
		}
		return result;
	}
}

module.exports = get_intersection;
