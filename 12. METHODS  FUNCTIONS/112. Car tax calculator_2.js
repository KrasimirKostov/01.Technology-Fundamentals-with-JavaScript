

function solve(power, age) {
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
    let powerPrice = calcPowerPrice(power);
    let coefficient = coefficientFunc(age);
    let tax = powerPrice * coefficient;

    console.log(`${tax.toFixed(2)} lv.`);
}
solve(45, 10);