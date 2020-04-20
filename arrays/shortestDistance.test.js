const shortestDistance = require('./shortestDistance');

test('finds shortest distance between two words in an array of words', () =>{
	expect(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")).toBe(3);
}); 

test('finds shortest distance between two words in an array of words', () =>{
	expect(shortestDistance(["practice","coding","coding"], "coding", "practice")).toBe(1);
}); 
