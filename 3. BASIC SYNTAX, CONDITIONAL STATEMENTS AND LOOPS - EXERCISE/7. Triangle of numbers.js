function solve(n) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        console.log((i.toString() + " ").repeat(i));
    }

}
solve(5);