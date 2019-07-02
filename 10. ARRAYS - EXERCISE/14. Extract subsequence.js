function solve(arr) {
    let currentElement = arr[0];
    let newArr = [currentElement];
    for (let i = 1; i < arr.length; i++) {
        if (currentElement <= arr[i]) {
            currentElement = arr[i];
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));

}
solve([ 20, 3, 2, 15, 6, 1]);


/*
function solve(arr, rotation) {

    for (let i = 0; i < rotation; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length-1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = firstElement;
    }
    console.log(arr.join(' '));

}
solve([1, 2, 3, 4, 5, 6], 3);
*/