/**
 * Union-Find (Disjoint Set Union)
 * Tracks a partition of elements into disjoint sets, supporting fast "are
 * these connected?" queries. Uses union by rank and path compression so
 * both operations run in (amortized) near-constant time.
 *
 * Time:  O(alpha(n)) amortized per operation (alpha = inverse Ackermann)
 * Space: O(n)
 */
class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = new Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) return false;

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

module.exports = { UnionFind };

if (require.main === module) {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    uf.union(1, 2);
    console.log(uf.connected(0, 2), uf.connected(0, 3)); // true false
}
