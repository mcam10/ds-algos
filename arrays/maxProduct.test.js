const maxProduct = require('./maxProduct')


test('Get Maximum Product from list of ints',() =>{
	expect(maxProduct([1,2,3])).toBe(6);
}); 

test('Get Maximum Product from list of ints',() =>{
	expect(maxProduct([1,2,3,4])).toBe(24);
}); 

