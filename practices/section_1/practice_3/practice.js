function collect_same_elements(collectionA, objectB) {
  if(collectionA.length > 0 && typeof(objectB)=='object'){

		if(objectB.value != undefined){

			var lengthA = collectionA.length;

			var lengthB = objectB.value.length;

			var indexA, indexB, indexResult=0;

			var result = [];

			for(indexA = 0; indexA < lengthA; indexA++){

				for(indexB = 0; indexB < lengthB; indexB++){

					if(collectionA[indexA] == objectB.value[indexB]){

						result[indexResult] = collectionA[indexA];

						indexResult++;

					}

				}

			}

			return result;

		}

	}
}

module.exports = collect_same_elements;
