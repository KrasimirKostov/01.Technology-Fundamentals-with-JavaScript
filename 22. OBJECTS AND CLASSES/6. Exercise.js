function solve(input) {
    let wareHouse = {};
    let nameOfBrand = {};
    let coffeeName = {};
    /*
    let wareHouse = {
        nameOfBrand: {
            coffeeName: {
                expireDate: '',
                quantity: 0
            }
        }
    }
*/

    for (let inputRow of input) {
        let [command, nameOfBrand, coffeeName, expireDate, quantity] = inputRow.split(', ');
        if (command === 'IN') {
            if (!wareHouse.hasOwnProperty(nameOfBrand)) {
                wareHouse[nameOfBrand] = {};
                wareHouse[nameOfBrand] = coffeeName;
                coffeeName[expireDate] = expireDate;
                coffeeName[quantity] = quantity;
            } else {
                if (!nameOfBrand.hasOwnProperty(coffeeName)) {
                    nameOfBrand[coffeeName] = {};
                    coffeeName[expireDate] = expireDate;
                    coffeeName[quantity] = quantity;
                } else {
                    if (coffeeName[expireDate] < expireDate) {
                        coffeeName[quantity] = quantity;
                    } else if (coffeeName[expireDate] < expireDate) {
                        coffeeName[quantity] += quantity;
                    }
                }
            }
        }
    }

    console.log(wareHouse);





}
solve(
    [
        'IN, Batdorf & Bronson, Espresso, 2025-05-25, 20',
        'IN, Folgers, Black Silk, 2023-03-01, 14',
        'IN, Lavazza, Crema e Gusto, 2023-05-01, 5',
        'IN, Lavazza, Crema e Gusto, 2023-05-02, 5',
        'IN, Folgers, Black Silk, 2022-01-01, 10',
        'IN, Lavazza, Intenso, 2022-07-19, 20',
        'OUT, Dallmayr, Espresso, 2022-07-19, 5',
        'OUT, Dallmayr, Crema, 2022-07-19, 5',
        'OUT, Lavazza, Crema e Gusto, 2020-01-28, 2',
        'REPORT',
        'INSPECTION'
    ]
);
'>>>>> REPORT! <<<<<'
'Brand: {nameOfBrand}:'
'-> {coffeeName} -> {expireDate} -> {quantity}.'

'>>>>> INSPECTION! <<<<<'
'Brand: {nameOfBrand}:'
'-> {coffeeName} -> {expireDate} -> {quantity}.'

