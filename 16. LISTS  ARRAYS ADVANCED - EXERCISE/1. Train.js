/*Moe reshenie 100/100
function solve(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxWagonCapacity = Number(arr.shift());


    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum] = arr[i].split(' ');
        firstNum = Number(firstNum);

        function add(num) {
            wagons.push(num);
            return wagons;
        }
        function fitPassengers(num) {
            for (let i = 0; i < wagons.length; i++) {
                if ((wagons[i] + num) <= maxWagonCapacity) {
                    wagons[i] = wagons[i] + num;
                    break;
                }
            }
            return wagons;
        }

        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            default:
                command = Number(command);
                fitPassengers(command);
                break;
        }
    }
    console.log(wagons.join(' '));
}
*/
function solve(input) {
    let train = input
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(input.shift());

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ');

        if (tokens.length > 1) {
            train.push(Number(tokens[1]));
        } else {
            let passengers = Number(tokens[0]);
            for (let i = 0; i < train.length; i++) {
                let wagon = train[i];
                if (wagon + passengers <= maxCapacity) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));


}

solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);