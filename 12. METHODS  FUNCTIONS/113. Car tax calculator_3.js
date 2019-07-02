

function solve(type, power, age) {
    function calcPowerPrice(power) {
        let taxPerKw = 0;
        let tax = 0;

        if (power <= 37) {
            taxPerKw = 0.43;
        } else if (power > 37 && power <= 55) {
            taxPerKw = 0.50;
        } else if (power > 55 && power <= 74) {
            taxPerKw = 0.68;
        } else if (power > 74 && power <= 110) {
            taxPerKw = 1.38;
        } else if (power > 110) {
            taxPerKw = 1.54;
        }

        tax = taxPerKw * power;
        return tax;
    }

    function coefficientFunc(age) {
        let coefficient = 0;
        if (age < 5) {
            coefficient = 2.80;
        } else if (age >= 5 && age <= 14) {
            coefficient = 1.50;
        } else if (age > 14) {
            coefficient = 1.00;
        }
        return coefficient;
    }

    function totalCalcCar(power, age) {
        let totalPrice = power * age;
        totalPrice = totalPrice.toFixed(2) + ' lv.';
        return totalPrice;
    }
    function totalCalcCycle(volume) {
        let taxPrice = 0.00;
        if (volume > 750) {
            taxPrice = 125;
        } else if (volume > 490) {
            taxPrice = 94;
        } else if (volume > 350) {
            taxPrice = 63;
        } else if (volume > 250) {
            taxPrice = 44;
        } else if (volume > 125) {
            taxPrice = 31;
        } else {
            taxPrice = 15;
        }
        taxPrice = taxPrice.toFixed(2);
        console.log(taxPrice + ' lv.');
    }

    switch (type) {
        case 'motorcycle':
            totalCalcCycle(power);
            break;
        case 'car':
            let result = totalCalcCar(calcPowerPrice(power), coefficientFunc(age));
            console.log(result);
            break;
    }

}
solve('car',
90,
7
);