// given an array of ints that is already sorted in asc order
// find two numbers that they add up to specific target #

// return indices of nums that add up to target #
// edge case the indicies are not zero based

// 

const twoSum = (arr, k )=>{
 let left = 0;
 let right = arr.length-1;

while(left < right){
if ( arr[left] + arr[right] === k){
	return [left + 1, right + 1]
}

if ( arr[left] + arr[right] > k){
	right--; 

}else{
	left++;
}
}
	return [-1,-1]; 
}

module.exports = twoSum;
