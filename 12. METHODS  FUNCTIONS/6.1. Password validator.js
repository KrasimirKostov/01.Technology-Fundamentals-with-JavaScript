function solve(password) {
    let validLength = true;
    let validContent = true;
    let containTwoDigits = true;

    if (!isLengthValid(password)) {
        validLength = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isValidContent(password)) {
        validContent = false;
        console.log('Password must consist only of letters and digits');
    }
    if (!hasTwoDigits(password)) {
        containTwoDigits = false;
        console.log('Password must have at least 2 digits');
    }
    if (validLength && validContent && containTwoDigits) {
        console.log('Password is valid');
    }

    function isLengthValid(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function isValidContent(password) {
        let isValid = true;
        for (let i = 0; i < password.length; i++) {
            let symbol = password[i];
            if (isNaN(+symbol) && symbol.toLowerCase() === symbol.toUpperCase()) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    function hasTwoDigits(password) {
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            let symbol = +password[i];
            if (Number.isInteger(symbol)) {
                counter++;
            }
        }
        return counter >= 2;
    }

}
solve('logIn');