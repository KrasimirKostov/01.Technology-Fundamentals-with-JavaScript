function solve(args) {
    let bitcoin = 11949.16;
    let gOfGold = 67.51;
    let n = args.length;
    let sumOfMoney = 0;
    let bought = 0;
    let day = 0;
    let firstDay = 1;
    let leftMoney = 0;
    for (let i = 0; i < n; i++) {
        day++;
        if (day % 3 == 0) {
            args[i] = 0.7 * args[i];
        }
        sumOfMoney = sumOfMoney + args[i] * gOfGold;

        while (sumOfMoney < bitcoin) {
            firstDay = day + 1;
            break;
        }
    }

    bought = Math.floor(sumOfMoney / bitcoin);
    leftMoney = sumOfMoney - bought * bitcoin;
    console.log(`Bought bitcoins: ${bought}`);
    if (bought != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
}
solve([50, 100]);