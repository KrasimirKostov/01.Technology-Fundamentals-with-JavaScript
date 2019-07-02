function solve(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }
    let sumAsString = sum.toString();
    let result = sumAsString.includes('9');
    /*if (result) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }*/

    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);

}
solve(1233);