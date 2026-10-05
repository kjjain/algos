# Arrays

Classic array and two-pointer / sliding-window problems.

| File | Problem | Time | Space |
|---|---|---|---|
| [`two_sum.js`](two_sum.js) | Find two numbers that add up to a target | O(n log n) | O(1) |
| [`3sum.js`](3sum.js) | Find all unique triplets that sum to zero | O(n²) | O(n) |
| [`4sum.js`](4sum.js) | Find all unique quadruplets that sum to a target | O(n³) | O(n) |
| [`binarySearch.js`](binarySearch.js) | Search a sorted array for a value | O(log n) | O(1) |
| [`buy_sell_stock.js`](buy_sell_stock.js) | Best day to buy/sell a stock for max profit | O(n) | O(1) |
| [`contains_duplicate.js`](contains_duplicate.js) | Detect whether any value repeats | O(n) | O(1) |
| [`generating_fibonacci_series.js`](generating_fibonacci_series.js) | Generate the first n Fibonacci numbers | O(n) | O(n) |
| [`max_product_subarray.js`](max_product_subarray.js) | Largest product of a contiguous subarray | O(n) | O(1) |
| [`max_water_container.js`](max_water_container.js) | Two lines that hold the most water | O(n) | O(1) |
| [`maximum_subarr.js`](maximum_subarr.js) | Largest sum of a contiguous subarray (Kadane's algorithm) | O(n) | O(1) |
| [`mergeIntervals.js`](mergeIntervals.js) | Merge all overlapping intervals | O(n log n) | O(n) |
| [`min_in_sorted_arr.js`](min_in_sorted_arr.js) | Find the minimum in a rotated sorted array | O(n) | O(1) |
| [`product_of_arr_except_Self.js`](product_of_arr_except_Self.js) | Product of all elements except self, without division | O(n) | O(n) |
| [`search_in_roated_arr.js`](search_in_roated_arr.js) | Search a target in a rotated sorted array | O(log n) | O(1) |
| [`topKFrequentElements.js`](topKFrequentElements.js) | The k most frequent elements (bucket sort) | O(n) | O(n) |

Each file has a `require.main === module` guard, so `node <file>.js` runs
its own demo, and importing it with `require()` (as the tests do) doesn't
trigger any console output.
