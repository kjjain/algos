# Heap

An array-backed binary min-heap plus a problem that uses it as a
priority queue.

| File | Contents | Time | Space |
|---|---|---|---|
| [`minHeap.js`](minHeap.js) | `MinHeap` class: `insert`, `extractMin`, `peek` | O(log n) insert/extract, O(1) peek | O(n) |
| [`kth_largest_element.js`](kth_largest_element.js) | Kth largest element, using a size-k min-heap | O(n log k) | O(k) |
