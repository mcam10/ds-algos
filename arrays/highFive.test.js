const highFive = require('./highFive');



test('testing getting correct average from student ID\s',()=>{
	expect(highFive([3,1,4,5,1])).toBe(2);
}); 
