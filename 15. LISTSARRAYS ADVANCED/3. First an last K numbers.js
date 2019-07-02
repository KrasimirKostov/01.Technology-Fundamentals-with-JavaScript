function solve(arr) {
    let k = arr.shift();
    let firstLine = arr.slice(0, k);
    let secondLine = arr.slice(arr.length - k);
    console.log(firstLine.join(' '));
    console.log(secondLine.join(' '));

}
solve([3,
    6, 7, 8, 9]
);