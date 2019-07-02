function solve(givenStart, givenEnd) {
    givenStart = Number(givenStart);
    givenEnd = Number(givenEnd);
    let sum = 0;
    let row = "";
    for (let i = givenStart; i <= givenEnd; i++) {
        let a = i.toString();
        row = row + " " + a;
        sum = sum + i;
    }
    console.log(row);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);