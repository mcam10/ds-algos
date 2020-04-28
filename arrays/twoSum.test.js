const twoSum = require('./twoSum');

test('Find indicies of values that add up to K', () =>{
	expect(twoSum([2,7,11,15], 9)).toStrictEqual([1,2]);
}); 



test('Find indicies of values that add up to K', () =>{
	expect(twoSum([3,24,50,79,88,150,345], 200)).toStrictEqual([3,6]);
}); 

