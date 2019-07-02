function solve(arr) {
    let sumOriginal = 0;
    let sumModified = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOriginal += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }
        sumModified += arr[i];
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);

}
solve([5, 15, 23, 56, 35]);