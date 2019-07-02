function solve(input) {
    let regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/g; 	
    let names = input[0].split(', ');
    let ouput = [];

    for (let name of names) {

        let result = name.match(regex); 
        if (result) {
            ouput.push(result);
        }
    }
    console.log(ouput.join(' '));
}

solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);