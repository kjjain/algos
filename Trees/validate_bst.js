/**
 * Validate Binary Search Tree
 * Recursively checks that every node's value falls within an open
 * (min, max) range inherited from its ancestors.
 *
 * Time:  O(n) - every node is visited once
 * Space: O(h) - recursion stack, h = tree height
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

module.exports = { isValidBST };

if (require.main === module) {
    const root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };
    console.log(isValidBST(root)); // true
}
