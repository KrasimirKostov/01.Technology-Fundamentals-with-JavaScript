function sumEvenOdds(number) {
    function findOddSum() {
        let oddSum = 0;
        let arr = number.toString().split('').map(Number);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                oddSum += arr[i];
            }
        }
        return oddSum;
    }
    function findEvenSum() {
        let evenSum = 0;
        let arr = number.toString().split('').map(Number);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenSum += arr[i];

            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${findOddSum()}, Even sum = ${findEvenSum()}`);
}
sumEvenOdds(1000435);

/*
Moj variant 
function sumEvenOdds(number) {
    function findOddSum() {
        let oddSum = 0;
        let arr = number.toString().split('').map(Number);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                oddSum += arr[i];
            }
        }
        return oddSum;
    }
    function findEvenSum() {
        let evenSum = 0;
        let arr = number.toString().split('').map(Number);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenSum += arr[i];

            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${findOddSum()}, Even sum = ${findEvenSum()}`);
}
sumEvenOdds(1000435);
*/