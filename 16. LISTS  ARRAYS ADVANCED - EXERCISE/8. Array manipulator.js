function solve(arr, commands) {

    for (let currentCommand of commands) {
        let tokens = currentCommand.split(' ');
        let action = tokens[0];

        switch (action) {
            case 'add':
                let startIndex = Number(tokens[1]);
                let elementToAdd = Number(tokens[2]);
                arr.splice(startIndex, 0, elementToAdd);
                break;
            case 'addMany':
                let toDo = tokens.shift();
                let index = Number(tokens.shift());
                let numsToAdd = tokens.map(Number);
                arr.splice(index, 0, ...numsToAdd);
                break;
            case 'contains':
                let containNum = Number(tokens[1]);
                console.log(arr.indexOf(containNum));
                break;
            case 'remove':
                let removeIndex = Number(tokens[1]);
                arr.splice(removeIndex, 1);
                break;
            case 'shift':
                let numberOfShifts = Number(tokens[1]);
                numberOfShifts %= arr.length;
                let firstPart = arr.slice(0, numberOfShifts);
                let secondPart = arr.slice(numberOfShifts);
                arr = secondPart.concat(firstPart);
                break;
            case 'sumPairs':
                function toSumPairs(arr) {
                    let newArr = [];
                    for (let i = 0; i < arr.length; i += 2) {
                        if (arr[i + 1] === undefined) {
                            arr[i + 1] = 0;
                        }
                        let sum = arr[i] + arr[i + 1];
                        newArr.push(sum);
                    }
                    return newArr;
                }
                arr = toSumPairs(arr);
                break;
            case 'print':
                console.log(arr);
                return;
                break;

        }

    }


}
solve([1, 2, 3, 4, 5],
    ['contains 6', 'print']
);