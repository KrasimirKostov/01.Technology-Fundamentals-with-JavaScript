function solve(n, k) {
    let resultArr = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let sum = 0;
        let lastThreeElements = resultArr.slice(start);
        for (let num of lastThreeElements) {
            sum += num;
        }

        resultArr.push(sum);
    }
    console.log(resultArr.join(' '));

}
solve(8,2);