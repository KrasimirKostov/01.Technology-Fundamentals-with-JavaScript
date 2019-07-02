function solve(n, arr) {
    let reversedArr = [];
    for (let i = 0; i < n; i++) {
        reversedArr.push(arr[n - 1 - i]);
    }
    console.log(reversedArr.join(' '));

}
solve(3, [10, 20, 30, 40, 50]);