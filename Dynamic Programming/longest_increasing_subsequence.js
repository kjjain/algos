/**
 *
 * Given an unsorted array of integers, find the length of longest increasing subsequence.

 Example:

 Input: [10,9,2,5,3,7,101,18]
 Output: 4
 *
 *
 * **/

let lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1);
    let start = 0;
    for (i = 1; i < nums.length; i++) {
        while (start < i) {
            if (nums[start] < dp[i]) {
                dp[i] = Math.max(nums[start] + 1, dp[i]);
                start++;
            }
        }
    }
    return Math.max(...dp);
};

function test(array) {

    let results = [];

    for(let i = 0; i < array.length - 1; i++) {
        let left = 0;
        let right = left + 1;
        while (left < right) {
            if (array[left] < array[right]) {
                right++;
                left++;
            } else if (results.length == 0) {
                results.push(array[left], array[right]);
                right++;
                left++;
            } else if (results[results.length - 1] <= array[left]) {
                results.push(array[left]);
            } else if (results[results.length - 1] <= array[right]) {
                results.push(array[right]);
            }
        }
    }
    return results.length;
}


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));