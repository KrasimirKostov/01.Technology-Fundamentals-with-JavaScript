function solve(text) {
    words = text.split(' ');
    for (let word of words) {
        if (word.length > 1 && word.startsWith('#')) {
            word = word.substring(1);
            let allLettersAreSymbols = true;
            for (let symbol of word) {
                if (!isLetter(symbol)) {
                    allLettersAreSymbols = false;
                    break;
                }
            }
            if (allLettersAreSymbols) {
                console.log(word);
            }
        }
    }

    function isLetter(symbol) {
        let asciiCode = symbol
            .toLowerCase()
            .charCodeAt(0);
        return asciiCode >= 97 && asciiCode <= 122;
    }

}
solve(
    'Nowadays #asfasl12 everyone uses # to tag a #special word in #socialMedia'
);

