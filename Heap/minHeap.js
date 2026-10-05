/**
 * Min-Heap (binary heap)
 * Array-backed binary heap where each parent is <= its children. Backs
 * efficient priority-queue behaviour: O(log n) insert/extract instead of
 * O(n log n) re-sorting after every change.
 *
 * Time:  insert O(log n), extractMin O(log n), peek O(1)
 * Space: O(n)
 */
class MinHeap {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    peek() {
        return this.items[0];
    }

    insert(value) {
        this.items.push(value);
        this._bubbleUp(this.items.length - 1);
    }

    extractMin() {
        if (this.items.length === 0) return undefined;
        const min = this.items[0];
        const last = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = last;
            this._bubbleDown(0);
        }
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.items[parent] <= this.items[index]) break;
            [this.items[parent], this.items[index]] = [this.items[index], this.items[parent]];
            index = parent;
        }
    }

    _bubbleDown(index) {
        const n = this.items.length;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let smallest = index;

            if (left < n && this.items[left] < this.items[smallest]) smallest = left;
            if (right < n && this.items[right] < this.items[smallest]) smallest = right;
            if (smallest === index) break;

            [this.items[smallest], this.items[index]] = [this.items[index], this.items[smallest]];
            index = smallest;
        }
    }
}

module.exports = { MinHeap };

if (require.main === module) {
    const heap = new MinHeap();
    [5, 1, 3, 2, 4].forEach((n) => heap.insert(n));
    const sorted = [];
    while (heap.size()) sorted.push(heap.extractMin());
    console.log(sorted); // [1, 2, 3, 4, 5]
}
