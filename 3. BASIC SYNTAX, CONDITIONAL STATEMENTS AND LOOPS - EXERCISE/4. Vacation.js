function solve(numberPeople, typeOfGroup, weekday) {
    numberPeople = Number(numberPeople);
    let totalPrice = 0;
    let singlePrice = 0;
    if (typeOfGroup === 'Students') {
        switch (weekday) {
            case 'Friday':
                singlePrice = 8.45;
                break;
            case 'Saturday':
                singlePrice = 9.80;
                break;
            case 'Sunday':
                singlePrice = 10.46;
                break;
        }
        if (numberPeople >= 30) {
            singlePrice = singlePrice * 0.85;
        }
    } else if (typeOfGroup === 'Business') {
        switch (weekday) {
            case 'Friday':
                singlePrice = 10.90;
                break;
            case 'Saturday':
                singlePrice = 15.60;
                break;
            case 'Sunday':
                singlePrice = 16;
                break;
        }
        if (numberPeople >= 100) {
            numberPeople = numberPeople - 10;
        }
    } else if (typeOfGroup === 'Regular') {
        switch (weekday) {
            case 'Friday':
                singlePrice = 15;
                break;
            case 'Saturday':
                singlePrice = 20;
                break;
            case 'Sunday':
                singlePrice = 22.50;
                break;
        }
        if (numberPeople >= 10 && numberPeople <= 20) {
            singlePrice = 0.95 * singlePrice;
        }
    }

    totalPrice = numberPeople * singlePrice;
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
solve(30, "Students", "Sunday");