const test = require('node:test');
const assert = require('node:assert/strict');
const { lengthOfLongestSubstring } = require('../Strings/longest_substring_without_repeating');
const { isPalindrome } = require('../Strings/valid_palindrome');

test('lengthOfLongestSubstring finds the longest run of unique chars', () => {
    assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
    assert.equal(lengthOfLongestSubstring('bbbbb'), 1);
    assert.equal(lengthOfLongestSubstring(''), 0);
});

test('isPalindrome ignores case and non-alphanumeric characters', () => {
    assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
    assert.equal(isPalindrome('race a car'), false);
});
