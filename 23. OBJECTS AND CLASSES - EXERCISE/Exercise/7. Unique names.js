function solve(input) {
    let set = new Set();
    for (let el of input) {
        set.add(el);
    }
    let sortedSet = [...set.keys()]
        .sort(compare);

    function compare(a, b) {
        let firstCriteria = a.length - b.length;
        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }
        return firstCriteria;
    }
    for(el of sortedSet){
        console.log(el);
    }


}
solve([
    "Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"
]
);