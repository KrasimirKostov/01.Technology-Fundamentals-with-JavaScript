function solve(input) {
    let [firstString, secondString, thirdString] = input;
    let combinedString = firstString.concat(secondString);
    let count = 0;
    let regex = new RegExp('[aeiou]', 'g');
    let result = combinedString.match(regex);//izkarvam vsi4ki glasni bukvi ot kombiniraniq string v masiv chrez regeulqren izraz
    //count = result.length;
    

    for (let i = 0; i < result.length; i++) {
        if (i >= thirdString.length) {
            combinedString = combinedString.replace(result[i], thirdString[i - thirdString.length].toUpperCase());
        } else {
            combinedString = combinedString.replace(result[i], thirdString[i].toUpperCase());
        }
    }
    combinedString = combinedString.split('').reverse().join('');
    console.log(`Your generated password is ${combinedString}`);



}
solve([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);

