const commonWord= require('./commonWord');

test('finding most frequent word that is not in banned words', () =>{
	expect(commonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"])).toBe("ball");
}); 
