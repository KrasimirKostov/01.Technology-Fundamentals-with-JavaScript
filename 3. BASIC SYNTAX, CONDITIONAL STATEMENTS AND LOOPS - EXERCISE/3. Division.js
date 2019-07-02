/*
function solve(number) {
    if (number % 10 == 0) {
        console.log(`The number is divisible by 10`);
    } else if (number % 7 == 0) {
        console.log(`The number is divisible by 7`);
    } else if (number % 6 == 0) {
        console.log(`The number is divisible by 6`);
    } else if (number % 3 == 0) {
        console.log(`The number is divisible by 3`);
    } else if (number % 2 == 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }

}
solve(30);
*/


function solve(num) {
    let result;

    if (num % 2 === 0) {
        result = 2;
    }
    if (num % 3 === 0) {
        result = 3;
    }
    if (num % 6 === 0) {
        result = 6;
    }
    if (num % 7 === 0) {
        result = 7;
    }
    if (num % 10 === 0) {
        result = 10;
    }

    if (result) {
        console.log(`The number is divisible by ${result}`);
    } else {
        console.log(`Not divisible`);
    }

}