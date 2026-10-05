const test = require('node:test');
const assert = require('node:assert/strict');
const { knapsack01 } = require('../Dynamic Programming/knapsack_01');
const { coinChange } = require('../Dynamic Programming/coin_change');
const { climbStairs } = require('../Dynamic Programming/climbing_stairs');

test('knapsack01 finds the best value under a weight cap', () => {
    assert.equal(knapsack01([1, 3, 4, 5], [1, 4, 5, 7], 7), 9);
});

test('coinChange finds the fewest coins for an amount', () => {
    assert.equal(coinChange([1, 2, 5], 11), 3);
    assert.equal(coinChange([2], 3), -1);
});

test('climbStairs counts distinct ways up', () => {
    assert.equal(climbStairs(2), 2);
    assert.equal(climbStairs(5), 8);
});
