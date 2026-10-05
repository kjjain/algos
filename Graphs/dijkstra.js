/**
 * Dijkstra's Shortest Path
 * Greedily expands the closest unvisited node using a simple array-scan
 * priority queue (fine for the small/teaching-sized graphs in this repo -
 * swap in a binary heap for large graphs to get O((V + E) log V)).
 *
 * Graph format: { A: [['B', 4], ['C', 1]], B: [...], ... }
 *
 * Time:  O(V^2) with the array-scan queue used here
 * Space: O(V)
 */
function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    for (const node in graph) distances[node] = Infinity;
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        let current = null;
        for (const node in distances) {
            if (!visited.has(node) && (current === null || distances[node] < distances[current])) {
                current = node;
            }
        }
        if (current === null || distances[current] === Infinity) break;

        visited.add(current);
        for (const [neighbor, weight] of graph[current] || []) {
            const candidate = distances[current] + weight;
            if (candidate < distances[neighbor]) {
                distances[neighbor] = candidate;
            }
        }
    }

    return distances;
}

module.exports = { dijkstra };

if (require.main === module) {
    const graph = {
        A: [['B', 4], ['C', 1]],
        B: [['D', 1]],
        C: [['B', 2], ['D', 5]],
        D: [],
    };
    console.log(dijkstra(graph, 'A')); // { A: 0, B: 3, C: 1, D: 4 }
}
