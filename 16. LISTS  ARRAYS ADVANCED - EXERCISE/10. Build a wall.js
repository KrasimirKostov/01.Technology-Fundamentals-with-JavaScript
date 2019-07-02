function solve(arr) {
    let newArr = [];
    let counter = 0;
    arr.map(Number);
    let sum = 0;
    while (!arr.every(x => x === 30)) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {

            while (arr[i] !== 30) {
                arr[i]++;
                counter++;
                break;
            }
        }
        sum += counter * 195;
        newArr.push(counter * 195);

    }
    console.log(newArr.join(', '));

    console.log(`${sum * 1900} pesos`);
}
solve([17, 22, 17, 19, 17]);