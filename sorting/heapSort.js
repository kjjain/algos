/**
 * Heap Sort
 * Builds a max-heap from the input array, then repeatedly swaps the root
 * (the current maximum) with the last unsorted element and re-heapifies.
 *
 * Time:  O(n log n) in all cases
 * Space: O(1) - sorts in place (iterative array-backed heap)
 */
function heapify(items, heapSize, rootIndex) {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    if (left < heapSize && items[left] > items[largest]) largest = left;
    if (right < heapSize && items[right] > items[largest]) largest = right;

    if (largest !== rootIndex) {
        [items[rootIndex], items[largest]] = [items[largest], items[rootIndex]];
        heapify(items, heapSize, largest);
    }
}

function heapSort(items) {
    const n = items.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(items, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [items[0], items[i]] = [items[i], items[0]];
        heapify(items, i, 0);
    }

    return items;
}

module.exports = { heapSort };

if (require.main === module) {
    console.log(heapSort([5, 1, 3, 2, 4]));
}
