const test = require('node:test');
const assert = require('node:assert/strict');
const { dijkstra } = require('../Graphs/dijkstra');
const { topologicalSort } = require('../Graphs/topological_sort');
const { UnionFind } = require('../Graphs/union_find');

test('dijkstra finds shortest distances from the start node', () => {
    const graph = { A: [['B', 4], ['C', 1]], B: [['D', 1]], C: [['B', 2], ['D', 5]], D: [] };
    assert.deepEqual(dijkstra(graph, 'A'), { A: 0, B: 3, C: 1, D: 4 });
});

test('topologicalSort orders nodes so dependencies come first', () => {
    const order = topologicalSort({ A: ['B', 'C'], B: ['D'], C: ['D'], D: [] });
    assert.ok(order.indexOf('A') < order.indexOf('B'));
    assert.ok(order.indexOf('B') < order.indexOf('D'));
    assert.ok(order.indexOf('C') < order.indexOf('D'));
});

test('UnionFind tracks connected components', () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    uf.union(1, 2);
    assert.equal(uf.connected(0, 2), true);
    assert.equal(uf.connected(0, 3), false);
});
