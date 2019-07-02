function solve(country) {
    switch (country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
    }

}
solve('USA');
solve('England');
solve('Spain');
solve('Argentina');
solve('Mexico');