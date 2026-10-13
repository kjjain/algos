# Graphs

Graph data structures, shortest-path, and ordering algorithms, plus
[`Notes.text`](Notes.text) with study notes on graph types, representations,
and common problem categories.

| File | Algorithm | Time | Space |
|---|---|---|---|
| [`graph.js`](graph.js) | Undirected adjacency-list graph implementation | O(1) edge lookup (average) | O(V + E) |
| [`dijkstra.js`](dijkstra.js) | Single-source shortest path (non-negative weights) | O(V²) | O(V) |
| [`topological_sort.js`](topological_sort.js) | Order nodes so every edge points forward (Kahn's algorithm) | O(V + E) | O(V) |
| [`union_find.js`](union_find.js) | Track connected components with union-by-rank + path compression | O(α(n)) amortized per op | O(n) |
