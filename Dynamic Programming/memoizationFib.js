const fib = (n, memo = {}) => {
  // 1. Check if the result is already in the cache
  if (n in memo) return memo[n];
  
  // 2. Base cases
  if (n <= 1) return n;
  
  // 3. Compute, save to cache, and return the result
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Test performance
console.time("Fibonacci Time");
console.log(fib(50)); // Outputs: 12586269025
console.timeEnd("Fibonacci Time"); 