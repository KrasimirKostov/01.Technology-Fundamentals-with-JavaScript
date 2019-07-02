function solve(x1, y1, x2, y2) {
    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    let l = (x*x + y *y);
    let length = Math.sqrt(l);
    console.log(length);

}
solve(2.34, 15.66, -13.55, -2.9985);