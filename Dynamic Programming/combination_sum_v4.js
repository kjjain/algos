/**
 *
 * Given an integer array with all positive numbers and no duplicates,
 * find the number of possible combinations that add up to a positive integer target.

 Example:

 nums = [1, 2, 3]
 target = 4

 The possible combination ways are:
 (1, 1, 1, 1)
 (1, 1, 2)
 (1, 2, 1)
 (1, 3)
 (2, 1, 1)
 (2, 2)
 (3, 1)

 Note that different sequences are counted as different combinations.

 Therefore the output is 7.
 *
 * **/


let combinationSum4 = function(nums, target) {
    const memo = new Map();

    function permute(sum) {
        if(memo.has(sum)) return memo.get(sum);
        if(sum > target) return 0;
        if(sum === target) return 1;
        let ways = 0;

        for(let i = 0; i < nums.length; i++) {
            ways += permute(sum+nums[i]);
        }

        memo.set(sum, ways);
        return ways
    }
    return permute(0);
};