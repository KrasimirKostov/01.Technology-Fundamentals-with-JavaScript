function solve(distance, numberOfPassengers, priceDiesel) {
    let neededFuel = distance / 100 * 7 + numberOfPassengers * 0.1;
    let neededMoney = neededFuel  * priceDiesel;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
solve(260, 9, 2.49);