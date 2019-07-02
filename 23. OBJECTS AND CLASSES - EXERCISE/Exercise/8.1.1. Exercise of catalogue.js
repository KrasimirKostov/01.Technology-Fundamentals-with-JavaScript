function solve(input) {
    let [firstFlights, changedFlights, flightStatus] = input;
    flightStatus = flightStatus[0];
    let flights = {};

    for (let inputRow of firstFlights) {
        let [sector, destination] = inputRow.split(' ');
        flights[sector] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }
    for (let inputRow of changedFlights) {
        let [sector, changedStatus] = inputRow.split(' ');
        if (flights.hasOwnProperty(sector)) {
            flights[sector].Status = changedStatus;

        }
    }

    Object.values(flights)
        .filter((el) => el.Status === flightStatus)
        .forEach((el) => console.log(el));

        }
solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
]
);