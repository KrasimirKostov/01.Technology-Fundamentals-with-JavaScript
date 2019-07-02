function solve(names) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\S\b/g;
    
    let output = [];
    while ((result = regex.exec(names)) !== null) {
        output.push(result[0]);
    }
    console.log(output.join(' '));

}
solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);
