function solve(arr) {
    let currentSubsequence = [];
    let longestSubsequence = [];
    let bestSequenceIndex = 0;
    let bestSequenceSum = -1;
    let currentSequenceSum = -1;
    let bestSubSequenceIndex = arr[1].length;
    for (let i = 1; i < arr.length; i++) {
        let currentSequence = arr[i].split('!').map(Number);
        currentSequenceSum = 0;
        for (let l = 0; l < currentSequence.length; l++) {
            currentSequenceSum += currentSequence[l];
        }
        //bestSubSequenceIndex = currentSequence.length;
        for (let j = 0; j < currentSequence.length; j++) {
            let currentElement = currentSequence[j];
            if (currentElement === 1) {
                currentSubsequence = [currentElement];
                currentSubsequenceIndex = j;
                for (let k = j + 1; k < currentSequence.length; k++) {
                    let nextElement = currentSequence[k];
                    if (currentElement === nextElement) {
                        currentSubsequence.push(nextElement);
                    } else {
                        break;
                    }
                }
                if (currentSubsequence.length > longestSubsequence.length) {
                    longestSubsequence = [];
                    bestSubSequenceIndex = j;
                    bestSequenceIndex = i;
                    bestSequenceSum = currentSequenceSum;
                    for (let j = 0; j < currentSubsequence.length; j++) {
                        longestSubsequence.push(currentSubsequence[j]);
                    }
                } else if (currentSubsequence.length === longestSubsequence.length) {
                    if (currentSubsequenceIndex < bestSubSequenceIndex) {
                        bestSubSequenceIndex = currentSubsequenceIndex;

                        longestSubsequence = [];
                        bestSequenceIndex = i;
                        bestSequenceSum = currentSequenceSum;
                        for (let j = 0; j < currentSubsequence.length; j++) {
                            longestSubsequence.push(currentSubsequence[j]);

                        }
                    } else if (currentSubsequenceIndex === bestSubSequenceIndex) {
                        if (currentSequenceSum > bestSequenceSum) {
                            bestSequenceIndex = i;
                            bestSequenceSum = currentSequenceSum;
                            longestSubsequence = [];
                            for (let j = 0; j < currentSubsequence.length; j++) {
                                longestSubsequence.push(currentSubsequence[j]);

                            }
                        }
                    }
                }
            }

        }

    }
    console.log(`Best DNA sample ${bestSequenceIndex} with sum: ${bestSequenceSum}.`);
    let output = '';
    for (let m = 0; m < arr[bestSequenceIndex].length; m++) {
        if (arr[bestSequenceIndex][m] !== '!') {
            output += arr[bestSequenceIndex][m] + ' ';
        }
    }
    console.log(output);


}
solve([4,
    '1!0!0!1',
    '1!1!0!0',
    '0!1!1!0',
    '1!1!0!1'
]
);