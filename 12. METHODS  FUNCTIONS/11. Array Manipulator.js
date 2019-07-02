function solve(arr) {
    let newArr = arr[0].split(' ').map(Number);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'max odd') {
            console.log(findMaxOddIndex(newArr));
            function findMaxOddIndex(newArr) {
                //newArr = newArr.split(' ').map(Number);
                let MaxOddIndex = -1;
                let MaxOdd = Number.MIN_SAFE_INTEGER;
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr[k] % 2 !== 0) {
                        if (newArr[k] >= MaxOdd) {
                            MaxOdd = newArr[k];
                            MaxOddIndex = k;
                        }
                    }
                }
                if (MaxOddIndex === -1) {
                    return 'No matches';
                } else {
                    return MaxOddIndex;
                }
            }
        } else if (arr[i] === 'max even') {
            console.log(findMaxEvenIndex(newArr));
            function findMaxEvenIndex(newArr) {
                //newArr = newArr.split(' ').map(Number);
                let MaxEvenIndex = -1;
                let MaxEven = Number.MIN_SAFE_INTEGER;
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr[k] % 2 === 0) {
                        if (newArr[k] >= MaxEven) {
                            MaxEven = newArr[k];
                            MaxEvenIndex = k;
                        }
                    }
                }
                if (MaxEvenIndex === -1) {
                    return 'No matches';
                } else {
                    return MaxEvenIndex;
                }
            }
        } else if (arr[i] === 'min odd') {
            console.log(findMinOddIndex(newArr));
            function findMinOddIndex(newArr) {
                //newArr = newArr.split(' ').map(Number);
                let MinOddIndex = -1;
                let MinOdd = Number.MAX_SAFE_INTEGER;
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr[k] % 2 !== 0) {
                        if (newArr[k] <= MinOdd) {
                            MinOdd = newArr[k];
                            MinOddIndex = k;
                        }
                    }
                }
                if (MinOddIndex === -1) {
                    return 'No matches';
                } else {
                    return MinOddIndex;
                }
            }
        } else if (arr[i] === 'min even') {
            console.log(findMinEvenIndex(newArr));
            function findMinEvenIndex(newArr) {
                //newArr = newArr.split(' ').map(Number);
                let MinEvenIndex = -1;
                let MinEven = Number.MAX_SAFE_INTEGER;
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr[k] % 2 === 0) {
                        if (newArr[k] <= MinEven) {
                            MinEven = newArr[k];
                            MinEvenIndex = k;
                        }
                    }
                }
                if (MinEvenIndex === -1) {
                    return 'No matches';
                } else {
                    return MinEvenIndex;
                }
            }

        } else if (arr[i].includes('exchange')) {
            arr[i] = arr[i].split(' ').map(Number);
            let exchangeIndex = -1;
            exchangeIndex = arr[i][1];
            if (exchangeIndex > (newArr.length - 1)||exchangeIndex<0) {
                console.log('Invalid index');
            } else if (exchangeIndex === (newArr.length - 1)||exchangeIndex===0) {
                resultArr = newArr;

            } else {
                newArr = exchangeArr(newArr);
                function exchangeArr(newArr) {

                    let subArr1 = [];
                    let subArr2 = [];
                    let resultArr = [];

                    for (let j = 0; j <= exchangeIndex; j++) {
                        subArr1.push(newArr[j]);
                    }
                    subArr1 = subArr1.join(' ');
                    for (let k = exchangeIndex + 1; k < newArr.length; k++) {
                        subArr2.push(newArr[k]);

                    }
                    subArr2 = subArr2.join(' ');
                    resultArr = subArr2 + ' ' + subArr1;
                    resultArr = resultArr.split(' ').map(Number);
                    return resultArr;
                }
            }

        } else if (arr[i].includes('first') && arr[i].includes('odd')) {
            arr[i] = arr[i].split(' ').map(Number);
            let count = arr[i][1];
            if (count > newArr.length) {
                console.log('Invalid count');
            } else {
                console.log(`[${findFirstCountOdd(newArr).join(', ')}]`);
                function findFirstCountOdd(newArr) {
                    //newArr = newArr.split(' ').map(Number);
                    //let count = arr[1];
                    let counter = 0;
                    let resultArr = [];
                    for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i] % 2 !== 0) {
                            counter++;
                            while (counter <= count) {
                                resultArr.push(newArr[i]);
                                break;
                            }
                        }
                    }
                    if (counter === 0) {
                        return [];
                    } else {
                        return resultArr;
                    }
                }
            }
        } else if (arr[i].includes('first') && arr[i].includes('even')) {
            arr[i] = arr[i].split(' ').map(Number);
            let count = arr[i][1];
            if (count > newArr.length) {
                console.log('Invalid count');
            } else {
                console.log(`[${findFirstCountEven(newArr).join(', ')}]`);
                function findFirstCountEven(newArr) {
                    //newArr = newArr.split(' ').map(Number);
                    //let count = arr[1];
                    let counter = 0;
                    let resultArr = [];
                    for (let i = 0; i < newArr.length; i++) {
                        if (newArr[i] % 2 === 0) {
                            counter++;
                            while (counter <= count) {
                                resultArr.push(newArr[i]);
                                break;
                            }
                        }
                    }
                    return resultArr;
                }
            }
        } else if (arr[i].includes('last') && arr[i].includes('odd')) {
            arr[i] = arr[i].split(' ').map(Number);
            let count = arr[i][1];
            if (count > newArr.length) {
                console.log('Invalid count');
            } else {
                console.log(`[${findLastCountOdd(newArr).join(', ')}]`);
                function findLastCountOdd(newArr) {
                    //newArr = newArr.split(' ').map(Number);
                    //let count = arr[1];
                    let counter = 0;
                    let resultArr = [];
                    for (let i = newArr.length - 1; i >= 0; i--) {
                        if (newArr[i] % 2 !== 0) {
                            counter++;

                            while (counter <= count) {
                                resultArr.push(newArr[i]);
                                break;
                            }

                        }
                    }
                    resultArr.reverse();
                    return resultArr;
                }

            }
        } else if (arr[i].includes('last') && arr[i].includes('even')) {
            arr[i] = arr[i].split(' ').map(Number);
            let count = arr[i][1];
            if (count > newArr.length) {
                console.log('Invalid count');
            } else {
                console.log(`[${findLastCountEven(newArr).join(', ')}]`);
                function findLastCountEven(newArr) {
                    //newArr = newArr.split(' ').map(Number);
                    //let count = arr[1];
                    let counter = 0;
                    let resultArr = [];
                    for (let i = newArr.length - 1; i >= 0; i--) {
                        if (newArr[i] % 2 === 0) {

                            counter++;
                            while (counter <= count) {
                                resultArr.push(newArr[i]);
                                break;
                            }

                        }
                    }
                    resultArr.reverse();
                    return resultArr;
                }
            }
        }

    }

    console.log(`[${newArr.join(', ')}]`);


}
solve(['1 8 2 3 10 5',
    'exchange 0',
    'last 3 even',
    'last 1 odd',
    'last 7 odd',
    'last 4 odd']
);