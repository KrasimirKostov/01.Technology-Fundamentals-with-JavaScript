function solve(num) {
    let sum = getSum(num);
    console.log(sum === num
        ?'We have a perfect number!'
        :'It’s not so perfect.');

    function getSum(num) {
        let sum = 0;
        for (let i = 0; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}
solve(28)

/*Moe reshenie 100/100
function findPerfectNumber(num) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (number % i === 0) {
            arr.push(i);
            sum += i;
        }
    }
    if (num === sum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It’s not so perfect.');
    }


}
findPerfectNumber(28);
*/