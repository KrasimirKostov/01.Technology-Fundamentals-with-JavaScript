function solve(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
    console.log(isPrime);
}
solve(8);
