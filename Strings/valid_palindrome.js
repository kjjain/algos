/**
 * Valid Palindrome
 * Two pointers converge from both ends, skipping non-alphanumeric
 * characters, comparing lowercase letters as they go.
 *
 * Time:  O(n)
 * Space: O(1)
 */
function isPalindrome(s) {
    const isAlphaNumeric = (ch) => /[a-z0-9]/i.test(ch);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }

    return true;
}

module.exports = { isPalindrome };

if (require.main === module) {
    console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
}
