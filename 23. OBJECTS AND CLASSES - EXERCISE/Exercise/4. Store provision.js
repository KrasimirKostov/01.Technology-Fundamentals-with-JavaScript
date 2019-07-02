
function solve(arr) {
    let currentStock = arr[0];
    let orderedStock = arr[1];
   
    let obj = {};


    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        obj[product] = quantity;

    }
    for (let j = 0; j < orderedStock.length; j += 2) {
        let orderedProduct = orderedStock[j];
        let orderedQuantity = Number(orderedStock[j + 1]);
        if (obj.hasOwnProperty(orderedProduct)) {
            orderedQuantity += obj[orderedProduct];
        }
        obj[orderedProduct] = orderedQuantity;
    }
    console.log(obj);

}
solve([['Chips', '5', 'CocaCola', '9',
    'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30']]);