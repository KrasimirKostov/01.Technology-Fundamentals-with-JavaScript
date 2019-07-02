/*
function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));

}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
*/

function solve(arr) {
    let newArr = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let element = arr.shift();
        newArr.push(element);
        arr = arr.filter(x => x !== element);

    }
    console.log(newArr.join(' '));


}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);