function solve(text,str) {
  
    text = text.split(' ');
    let count = 0;
    for (let word of text) {
        if (str === word) {
            count++;
        }
    }
    console.log(count);


}
solve("This is a word and it also is a sentence",
    "is"
);