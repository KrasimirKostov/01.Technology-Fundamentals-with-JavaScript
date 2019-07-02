function solve(arr) {
    let firstElement = arr.shift(arr);
    let lastElement = arr.pop(arr);
    let sum = +firstElement + +lastElement;
    console.log(sum);

}
solve(['20', '30', '40']);