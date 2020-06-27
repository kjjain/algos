/**
 *
 * Given an unsorted array of integers, find the length of longest increasing subsequence.

 Example:

 Input: [10,9,2,5,3,7,101,18]
 Output: 4
 *
 *
 * **/

let lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    let start = 0;
    for( i = 1; i < nums.length; i++){
        while(start < i){
            if(nums[start] < dp[i]) {
                dp[i] = Math.max(nums[start] + 1, dp[i]);
                start++;
            }
        }
    }
    return Math.max(...dp);
};


console.log(lengthOfLIS([[10,9,2,5,3,7,101,18]]));