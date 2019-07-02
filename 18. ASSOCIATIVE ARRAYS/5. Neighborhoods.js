function solve(input) {
    let map = new Map();
    let neighbourhoods = input.shift().split(', ');

    for (let neigbourhood of neighbourhoods) {

        map.set(neigbourhood, []);
    }



    for (let parts of input) {
        let tokens = parts.split(' - ');
        let neigbourhood = tokens[0];
        let inhabitant = tokens[1];

        if (map.has(neigbourhood)) {


            let arr = map.get(neigbourhood);
            arr.push(inhabitant);

        }

    }
    let sorted = [...map.entries()]
        .sort((a, b) => b[1].length - a[1].length);


    for (let [neigbourhood, arr] of sorted) {

        console.log(`${neigbourhood}: ${arr.length}`);
        for (let inhabitant of arr) {
            console.log(`--${inhabitant}`);
        }


    }

}
solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]
);