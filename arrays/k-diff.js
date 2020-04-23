// given an array of integers and an integer k
// you need to find the number of unique k-diff pairs in the array
// k-diff pairs are defined as an integer pair (i,j) both numbers in the array with their abs difference is k

//input [3,1,4,1,5] k =2
// output 2

const findPairs = (nums, k) => {
  if (!nums.length || k < 0) return 0;
  const map = {};
  let counter = 0;
  nums.forEach(n => {
    map[n] = (map[n] || 0) + 1;
  });
  Object.keys(map).forEach(key => {
    if (k === 0) {
      if (map[key] > 1) counter++;
    } else if (map[parseInt(key) + k]) {
      counter++;
    }
  });
  return counter;
};


console.log(findPairs([3,1,4,5,1], 2))

module.exports = findPairs
