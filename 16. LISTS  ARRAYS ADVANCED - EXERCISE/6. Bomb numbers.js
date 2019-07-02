function solve(sequenceOfNumbers, bombNumber) {
    let [specialNumber, power] = bombNumber;

    let bombIndex = -1;
    let sum = 0;
    for (let i = 0; i < sequenceOfNumbers.length; i++) {
        if (sequenceOfNumbers[i] === specialNumber) {
            bombIndex = i;
            let start = Math.max(0, bombIndex - power);
            let count = Math.min(power + 1 + bombIndex, 2 * power + 1);
            sequenceOfNumbers.splice(start, count);
            i = start-1; 
        }
    }
    for (let num of sequenceOfNumbers) {
        sum += num;
    }
    console.log(sum);


}
solve([1, 2, 6, 7, 8, 9],
    [9, 3]





);