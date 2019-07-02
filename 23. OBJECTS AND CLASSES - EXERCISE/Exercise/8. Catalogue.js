//reshenie s vlojen obekt

function solve(input) {
    let catalogue = {};//let catalogue=new Map(); - pri map

    for (let inputRow of input) {
        let [name, price] = inputRow.split(' : ');
        price = Number(price);
        let initial = name[0];
        if (!catalogue.hasOwnProperty(initial)) {//catalogue.has(initial) - pri map
            catalogue[initial] = {};//catalogue.set(initial,new Map()) - pri map
        }
        let products = catalogue[initial];//vzimame productite - let products = catalogue.get(initial) - pri map
        products[name] = price;//products.set(name,price) - pri map
    }
    let sortedCatalogue = Object.entries(catalogue)//let sortedCatalogue=[...Map.entries()] - pri map
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);

        });
    for (let [initial, products] of sortedCatalogue) {
        let sortedProducts = Object.entries(products)
            .sort((a, b) => {
                return a[0].localeCompare(b[0]);
            });
        console.log(initial);
        for (let [name, price] of sortedProducts) {
            console.log(`${name}: ${price}`);
        }
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);