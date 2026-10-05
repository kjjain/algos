const test = require('node:test');
const assert = require('node:assert/strict');
const { MinHeap } = require('../Heap/minHeap');
const { findKthLargest } = require('../Heap/kth_largest_element');

test('MinHeap extracts elements in ascending order', () => {
    const heap = new MinHeap();
    [5, 1, 3, 2, 4].forEach((n) => heap.insert(n));
    const sorted = [];
    while (heap.size()) sorted.push(heap.extractMin());
    assert.deepEqual(sorted, [1, 2, 3, 4, 5]);
});

test('findKthLargest finds the kth largest element', () => {
    assert.equal(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
    assert.equal(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
});
