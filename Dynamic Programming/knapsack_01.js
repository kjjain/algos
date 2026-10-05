/**
 * 0/1 Knapsack
 * Classic bottom-up DP: dp[i][w] = best value achievable using the first i
 * items with capacity w. Each item is either skipped or taken (not both,
 * and not split - hence "0/1").
 *
 * Time:  O(n * capacity)
 * Space: O(n * capacity)
 */
function knapsack01(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            dp[i][w] = dp[i - 1][w];
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            }
        }
    }

    return dp[n][capacity];
}

module.exports = { knapsack01 };

if (require.main === module) {
    console.log(knapsack01([1, 3, 4, 5], [1, 4, 5, 7], 7)); // 9
}
