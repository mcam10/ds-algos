// given a paragraph and a list of banned words find one that is most ocurring that is not in the list of banned words


// edge cases -> clear up with interviewer..
// can we assume para and banned words are not empty
// how to handle punctuation and non chars 

const commonWord = (paragraph, banned) => {
let result = null;
let max = 0;
const freqBuilder = {};

const para = paragraph
.toLowerCase()
.split(/\W+/g);

for(let word of para){
  if(banned.indexOf(word) === -1){
	freqBuilder[word] = freqBuilder[word] + 1 || 1;
}
if(freqBuilder[word] > max){
  max = freqBuilder[word]
  result = word;
}

}
	return result;
}

module.exports = commonWord;
