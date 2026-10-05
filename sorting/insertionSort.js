/**
 * Insertion Sort
 * Builds the sorted array one item at a time by repeatedly taking the next
 * unsorted element and inserting it into its correct position among the
 * already-sorted elements to its left.
 *
 * Time:  O(n^2) worst/average, O(n) best (already sorted)
 * Space: O(1) - sorts in place
 */
function insertionSort(items) {
    for (let i = 1; i < items.length; i++) {
        let current = items[i];
        let j = i - 1;
        while (j >= 0 && items[j] > current) {
            items[j + 1] = items[j];
            j--;
        }
        items[j + 1] = current;
    }
    return items;
}

module.exports = { insertionSort };

if (require.main === module) {
    console.log(insertionSort([5, 1, 3, 2, 4]));
}
