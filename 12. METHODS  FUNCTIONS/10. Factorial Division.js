// reshenie s rekursiq
function solve(firstNum, secondNum) {
    let firstFactorial = getFactorial(firstNum);
    let secondFactorial = getFactorial(secondNum);
    console.log((firstFactorial/secondFactorial).toFixed(2));
    
    function getFactorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * getFactorial(num - 1);
    }
}
solve(5,2);
/*Moe reshenie 100/100
function divideAndPrint(firstNum, secondNum) {
    let division = 1;
    division = calculateFactoriel(firstNum) / (calculateFactoriel(secondNum));

    function calculateFactoriel(num) {
        let factoriel = 1;
        if (num === 0) {
            factoriel = 1;
        } else {
            for (let i = 1; i <= num; i++) {
                factoriel *= i;
            }
        }
        return factoriel;
    }
    console.log(division.toFixed(2));
}
divideAndPrint(5, 2);
*/