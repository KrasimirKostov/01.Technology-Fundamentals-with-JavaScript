function solve(base, increment) {
    base = Number(base);
    increment = Number(increment);
    if (base > 0 && increment > 0) {

        let sumStone = 0;
        let sumMarble = 0;
        let sumLapisLazuli = 0;
        let step = 0;

        for (let i = base; i > 2; i = i - 2) {
            step++;
            stone = (i - 2) * (i - 2) * increment;
            sumStone = sumStone + stone;
            if (step % 5 == 0) {
                lapisLazuli = (i * 4 - 4) * increment;
                sumLapisLazuli = sumLapisLazuli + lapisLazuli;
            } else {
                marble = (i * 4 - 4) * increment;
                sumMarble = sumMarble + marble;
            }
        }
        gold = base - (step) * 2;
        sumGold = gold * gold * increment;
        height = (step + 1) * increment;

        console.log(`Stone required: ${Math.ceil(sumStone)}`);
        console.log(`Marble required: ${Math.ceil(sumMarble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(sumLapisLazuli)}`);
        console.log(`Gold required: ${Math.ceil(sumGold)}`);
        console.log(`Final pyramid height: ${Math.floor(height)}`);
    }
}
solve(11, 1);