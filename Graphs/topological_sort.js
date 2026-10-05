/**
 * Topological Sort (Kahn's algorithm, BFS on in-degrees)
 * Repeatedly removes nodes with in-degree 0, decrementing the in-degree of
 * their neighbors, until every node is processed (or a cycle remains).
 *
 * Graph format: { A: ['B', 'C'], B: ['D'], C: ['D'], D: [] }
 *
 * Time:  O(V + E)
 * Space: O(V)
 */
function topologicalSort(graph) {
    const inDegree = {};
    for (const node in graph) inDegree[node] = 0;
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    const queue = Object.keys(inDegree).filter((node) => inDegree[node] === 0);
    const order = [];

    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        for (const neighbor of graph[node] || []) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    if (order.length !== Object.keys(graph).length) {
        throw new Error('Graph has a cycle - no valid topological order exists');
    }

    return order;
}

module.exports = { topologicalSort };

if (require.main === module) {
    console.log(topologicalSort({ A: ['B', 'C'], B: ['D'], C: ['D'], D: [] }));
}
