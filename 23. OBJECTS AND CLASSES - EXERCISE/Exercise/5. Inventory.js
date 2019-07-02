function solve(input) {
    let arr = [];
    
    for (let inputRow of input) {
        let tokens = inputRow.split(' / ');
        
        name = tokens[0];
        level = Number(tokens[1]);
        items=tokens[2].split(', ');


        arr.push({ name, level, items });
    }

    console.log(JSON.stringify(arr));

}
solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]
);