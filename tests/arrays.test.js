const test = require('node:test');
const assert = require('node:assert/strict');
const { mergeIntervals } = require('../Arrays/mergeIntervals');
const { topKFrequent } = require('../Arrays/topKFrequentElements');
const { search } = require('../Arrays/search_in_roated_arr');
const { maxProduct } = require('../Arrays/max_product_subarray');
const { fourNumberSum } = require('../Arrays/4sum');

test('mergeIntervals merges overlapping ranges', () => {
    assert.deepEqual(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
});

test('topKFrequent returns the k most frequent elements', () => {
    assert.deepEqual(new Set(topKFrequent([1, 1, 1, 2, 2, 3], 2)), new Set([1, 2]));
});

test('search finds a target in a rotated sorted array', () => {
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
    assert.equal(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
});

test('maxProduct finds the largest product subarray', () => {
    assert.equal(maxProduct([2, 3, -2, 4]), 6);
    assert.equal(maxProduct([-2, 0, -1]), 0);
});

test('fourNumberSum finds quadruplets that sum to the target', () => {
    const result = fourNumberSum([7, 6, 4, -1, 1, 2], 16);
    const asSets = result.map((quad) => JSON.stringify(quad));
    assert.deepEqual(new Set(asSets), new Set(['[-1,4,6,7]', '[1,2,6,7]']));
});
