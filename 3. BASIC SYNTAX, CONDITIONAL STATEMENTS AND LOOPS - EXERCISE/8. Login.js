function solve(args) {
    let userName = args[0];
    let n = args.length;
    let countBlock = 0;
    for (let i = 1; i < n; i++) {
        let zaza = args[i];
        let txt = zaza.split("");
        let ber = txt.reverse();
        let password = ber.join("");
        countBlock++;
        if (userName == password) {
            console.log(`User ${userName} logged in.`);
        } else {
            if (countBlock == 4) {
                console.log(`User ${userName} blocked!`);
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }

    }

}
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);