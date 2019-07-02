/*Moe reshenie 100/100
function solve(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        
        let [name, is, presence] = arr[i].split(' ');

        switch (presence) {
            case 'going!':
                if (list.includes(name)) {
                    console.log(`${name} is already in the list!`);
                } else {
                    list.push(name);
                }
                break;
            case 'not':
                if (list.includes(name)) {
                    list = list.filter(x => x !== name);
                } else {
                    console.log(`${name} is not in the list!`);
                }
                break;
        }
    }
    list.forEach(x => console.log(x));


}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

);

*/

function solve(input) {
    let list = [];

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ');
        
        if (tokens.length === 3) {
            addToList(tokens[0]);
        } else {
            removeFromList(tokens[0]);
        }
    }
    console.log(list.join('\n'));

    function addToList(guest) {
        if (!list.includes(guest)) {
            list.push(guest);
        } else {
            console.log(`${guest} is already in the list!`)
        }
    }
    function removeFromList(guest) {
        let index = list.indexOf(guest);
        if (index !== -1) {
            list.splice(index, 1);
        }else{
            console.log(`${guest} is not in the list!`);
        }
    }

}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);