// given an array of words and word1 and word2 find the shortest distance

const shortestDistance = (words,word1, word2)=>{
	let indexOne = -1;
	let indexTwo = -1;

	var minDistance = words.length;
	
	for(let i = 0; i < words.length; i++){
	   if(words[i] === word1){
		indexOne = i;
	} 
	else if(words[i] === word2){
		indexTwo = i;
	}

	if (indexOne !== -1 && indexTwo !== -2){
	  
		minDistance = Math.min(minDistance, Math.abs(indexOne - indexTwo))
	}
	
	}
	return minDistance
}

module.exports = shortestDistance
