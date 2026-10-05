const test = require('node:test');
const assert = require('node:assert/strict');
const { LinkedList, ListNode, reverseList, hasCycle, findMiddle } = require('../LinkedList/linkedList');

test('reverseList reverses the list', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    list.head = reverseList(list.head);
    assert.deepEqual(list.toArray(), [5, 4, 3, 2, 1]);
});

test('findMiddle returns the middle node', () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    assert.equal(findMiddle(list.head).val, 3);
});

test('hasCycle detects a cycle', () => {
    const a = new ListNode(1);
    const b = new ListNode(2);
    a.next = b;
    b.next = a; // cycle back to a
    assert.equal(hasCycle(a), true);

    const list = new LinkedList([1, 2, 3]);
    assert.equal(hasCycle(list.head), false);
});
