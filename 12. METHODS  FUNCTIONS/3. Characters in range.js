function charactersInRange(firstChar, secondChar) {
    let arr = [];
    let numberOne = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let numberTwo = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    for (let i = numberOne + 1; i < numberTwo; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr.join(' ');


}
console.log(charactersInRange('C', '#'));