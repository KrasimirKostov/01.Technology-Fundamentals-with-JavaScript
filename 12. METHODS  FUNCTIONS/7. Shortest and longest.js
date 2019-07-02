

function solve(text) {
    let words = text.split(/[.?\s!,]+/g);
    if (words[words.length - 1] === '') {
        words.pop();
    }
    console.log(`Longest -> ${findLongestWord(words)}`);
    console.log(`Shortest -> ${findShortestWord(words)}`);

    function findShortestWord(words) {
        let shortestWordLength = Number.MAX_SAFE_INTEGER;
        let shortestIndex = 0;


        for (let i = 0; i < words.length; i++) {
         

            if (shortestWordLength > words[i].length) {
                shortestWordLength = words[i].length;
                shortestIndex = i;
            }
        }
        return words[shortestIndex];
    }

    function findLongestWord(words) {

        let longestWordLength = Number.MIN_SAFE_INTEGER;
        let longestIndex = 0;

        for (let i = 0; i < words.length; i++) {
            if (longestWordLength < words[i].length) {
                longestWordLength = words[i].length;
                longestIndex = i;
            }
        }
        return words[longestIndex];
    }


}
solve('Hello people, are you familiar with the terms of application at the software university?');




/* Мое решение - дава 80/100
function findShortestAndLongestWord(arr) {
    arr = arr.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];

        if (word.includes('.')) {
            word = word.split('.');
            word = word.join('');
        } else if (word.includes('?')) {
            word = word.split('?');
            word = word.join('');
        } else if (word.includes('!')) {
            word = word.split('!');
            word = word.join('');
        } else if (word.includes(',')) {
            word = word.split(',');
            word = word.join('');
        } else if (word.includes(' ')) {
            word = word.split(' ');
            word = word.join('');
        }
        newArr.push(word);
    }
    console.log(`Longest -> ${findLongestWord(newArr)}`);
    console.log(`Shortest -> ${findShortestWord(newArr)}`);


    function findShortestWord(newArr) {
        let shortest = Number.MAX_SAFE_INTEGER;
        let shortestIndex = 0;
        //newArr = newArr.split(' ');

        for (let i = 0; i < newArr.length; i++) {
            let word = newArr[i];

            if (shortest > word.length) {
                shortest = word.length;
                shortestIndex = i;
            }
        }
        return newArr[shortestIndex];
    }

    function findLongestWord(newArr) {

        let longest = Number.MIN_SAFE_INTEGER;
        let longestIndex = 0;
        // newArr = newArr.split(' ');
        for (let i = 0; i < newArr.length; i++) {
            let word = newArr[i];

            if (longest < word.length) {
                longest = word.length;
                longestIndex = i;
            }
        }
        return newArr[longestIndex];
    }


}
findShortestAndLongestWord('cccccccccccccc aaaaaa');
*/

