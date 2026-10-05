/**
 * Merge Intervals
 * Given an array of intervals, merge all overlapping intervals.
 * Sorts by start time, then sweeps once, extending or starting a new
 * interval depending on whether it overlaps the last merged one.
 *
 * Time:  O(n log n) - dominated by the sort
 * Space: O(n) - for the sorted copy / output
 */
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
    const merged = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const last = merged[merged.length - 1];
        const current = sorted[i];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

module.exports = { mergeIntervals };

if (require.main === module) {
    console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
}
