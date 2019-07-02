function solve(input) {

    let words = new Map();

    for (let string of input) {
        let counter = 1;

        if (words.has(string)) {
            counter += words.get(string);
        }
        words.set(string, counter);
    }


    let sorted = [...words.entries()]
        .sort((a, b) => b[1] - a[1]);

    for (let [string, counter] of sorted) {
        console.log(`${string} -> ${counter} times`);
    }
}
solve([
    "Here", "is", "the", "first",
    "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the",
    "third", "sentence"
]);