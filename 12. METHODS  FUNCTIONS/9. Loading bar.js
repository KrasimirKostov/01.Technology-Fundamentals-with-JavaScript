/*Moe reshenie 100/100
function visualize(num) {
    let arr = '..........'.split('');
    let length = num / 10;
    for (let i = 0; i < length; i++) {
        arr[i] = '%';
    }
    arr = arr.join('');
    if (num < 100) {
        console.log(`${num}% [${arr}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(arr);
    }

}
visualize(50);
*/
function visualize(num) {
    let length = num / 10;
    if (num < 100) {
        console.log(`${num}% [${'%'.repeat(length)}${'.'.repeat(10 - length)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(arr);
    }

}
visualize(30);