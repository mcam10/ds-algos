// given an array of ints A sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order


// input = [-4,-1,0,3,10]
// output = [0,1,9,16,100]


const sortedSquares = arr =>{
 if (!arr.length) return [];

 let res = [];

arr.forEach((num) => res.push(num * num));

res.sort((a,b)=> a-b);

return res;

}

module.exports = sortedSquares;
