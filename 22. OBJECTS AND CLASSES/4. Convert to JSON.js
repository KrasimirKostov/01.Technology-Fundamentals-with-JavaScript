function solve(name, lastName, hairColor) {

    console.log(JSON.stringify({
        name,
        lastName,
        hairColor
    }))


}
solve('George',
    'Jones',
    'Brown'
);

/*
function solve(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    let objAsJson=JSON.stringify(obj);
  console.log(objAsJson);


}
solve('George',
    'Jones',
    'Brown'
);

*/