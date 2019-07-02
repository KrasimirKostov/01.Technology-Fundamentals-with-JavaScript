function solve(input) {
    let firString = input.substring(0, input.length / 2);

    let secondString = input.substring(input.length / 2);

    console.log([...firString].reverse().join(''));
    console.log([...secondString].reverse().join(''));


}
solve('tluciffiDsIsihTgnizamAoSsIsihT');