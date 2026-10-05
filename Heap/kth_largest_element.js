/**
 * Kth Largest Element in an Array
 * Maintains a min-heap of size k while scanning the array once; the heap's
 * root ends up being the kth largest element. Avoids sorting the whole
 * array just to read off one value.
 *
 * Time:  O(n log k)
 * Space: O(k)
 */
const { MinHeap } = require('../Heap/minHeap');

function findKthLargest(items, k) {
    const heap = new MinHeap();

    for (const item of items) {
        heap.insert(item);
        if (heap.size() > k) heap.extractMin();
    }

    return heap.peek();
}

module.exports = { findKthLargest };

if (require.main === module) {
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
}
