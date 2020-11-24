const compression = require('./stringCompression');

test('compressing string to letter and char count', () =>{
	expect(compression("aaa")).toStrictEqual("a3");
}); 

test('compressing string to letter and char count', () =>{
	expect(compression("aaabbb")).toStrictEqual("a3b3");
}); 



