function solve(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result = result * 2 + (+number[i]);
    }
    console.log(result);
}
solve(`11110000`);