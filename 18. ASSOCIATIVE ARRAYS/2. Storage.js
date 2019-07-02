function solve(input) {
    let products = new Map();

    for (let string of input) {
        let parts = string.split(' ');
        let product = parts[0];
        let quantity = Number(parts[1]);

        if (products.has(product)) {
            quantity += products.get(product)
        }
        products.set(product, quantity);

        /*
        if(products.has(product)){
            let existingQuantity=products.get(product);
            existingQuantity+=quantity;
            products.set(products,existingQuantity);
        }else{
            products.set(products,existingQuantity);
        }
        */
    }

    for (let [product, quantity] of products.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);