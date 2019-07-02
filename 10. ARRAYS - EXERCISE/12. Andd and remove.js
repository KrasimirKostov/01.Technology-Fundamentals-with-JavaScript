function solve(arr) {
    let initialNumber = 1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            newArr.push(initialNumber);
            initialNumber++;
        } else if (arr[i] === 'remove') {
            newArr.pop(newArr[i - 1]);
            initialNumber++;
        }
    }
    if (newArr.length===0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }

}
solve(['remove', 'remove', 'remove']);