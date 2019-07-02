
function findFirstCountOdd(arr) {
    arr = arr.split(' ').map(Number);
    let count = 2;
    let counter = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            counter++;
            while (counter <= count) {
                newArr.push(arr[i]);
                break;
            }
        }
    }
    console.log(newArr.join(', '));
}
findFirstCountOdd('1 3 6 8 10');

/*
function findMaxOddIndex(arr) {
    arr = arr.split(' ').map(Number);
    let MaxOddIndex = -1;
    let MaxOdd = Number.MIN_SAFE_INTEGER;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] % 2 !== 0) {
            if (arr[k] >= MaxOdd) {
                MaxOdd=arr[k];
                MaxOddIndex = k;
            }
        }
    }
    console.log(MaxOddIndex);
}
findMaxOddIndex('1 3 5 7 9');
*/