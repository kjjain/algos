/**
 *
 * A sub-sequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative order of
 * the remaining characters. (eg, "ace" is a sub-sequence of "abcde" while "aec" is not).
 * A common sub-sequence of two strings is a sub-sequence that is common to both strings.

 If there is no common sub-sequence, return 0.

 Example 1:

 Input: text1 = "abcde", text2 = "ace"
 Output: 3
 Explanation: The longest common sub-sequence is "ace" and its length is 3.

 * **/

function recurrsion(text1, text2, index1, index2, memo) {
    if (index1 < 1 || index2 < 1) return 0;

    let key = `${index1}#${index2}`;

    let result;
    if (memo.has(key)) {
        return memo.get(key);
    }

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recurrsion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {

        result = Math.max(recurrsion(text1, text2, index1, index2 - 1, memo), recurrsion(text1, text2, index1 - 1, index2, memo));
    }
    memo.set(key, result);
    return result;
}

let longestCommonSubsequence = function (text1, text2) {
    const memo = new Map();
    return recurrsion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

