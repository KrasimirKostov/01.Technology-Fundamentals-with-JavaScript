function solve(password) {
    let validLength = true;
    let validContent = true;
    let containTwoDigits = true;

    if (!isLengthValid(password)) {
        console.log('Password must be between 6 and 10 characters');
        validLength = false;
    }
    if (!isValidContent(password)) {
        console.log('Password must consist only of letters and digits');
        validContent = false;
    }
    if (!hasTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        containTwoDigits = false;
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
            if (Number.isInteger(+password[i])) {
                counter++;
            }
        }

        return counter >= 2;
    }

}
solve('logIn');





/* Moe reshenie - dava 85/100
function checkValidity(arr) {
    let isValid = false;
    if (hasCharacters(arr) === false) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    } else {
        isValid = true;
    }
    if (hasLettersAndDigits(arr) === false) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    } else {
        isValid = true;
    }
    if (hasTwoDigits(arr) === false) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    } else {
        isValid = true;
    }
    if (isValid) {
        console.log('Password is valid');
    }



    function hasCharacters(arr) {
        if (arr.length >= 6 && arr.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function hasLettersAndDigits(arr) {
        arr = arr.split('');
        let has = false;
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i].charCodeAt(0);
            if (element >= 48 && element <= 57 || element >= 65 && element <= 90 ||
                element >= 97 && element <= 122) {
                    has= true;
            } else {
                return false;;
            }
        }
        if (has) {
            return true;
        }
    }

    function hasTwoDigits(arr) {
        let sumDigits = 0;
        arr = arr.split('');
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i].charCodeAt(0);
            if (element >= 48 && element <= 57) {
                sumDigits++;
            }
        }
        if (sumDigits >= 2) {

            return true;
        } else {
            return false;
        }
    }
}
checkValidity('Pa$s$s');
*/


