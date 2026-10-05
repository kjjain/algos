/**
 * Coin Change (fewest coins to make an amount)
 * Bottom-up DP: dp[a] = fewest coins needed to make amount a, built up from
 * dp[0] = 0 by trying every coin at every amount.
 *
 * Time:  O(amount * coins.length)
 * Space: O(amount)
 */
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (const coin of coins) {
            if (coin <= a && dp[a - coin] + 1 < dp[a]) {
                dp[a] = dp[a - coin] + 1;
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

module.exports = { coinChange };

if (require.main === module) {
    console.log(coinChange([1, 2, 5], 11)); // 3
}
