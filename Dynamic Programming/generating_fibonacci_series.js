
function generateFibonacci(n) {

    let i;
    let fib = [0,1]; // Initialize array!

    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

generateFibonacci(5);