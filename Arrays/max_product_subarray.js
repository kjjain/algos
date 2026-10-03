/**
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest product, and return that product.

 Example:

 Input: [2,3,-2,4]
 Output: 6
 Explanation: [2,3] has the largest product = 6.
 *
 * **/

// Because a negative number can flip the smallest product into the largest
// (and vice versa), we track both the running max AND running min product
// ending at each index, swapping them whenever the current number is negative.
//
// Time:  O(n)
// Space: O(1)
let maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [curMax, curMin] = [curMin, curMax];
        }

        curMax = Math.max(num, curMax * num);
        curMin = Math.min(num, curMin * num);

        maxSoFar = Math.max(maxSoFar, curMax);
    }

    return maxSoFar;
};

module.exports = { maxProduct };

if (require.main === module) {
    console.log(maxProduct([2, 3, -2, 4])); // 6
}
