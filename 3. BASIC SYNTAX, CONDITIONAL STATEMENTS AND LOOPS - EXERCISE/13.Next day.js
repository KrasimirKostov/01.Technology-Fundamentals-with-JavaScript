function solve(year, month, day) {
    let d = new Date(year, month - 1, day);
    console.log(d);
    let msec = Date.parse(d);
    console.log(msec);
    let newDate = new Date(msec + 86400000 * 1);
    console.log(newDate);
    let a = newDate.getDate();
    let b = newDate.getMonth()+1;
    let c = newDate.getFullYear();
    console.log(`${c}-${b}-${a}`);
   
}
solve(2016, 9, 30);