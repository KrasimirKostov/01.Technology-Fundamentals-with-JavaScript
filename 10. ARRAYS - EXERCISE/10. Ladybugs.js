function solve(arr) {
    let fieldSize = arr[0];
    let newArr = [];
    initialIndexes = arr[1].split(' ').map(Number);
    for (let k = 0; k < initialIndexes.length; k++) {
        if (initialIndexes[k] > -1 && initialIndexes[k] < fieldSize) {
            newArr[initialIndexes[k]] = 'ladybug';
        }
    }
    for (let i = 2; i < arr.length; i++) {
        let actions = arr[i].split(' ');
        let ladyBugIndex = Number(actions[0]);
        let direction = actions[1];
        let flyLength = Number(actions[2]);
        if (newArr[ladyBugIndex] !== 'ladybug') {
            continue;
        } else {
            if (direction === 'right') {
                newArr[ladyBugIndex] = 0;
                do {
                    ladyBugIndex += flyLength;
                } while (newArr[ladyBugIndex] === 'ladybug');
                if (ladyBugIndex > - 1 && ladyBugIndex < fieldSize) {
                    newArr[ladyBugIndex] = 'ladybug';
                }
            } else if (direction === 'left') {
                newArr[ladyBugIndex] = 0;
                do {
                    ladyBugIndex -= flyLength;
                } while (newArr[ladyBugIndex] === 'ladybug');
                if (ladyBugIndex > - 1 && ladyBugIndex < fieldSize) {
                    newArr[ladyBugIndex] = 'ladybug';
                }
            }
        }
    }
    for (let j = 0; j < fieldSize; j++) {
        if (newArr[j] === 'ladybug') {
            newArr[j] = 1;
        } else {
            newArr[j] = 0;

        }
    }
    console.log(newArr.join(' '));

}
solve([ 5, '3',
'3 left 2',
'1 left -2']


);
