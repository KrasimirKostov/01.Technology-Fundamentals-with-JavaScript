function solve(input) {

    let regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/g; 	
    let names = input[0].split(', ');
    let output = [];

    for (let name of names) {

        let result = regex.test(name); 
       
        if (result) {
            output.push(name);
        }
    }
    console.log(output.join(' '));
}

solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);