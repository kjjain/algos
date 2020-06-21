/**
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 Example:

 Input: [-2,1,-3,4,-1,2,1,-5,4],
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * **/


let maxProduct = function(nums) {
    let maxProduct = 0;
    for(let i = 0, j = i+1; i <nums.length, j < nums.length; i++, j++){
        if(nums[i]*nums[j] > maxProduct) {
            maxProduct = nums[i]*nums[j];
        }
    }
    return maxProduct;
};

console.log(maxProduct([-2,1,-3,4,-1,2,1,-5,4]));