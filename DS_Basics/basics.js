
/**
Complexity Analysis

what makes one solution better than other

 Time complexity: How much time the algorithm takes

 Space Complexity: how much space the algorithm takes

**/

/**
 *
 * Big O notation
 *
 * Let's take 3 examples:
 *
 * Algorithm                  Space Complexity        Time Complexity
 *
 * f1(a) => 1 + a[0]               O(1)                     O(1)
 * f2(a) => sum(a)                 O(1)                     O(N)
 * f3(a) => pair(a)                O(1)                     O(N*N)
 *
 *
 * worst time cases:
 *
 * O(2^N) => Fibonnaci series
 * O(N!) => O(N)*(N-1)*(N-2)...1
 *
 * **/

/**
 *
 * Logarithm Analysis:
 *
 * log with base b (x) = y   =>  b^y = x
 *
 * For binary computer science the base is always 2
 *
 * log(N) = y eg: log(4) = 2  log(16)  = 4
 *
 * **/


/**
 *
 * Linked Lists:
 *
 * Single Linked Lists:
 * Reads from left to Right
 *
 * 3->1->4->2
 *
 * Insert 5 at the head note:
 *
 * Head->3->1->4->2
 *
 * Head->5->3->1->4->2
 *
 *
 * Double Single Lists:
 *
 * Head -> 3 <=> 1 <=> 4 <=> 2 -> tail
 *
 * **/


/**
 *
 * Hash Tables: Its a key:value store
 *
 * "foo" => 1
 * "bar" => 2
 *
 * Constant Time operations:
 * Time = O(1) for insert, delete, search
 *
 * **/


/**
 * Stacks and Queues:
 *
 * Stack: (LIFO)
 * Last in First Out (last element inserted in
 * stack will be removed first)
 *
 * Queue: (FIFO)
 * First in First Out (first element in queue will be removed first)
 *
 * Stacks are implemented using dynamic arrays:
 * O(1) ST => insert/delete
 *
 * Queues are implemented with linked list
 * O(1) ST => insert/delete
 *
 * **/


/**
 * Strings
 *
 * String: array of characters (stored as array of integers as ASCII)
 *
 * traverse => O(N) T  O(1) S
 * copy     => O(N) ST
 * get      => O(1) ST
 *
 * **/


/**
 * Graphs: Collection of nodes that may or may not be connected
 *
 * Consists of nodes and edges
 *
 * Example: Friends on facebook and flights connection
 *
 * Cyclic Graph and Acyclic Graph
 *
 * Space: O(V+E)
 * Time: O(V+E)
 *
 *
 * **/


/**
 *
 * Trees
 *  Root Node and Child Node
 *  Each node can have only one parent node
 *
 *  Binary Tree: Every node has at most 2 child nodes
 *  Ternary Tree: Every node has at most 3 child nodes
 *  Binary Search Tree: Balanced binary tree,
 *  left node is less than parent node and
 *  right node is greater than parent node
 *
 *  Space: O(N)
 *  Time: O(N)
 *
 *  Best case: O(log(N))
 *
 *
 * **/