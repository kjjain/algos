/**
 * Selection Sort
 * Repeatedly selects the minimum element from the unsorted portion of the
 * array and swaps it into its correct position at the front.
 *
 * Time:  O(n^2) in all cases
 * Space: O(1) - sorts in place
 */
function selectionSort(items) {
    const n = items.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (items[j] < items[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [items[i], items[minIndex]] = [items[minIndex], items[i]];
        }
    }
    return items;
}

module.exports = { selectionSort };

if (require.main === module) {
    console.log(selectionSort([5, 1, 3, 2, 4]));
}
