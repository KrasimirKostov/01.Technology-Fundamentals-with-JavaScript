
function solve(input) {
    input.sort((a, b) => b - a);
    let length = input.length;
    let mergedArray = [];

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            mergedArray.push(input.shift());
        } else {
            mergedArray.push(input.pop());
        }

    }
}
console.log(mergedArray.join(' '));




/*
function solve(arr) {
    let newArr = [];
    arr = arr.sort((a, b) => b - a);
    
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr.length % 2 === 1) {
            if (i === Math.floor(arr.length / 2)) {
                newArr.push(arr[i]);
            }else{
                newArr.push(arr[i]);
            newArr.push(arr[arr.length - i - 1]);
            }
        } else {
            newArr.push(arr[i]);
            newArr.push(arr[arr.length - i - 1]);
        }

    }
    console.log(newArr.join(' '));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18]);
*/