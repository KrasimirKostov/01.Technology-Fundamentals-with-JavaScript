function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
        secondArr[i] = Number(secondArr[i]);
    }

    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i]) {
            sum += firstArr[i];
            
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
solve(['1','2','3','4','5'], ['1','2','4','4','5']);