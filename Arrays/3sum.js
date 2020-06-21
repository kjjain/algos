
/**
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.

 Note:

 The solution set must not contain duplicate triplets.

 Example:

 Given array nums = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
 [-1, 0, 1],
 [-1, -1, 2]
 ]
 * **/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {

    nums.sort((a,b) => a-b);

    let result = [];

    for(let i = 0; i < nums.length -2 ; i++) {

        let left = i+1;
        let right = nums.length - 1;

        while(left < right){
            if(nums[left] + nums[right] + nums[i] === 0){
                result.push([ nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if(nums[left] + nums[right] + nums[i] < 0) {
                left++;
            } else if(nums[left] + nums[right] + nums[i] > 0) {
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));