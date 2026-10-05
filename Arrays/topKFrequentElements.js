/**
 * Top K Frequent Elements
 * Counts the frequency of each element with a hash map, then uses bucket
 * sort (buckets indexed by frequency, 0..n) to avoid a full O(n log n) sort.
 *
 * Time:  O(n) - counting + bucket sort
 * Space: O(n) - for the frequency map and buckets
 */
function topKFrequent(items, k) {
    const counts = new Map();
    for (const item of items) {
        counts.set(item, (counts.get(item) || 0) + 1);
    }

    const buckets = Array.from({ length: items.length + 1 }, () => []);
    for (const [item, count] of counts) {
        buckets[count].push(item);
    }

    const result = [];
    for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
        for (const item of buckets[freq]) {
            result.push(item);
            if (result.length === k) break;
        }
    }

    return result;
}

module.exports = { topKFrequent };

if (require.main === module) {
    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
}
