function solve(arr) {
    let phones = [];

    for (let string of arr) {
        let parts = string.split(' ');
        let name = parts[0];
        let phoneNumber = parts[1];

        phones[name] = phoneNumber;
    }

    for (let name in phones) {
        let phone = phones[name];
        console.log(`${name} -> ${phone}`);
    }

}
solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]
);