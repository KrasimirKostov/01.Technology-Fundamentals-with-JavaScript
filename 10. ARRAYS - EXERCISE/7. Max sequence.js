function solve(arr) {
    arr = arr[0].split(' ');
    let longestSeq = [];

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentSeq = [currentEl];

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (nextEl === currentEl) {
                currentSeq.push(nextEl);
            } else {
                break;
            }
        }
        if (currentSeq.length > longestSeq.length) {
            longestSeq = [];
            for (let j = 0; j < currentSeq.length;j++) {
                longestSeq.push(currentSeq[j]);
            }
        }
    }
    console.log(longestSeq.join(' '));
}
solve(['1 1 1 2 3 1 3 3']);