/**
 * Longest Substring Without Repeating Characters
 * Sliding window with a map of the last-seen index per character. When a
 * repeat is found inside the current window, the window's left edge jumps
 * past the previous occurrence instead of shrinking one step at a time.
 *
 * Time:  O(n) - each character is visited at most twice
 * Space: O(min(n, alphabet size)) - for the last-seen map
 */
function lengthOfLongestSubstring(s) {
    const lastSeen = new Map();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (lastSeen.has(char) && lastSeen.get(char) >= start) {
            start = lastSeen.get(char) + 1;
        }
        lastSeen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { lengthOfLongestSubstring };

if (require.main === module) {
    console.log(lengthOfLongestSubstring('abcabcbb')); // 3
}
