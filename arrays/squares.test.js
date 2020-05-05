const sortedSquares= require('./squares');

test('given an arry of ints A put squares in asc order', () =>{
	expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
}); 
