function solve(input) {
    let arr = [];
    for (let word of input) {
        let newWord = word.split(' ').join('');//let newWord=word.replace(/\s+/g,'') - syshtoto s regulqren izraz
        let reversedWord = newWord.split('').reverse().join('');
        if (newWord === reversedWord) {
            arr.push(newWord);
        }

    }
    if (arr.length === 0) {

        console.log('No palindromes found');
    } else {
        console.log(arr.join(', '));
    }
}

solve(
    ['stella won no wallets',
        'not a palindrome']
);