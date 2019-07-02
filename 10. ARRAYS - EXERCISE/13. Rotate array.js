function solve(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop(arr[arr.length - 1]);

    for (let i = 0; i < rotations; i++) {
        let lastElement = arr[arr.length - 1];
        for (let j = 0; j < arr.length; j++) {
            arr[arr.length - 1 - j] = arr[arr.length - 2 - j];
        }
        arr[0] = lastElement;
    }
    console.log(arr.join(' '));

}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
