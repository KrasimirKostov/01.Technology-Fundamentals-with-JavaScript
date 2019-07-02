function solve(searched, text) {
    let words = text.toLowerCase().split(' ');
    if (words.includes(searched)) {
        console.log(searched);
    } else {
        console.log(`${searched} not found!`);
    }

}
solve('javascript',
    'JavaScript is the best programming language'
);