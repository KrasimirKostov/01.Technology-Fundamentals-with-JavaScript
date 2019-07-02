function solve(size) {
    size = Number(size);
    let numberOfCuts = 0;
    do {
        size = size / 2;
        numberOfCuts++;
    } while (size >= 1);

    /* while (size >= 1) {
         size = size / 2;
         numberOfCuts++;
     }
     */
    console.log(`Length is ${size.toFixed(2)} cm. after ${numberOfCuts} cuts.`);
}
solve(0.5);