// given a sorted array and a target value, return the index if the target is found
// if not, return index where it would be if it were inserted in order

const searchInsert = (nums, target)=>{
if (target < nums[0]){
        nums.unshift(target)
        return 0
    }
    else if(target > nums[nums.length -1]){
        nums.push(target)
        return nums.length -1
    }
    
    let leftIdx = 0;
    let rightIdx = nums.length -1;
    
    while(leftIdx <= rightIdx){
        let mid = Math.floor(leftIdx + (rightIdx - leftIdx)/2)
        
        if(nums[mid] === target || nums[mid] > target && nums[mid-1] < target){
            return mid
        }
        else if(nums[mid] < target){
            leftIdx = mid +1;
        }
        else if(nums[mid] > target){
            rightIdx = mid -1;
        }
    }
    return 0

}

module.exports = searchInsert;
