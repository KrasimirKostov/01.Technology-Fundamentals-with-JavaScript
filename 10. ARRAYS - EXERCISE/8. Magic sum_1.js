function solve(arr) {
    let sum = Number(arr[1]);
    arr = arr[0].split(' ');
    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        for (let j = i + 1; j < arr.length; j ++) {
            let nextEl = Number(arr[j]);
            if (currentEl + nextEl === sum) {
                console.log(`${currentEl} ${nextEl}`);
            } 
        }
    }



}
solve(['14 20 60 13 7 19 8', '27']);