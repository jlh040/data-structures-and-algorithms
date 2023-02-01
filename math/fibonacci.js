// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibRecursive(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function fibIterative(n) {
    const result = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result.push(0)
        } else if (i === 1) {
            result.push(1)
        } else {
            result.push(result[i - 1] + result[i - 2])
        }
    }

    return result[n];
}