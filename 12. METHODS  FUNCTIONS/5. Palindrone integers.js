function solve(numArr) {
    for (let num of numArr) {
        console.log(isPalindrome(num));
    }
    function isPalindrome(num) {
        let isPalindrome = true;
        num = num.toString();
        for (let j = 0; j < num.length / 2; j++) {
            if (num[j] !== num[num.length - j - 1]) {
                isPalindrome = false;
                break;
            } else {
                isPalindrome = true;
                
            }

        }
        return isPalindrome;
    }
}
solve([32, 323, 421, 121]);

/*
function checkPalindrome(arr) {
    let isPalindrome = false;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i].toString().split('').map(Number);
        for (let j = 0; j < (number.length / 2-1); j++) {
            if (number[j] === number[number.length - j - 1]) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
            }

        }
        console.log(isPalindrome);
    }

}
*/