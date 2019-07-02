function solve(text, word) {


    while (text.includes(word)) {
        let replacingWord = '*'.repeat(word.length);
        text = text.replace(word, replacingWord);
    }
    console.log(text);
}
solve("A small sentence with some words small small ", "small");