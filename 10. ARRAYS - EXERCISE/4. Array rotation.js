/*
function solve(arr, rotations) {
    while (rotations > 0) {
        let newArr = [];
        for (let i = 1; i < arr.length; i++) {
            newArr[i - 1] = arr[i];
        }
        newArr.push(arr[0]);
        rotations--;
        arr = newArr;
    }
    console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2);
*/

function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = firstElement;
    }
    console.log(arr.join(' '));

}
solve([51, 47, 32, 61, 21], 2);