# Trees

Binary tree and binary search tree (BST) implementations and problems.

| File | Contents | Time | Space |
|---|---|---|---|
| [`binary_search_tree.js`](binary_search_tree.js) | `BST` class: `insert`, `contains`, `remove`, `getMinValue` | O(log n) avg / O(n) worst per op | O(log n) avg / O(n) worst |
| [`traversals.js`](traversals.js) | In-order, pre-order, post-order traversal | O(n) | O(n) |
| [`validate_bst.js`](validate_bst.js) | Check whether a binary tree is a valid BST | O(n) | O(h) |
| [`lowest_common_ancestor.js`](lowest_common_ancestor.js) | Lowest common ancestor of two nodes | O(n) | O(h) |

`h` = tree height (O(log n) for a balanced tree, O(n) worst case).
