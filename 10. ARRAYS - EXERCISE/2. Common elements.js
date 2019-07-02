function solve(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                console.log(firstArr[i]);
            }
        }
    }

}
solve(["Hey", "hello", 2, 4, "Pesho", "e"],
    ["Pecho", 10, "hey", 4, "hello", "2"]);