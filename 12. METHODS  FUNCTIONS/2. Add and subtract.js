/* Tova e dylyg zapis
function sumAndSubtract(a, b, c) {
    let result = subtract(sum(a, b), c);
    function sum(a, b) {
        let result = a + b;
        return result;
    }
    function subtract(e, f) {
        let result = e - f;
        return result;
    }
    
    console.log(result);
}
sumAndSubtract(42, 58, 100);
*/

function solve(firstNum, secondNum, thirdNum) {
    let add = (firstNum, secondNum) => firstNum + secondNum;
    let sumResult = add(firstNum, secondNum);
    let subtract = (sumResult, thirdNum) => sumResult - thirdNum;
    return subtract(sumResult, thirdNum);
}
console.log(solve(1, 17, 30));

