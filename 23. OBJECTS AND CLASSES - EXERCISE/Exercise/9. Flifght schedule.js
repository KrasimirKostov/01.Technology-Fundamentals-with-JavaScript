function solve(input) {
    let initialFlights = input[0];
    let changedStatus = input[1];
    let flightStatus = input[2][0];
    let flights = {};//{    sector: {Destination:destination, Status:status}}

    //Fill the object with initial flights
    for (let inputRow of initialFlights) {
        let [sector, destination] = inputRow.split(' ');
        flights[sector] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    }
    //Change statuses for given sectors to 'Canceled'
    for (let inputRow of changedStatus) {
        let [sector, newStatus] = inputRow.split(' ');
        if (flights.hasOwnProperty(sector)) {
            flights[sector].Status = newStatus;
        }
    }

    Object.values(flights)
        .filter((f) => f.Status === flightStatus)
        .forEach((el) => console.log(el));



    /*for (let keys in flights) {
        let anotherObj = flights[keys];
        let destination = anotherObj.Destination;
        let status = anotherObj.Status;


        console.log(`${keys}: ${destination}: ${status}`);
    }
    */
}


solve(
    [
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
            'SK330 Cancelled'
        ],
        ['Ready to fly']
    ]

);
