function solve(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        sum += (+numberAsString[i]);
    }
    console.log(sum);

}
solve(245678);