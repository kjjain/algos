
/**
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.

 Example:

 Input: [-2,1,-3,4,-1,2,1,-5,4],
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 * **/


let maxSubArray = function(nums) {
    let ans=-2147483647;
    let maxSum=0;
    for(let i=0;i<nums.length;i++){
        maxSum=maxSum+nums[i];
        if(ans<maxSum){
            ans=maxSum;
            //console.log(ans);
        }
        if(maxSum<0){
            maxSum=0;
        }
    }
    return ans;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));