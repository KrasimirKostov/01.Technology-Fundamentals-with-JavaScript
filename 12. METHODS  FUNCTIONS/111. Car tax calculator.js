function solve(kW){
    let power=Number(kW);
    calculate(power);
}
solve(57.5);

function calculate(power) {
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
    console.log(`${tax.toFixed(2)} lv.`);
}
