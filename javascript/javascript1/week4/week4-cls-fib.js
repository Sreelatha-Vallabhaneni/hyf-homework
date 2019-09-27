
// Fibonacci Sequence
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        const fibArrFormula = arr[i - 2] + arr[i - 1];
        arr.push(fibArrFormula);
    }
    return arr[n]
} /*function fib(n) {   //recursive
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}*/
console.log(fib(9));
console.log(fib(4));

