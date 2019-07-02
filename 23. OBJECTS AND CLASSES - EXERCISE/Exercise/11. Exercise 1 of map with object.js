function solve(input) {
    let wordsToSearch = input.shift().split(' ');
    let wordOccurrences = {};
    for (let searched of wordsToSearch) {
        for (let w of input) {
            if (searched === w) {
                if (!wordOccurrences.hasOwnProperty(w)) {// dali ima takyv kluch//deklarirame takova property , ako ne syshtestvuva klucha deklarirame si stoijnost s default stojnost
                    wordOccurrences[w] = 0; // ako go nqmame setvame tozi kluch
                }
                wordOccurrences[w]++;
            }
        }
    }
    Object.entries(wordOccurrences)
        .sort((a, b) => b[0] - a[0])
        .forEach(kvp => console.log(`${kvp[0]}->${kvp[1]}`));


}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurances', 'of', 'the'
    , 'wordsToSearch', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']
);