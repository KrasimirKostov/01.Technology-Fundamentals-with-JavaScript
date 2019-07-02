function solve(arr) {
    let row = arr[0].length;
    let sumRow = 0;
    let sumColumn = 0;
    let arrRow = [];
    let arrColumn = [];
    for (let i = 0; i < arr.length; i++) {
        let sumRow = 0;
        for (let j = 0; j < row; j++) {
            sumRow += arr[i][j];
        }
        arrRow.push(sumRow);
    }
    for (let j = 0; j < row; j++) {
        let sumColumn = 0;
        for (let i = 0; i < arr.length; i++) {
            sumColumn += arr[j][i];
        }
        arrColumn.push(sumColumn);
    }
    console.log(arrRow);
    console.log(arrColumn);
}
solve(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
);
