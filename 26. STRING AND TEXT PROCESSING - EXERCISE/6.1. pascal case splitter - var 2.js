function solve(text) {
    let pascalCaseWords = [];
    let indexes = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() !== text[i]) {
            indexes.push(i);
        }
    }

    for (let i = 0; i < indexes.length; i++) {
        let word = text.substring(indexes[i], indexes[i + 1]);
        pascalCaseWords.push(word);
    }

    console.log(pascalCaseWords.join(', '));

}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');