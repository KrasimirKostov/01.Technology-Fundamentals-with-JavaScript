/*
function solve(arr) {
    let maxInteger = 0;
    let newArr = [];
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                maxInteger = arr[i];
            } else {
                maxInteger = 0;
                break;
            }
        }
        if (maxInteger !=0) {
            newArr.push(maxInteger);
        }
    }


    newArr.push(arr[arr.length - 1]);
    console.log(newArr.join(' '));
}
solve([41, 41, 34, 20]);
*/
function solve(arr) {
    let topIntegers = [];
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        isTopInteger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (currentEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            topIntegers.push(currentEl);
        }
    }
    console.log(topIntegers.join(' '));
}
solve([41, 41, 34, 20]);
