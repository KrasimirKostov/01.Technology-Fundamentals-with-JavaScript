function solve(args) {
    
    let a = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < args.length; i++) {
        if (args[i] >= 0 && args[i] < 10) {
            s = +args[i];
            let multiplication = 1;
            for (let j = i + 1; j <= i + s; j++) {
                multiplication *= +args[j];
            }
            if (multiplication > a) {
                a = multiplication;
            }

        }
    }
    console.log(a);
}
solve(['100', '200', '2', '3', '2', '3', '2', '1', '1']);