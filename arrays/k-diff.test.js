const findPairs  = require('./k-diff');

test('finding all k-diff pairs in array that abs diff equals to k', () =>{
	expect(findPairs([3,1,4,5,1], 2)).toBe(2);
}); 

