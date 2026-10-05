const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidBST } = require('../Trees/validate_bst');
const { lowestCommonAncestor } = require('../Trees/lowest_common_ancestor');
const { BST } = require('../Trees/binary_search_tree');

test('isValidBST accepts a valid tree', () => {
    const root = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };
    assert.equal(isValidBST(root), true);
});

test('isValidBST rejects an invalid tree', () => {
    const root = { val: 5, left: { val: 1, left: null, right: null }, right: { val: 4, left: { val: 3, left: null, right: null }, right: { val: 6, left: null, right: null } } };
    assert.equal(isValidBST(root), false);
});

test('lowestCommonAncestor finds the LCA', () => {
    const root = {
        val: 3,
        left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: { val: 7, left: null, right: null }, right: { val: 4, left: null, right: null } } },
        right: { val: 1, left: null, right: null },
    };
    assert.equal(lowestCommonAncestor(root, 5, 1).val, 3);
    assert.equal(lowestCommonAncestor(root, 5, 4).val, 5);
});

test('BST insert/contains works for values on both sides of the root', () => {
    const tree = new BST(10);
    [5, 15, 2, 7, 12, 20].forEach((v) => tree.insert(v));
    assert.equal(tree.contains(20), true);
    assert.equal(tree.contains(7), true);
    assert.equal(tree.contains(99), false);
});
