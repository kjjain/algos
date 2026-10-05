/**
 * Lowest Common Ancestor of a Binary Tree
 * Recurses into both subtrees; if a node has one target in each subtree
 * (or is itself one of the targets), it is the lowest common ancestor.
 *
 * Time:  O(n) - every node is visited once
 * Space: O(h) - recursion stack, h = tree height
 */
function lowestCommonAncestor(root, p, q) {
    if (root === null || root.val === p || root.val === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left || right;
}

module.exports = { lowestCommonAncestor };

if (require.main === module) {
    const root = {
        val: 3,
        left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } },
        right: { val: 1, left: null, right: null },
    };
    console.log(lowestCommonAncestor(root, 5, 1).val); // 3
}
