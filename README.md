# algos

Data structures and algorithms implemented for practice and interview
prep, plus a [from-scratch machine learning project](MachineLearning) with
zero external dependencies.

[![CI](https://github.com/kjjain/algos/actions/workflows/ci.yml/badge.svg)](https://github.com/kjjain/algos/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Structure

| Folder | Language | Contents |
|---|---|---|
| [`Arrays/`](Arrays) | JavaScript | Two-pointer, sliding-window, and array manipulation problems |
| [`Binary/`](Binary) | JavaScript | Bit-manipulation problems |
| [`DS_Basics/`](DS_Basics) | JavaScript | Big-O and data structure fundamentals (study notes) |
| [`Dynamic Programming/`](Dynamic%20Programming) | JavaScript | Memoization and tabulation problems |
| [`Graphs/`](Graphs) | JavaScript | BFS, DFS, Dijkstra, topological sort, union-find |
| [`Heap/`](Heap) | JavaScript | Min-heap and a priority-queue-based problem |
| [`LinkedList/`](LinkedList) | JavaScript | Singly linked list, reversal, cycle detection |
| [`sorting/`](sorting) | JavaScript | Bubble, insertion, selection, merge, quick, and heap sort |
| [`stacks/`](stacks) | JavaScript | Stack-based problems |
| [`Strings/`](Strings) | JavaScript | String manipulation problems |
| [`Trees/`](Trees) | JavaScript | Binary search tree, traversals, validation, LCA |
| [`MachineLearning/`](MachineLearning) | Python | Linear/logistic regression, KNN, K-means, and a neural network — all from scratch |
| [`tests/`](tests) | JavaScript | `node:test` suite covering the JS algorithms |

Each subfolder has its own README with a complexity table for every file
in it.

## Running the JavaScript algorithms

Requires [Node.js](https://nodejs.org/) (any reasonably recent version;
tested on Node 22). No `npm install` needed — there are no dependencies.

Every file runs its own small demo when executed directly:

```bash
node sorting/quickSort.js
node Graphs/dijkstra.js
```

Run the full test suite:

```bash
npm test
# or directly:
node --test tests/**/*.test.js
```

## Running the machine learning project

Requires Python 3 only — no `pip install` needed, see
[`MachineLearning/README.md`](MachineLearning/README.md) for details.

```bash
cd MachineLearning
python3 run_all_demos.py
python3 -m unittest discover -s tests
```

## Notes

This repo is a working log of interview-prep problems and study notes, not
a polished library — some files include the original problem statement as
a comment above the solution. A few implementations that had bugs (an
infinite-recursion bug in `climbing_stairs.js`, a `4sum.js` that computed
but never returned its result, a BST `insert` that dropped every value
greater than the root, and a rotated-array search that was O(n) despite
requiring O(log n)) have been fixed and now have test coverage alongside
the newer additions.

## License

[MIT](LICENSE)
