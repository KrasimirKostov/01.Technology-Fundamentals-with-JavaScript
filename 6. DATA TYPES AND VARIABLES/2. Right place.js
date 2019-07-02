function solve(firstString, letter, secondString) {
    let changedString = firstString.replace('_', letter);
    let output = changedString === secondString ? 'Matched' : 'Not Matched';
    console.log(output);

}
solve('Str_ng', 'i', 'String');