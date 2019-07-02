function solve(n) {
    for (let i = 1; i <= n; i++) {
        let nAsString = i.toString();
        let sumDigits = 0;
        for (let a = 0; a < nAsString.length; a++) {
            sumDigits += Number(nAsString[a]);
        }
        if (sumDigits === 5 || sumDigits === 7 || sumDigits === 11) {
            value = 'True';
        } else {
            value = 'False';
        }
        console.log(`${i} -> ${value}`);

    }

}
solve(15);