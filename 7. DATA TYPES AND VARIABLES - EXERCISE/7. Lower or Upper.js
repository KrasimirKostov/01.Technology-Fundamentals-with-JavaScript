/*
function solve(letter) {
    let symbol = letter.charCodeAt(0);

    if (symbol > 96 && symbol < 123) {
        console.log('lower-case');
    } else if (symbol > 64 && symbol < 91) {
        console.log('upper-case');
    }
}

solve('f');
*/
function solve(symbol) {
    let isUppercase =
        symbol === symbol.toUpperCase();
    console.log(isUppercase 
        ? "upper-case" 
        : "lower-case");

}
solve('l');