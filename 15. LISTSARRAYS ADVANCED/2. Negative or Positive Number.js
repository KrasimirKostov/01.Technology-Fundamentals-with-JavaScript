function solve(arr) {
    let resultArr = [];
    for (let number of arr) {
        if (number < 0) {
            resultArr.unshift(number);
        } else {
            resultArr.push(number);
        }
    }
    /*
    for (let newNumber of resultArr) {
        console.log(newNumber);
    }
*/
    //console.log(resultArr.join('\n'));
    resultArr.forEach(x => console.log(x));

}
solve([7, -2, 8, 9]);