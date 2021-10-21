let a = 1;
let b = 3;
let c = 10;

let D = (b * b) - (4 * a * c);
const denom = 2 * a;
const X1 = (-b + Math.sqrt(D))/denom;
const X2 = (-b - Math.sqrt(D))/denom;

//console.log(D);

if (D >= 0) {
    if (D > 0) {
        console.log("X1 = " + X1 + "\nX2 = " + X2);
    } else
    console.log("X1 = " + X1);
} else {
    console.log("Unsolvable");
}