function solve(input) {
    input = input.split(' ');
    for (let word of input) {
        if (word.startsWith(':') && word.length === 2) {
            console.log(word);
        }
    }

}
solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');