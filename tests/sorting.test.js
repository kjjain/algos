const test = require('node:test');
const assert = require('node:assert/strict');
const { insertionSort } = require('../sorting/insertionSort');
const { selectionSort } = require('../sorting/selectionSort');
const { heapSort } = require('../sorting/heapSort');

const unsorted = [5, 1, 4, 2, 8, 0, -3];
const expected = [-3, 0, 1, 2, 4, 5, 8];

test('insertionSort sorts an array', () => {
    assert.deepEqual(insertionSort([...unsorted]), expected);
});

test('selectionSort sorts an array', () => {
    assert.deepEqual(selectionSort([...unsorted]), expected);
});

test('heapSort sorts an array', () => {
    assert.deepEqual(heapSort([...unsorted]), expected);
});
