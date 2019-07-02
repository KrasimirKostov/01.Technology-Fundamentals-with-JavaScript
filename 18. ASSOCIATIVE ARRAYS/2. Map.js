function solve() {
    let phones = new Map();

    phones.set('Ivan', '088888 8 88 8 8');
    phones.set('Pesho', '086864 6464646');
phones.get('Pesho');
    phones.delete('Pesho');
    if (phones.has('Pesho')) {
        console.log('Pesho is here!');
    }
}
solve();