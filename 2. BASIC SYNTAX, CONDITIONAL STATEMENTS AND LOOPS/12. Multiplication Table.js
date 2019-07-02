function solve(n) {
    let b = 1;
    for (let a = 1; a <= 10; a++) {
        b = n * a;
        console.log(`${n} X ${a} = ${b}`);
    }
}
solve(5);