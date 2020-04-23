const searchInsert = require('./searchInsert')


test('searching for a potential target in our given array ', () =>{
	expect(searchInsert([0,1,2,4,5], 3)).toBe(3);
}); 

test('searching for a potential target in our given array ', () =>{
	expect(searchInsert([0], 2)).toBe(1);
}); 

test('searching for a potential target in our given array ', () =>{
	expect(searchInsert([0,1,2,3,5,6], 4)).toBe(4);
}); 

test('searching for a potential target in our given array ', () =>{
	expect(searchInsert([0,1,2,3,4,5,6], -1)).toBe(0);
}); 




