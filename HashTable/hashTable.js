class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0;

        for(let i=0; i < key.length; i++) {
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }
}


const hashTable = new HashTable(50)

hashTable.set("name", "KJ")
hashTable.set("name", "AJ")
console.log(hashTable.get("name"))

console.log(hashTable)