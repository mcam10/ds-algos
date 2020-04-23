const searchInsert = require('./searchInsert')


test('searching for a potential target in our given array ', () =>{
	expect(searchInsert([0,1,2,4,5], 3)).toBe(3);
}); 
