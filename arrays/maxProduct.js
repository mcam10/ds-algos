// given an int array find 3 nums whose product is maximum and output the max product

// i.g input = [1,2,3] output === 6 

const maxProduct = nums=>{
  if(nums.length < 3) return 0;

  if ( nums.length === 3) return nums[0] * nums[1] * nums[2]

 let n = nums.length;

nums.sort((a,b)=>a-b);

return Math.max(nums[0] * nums[1] * nums[2], nums[n-1] * nums[n-2] * nums[n-3])

}

module.exports = maxProduct;
