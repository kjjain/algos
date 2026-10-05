//Simple graph data structure which works on adding the vertex and edges for the graph 
// using the adjancencyList

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        //Set has an add method to create the relation between vertexes
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }    

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1] && this.adjacencyList[vertex1].has(vertex2)
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2)
        }
        if(this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(let adjacentVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacentVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}



const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.display()
console.log("A has edge with B: " + graph.hasEdge("A", "B"))
console.log("A has edge with C: " + graph.hasEdge("A", "C"))
console.log("B has edge with C: " + graph.hasEdge("B", "C"))
console.log("C has edge with A: " + graph.hasEdge("C", "A"))
console.log("Removing edge between A and B")
graph.removeEdge("A", "B")
graph.display()
console.log("Removing vertex B")
graph.removeVertex("B")
graph.display()
console.log("Removing vertex A")
graph.removeVertex("A")
graph.display()
console.log("Removing vertex C")
graph.removeVertex("C")
graph.display()