function solve(input) {

    let arr = [];
    let firstArr = input.shift().split(' ');
    let first = firstArr[1];
    let second = firstArr[3];
    let third = firstArr[5];


    for (let inputRow of input) {
        let tokens = inputRow.split(' ');
        let town = tokens[1];
        let latitude = Number(Number(tokens[3]).toFixed(2));
        let longitude = Number(Number(tokens[5]).toFixed(2));
        arr.push(JSON.stringify({ 
            [first]: town, [second]: latitude, [third]: longitude 
        }));
    }
    console.log(`[${arr.join(',')}]`);
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);