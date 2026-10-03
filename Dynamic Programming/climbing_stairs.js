/**
 *
 * You are climbing a stair case. It takes n steps to reach to the top.

 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Note: Given n will be a positive integer.

 Example 1:

 Input: 2
 Output: 2
 Explanation: There are two ways to climb to the top.
 1. 1 step + 1 step
 2. 2 steps
 *
 * **/

// The number of ways to reach step n is the number of ways to reach step
// n-1 (then take one more step) plus the ways to reach step n-2 (then take
// two more steps) - i.e. it's Fibonacci. Memoized to avoid exponential blowup.
//
// Time:  O(n)
// Space: O(n)
function climbStairs(n, memo = new Map()) {
    if (n <= 2) return n;
    if (memo.has(n)) return memo.get(n);

    const ways = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    memo.set(n, ways);
    return ways;
}

module.exports = { climbStairs };

if (require.main === module) {
    console.log(climbStairs(5)); // 8
}
