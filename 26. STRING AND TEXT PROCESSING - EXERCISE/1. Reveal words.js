function solve(words, text) {
    words = words.split(', ');


    for (let word of words) {
        let censoredWord = '*'.repeat(word.length);
        if (censoredWord.length === word.length) {
            text = text.replace(censoredWord, word);
        }
    }
    console.log(text);
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'

);