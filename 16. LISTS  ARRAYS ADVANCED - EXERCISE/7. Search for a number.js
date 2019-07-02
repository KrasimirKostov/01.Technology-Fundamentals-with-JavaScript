function solve(firstArr, secondArr) {
    /*
    let takeNumber = secondArr[0];
    let deleteNumber = secondArr[1];
    let searchNumber = secondArr[2];
    */
    let [takeNumber, deleteNumber, searchNumber] = secondArr;
    firstArr = firstArr.slice(0, takeNumber);
    firstArr.splice(0, deleteNumber);
    let result = firstArr.filter(x => x === searchNumber);
    console.log(`Number ${searchNumber} occurs ${result.length} time.`);

}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);