let a1 = +prompt('coordinates a1');
let a2 = +prompt('coordinates a2');
let b1 = +prompt('coordinatesr b1');
let b2 = +prompt('coordinates b2');
let c1 = +prompt('coordinates c1');
let c2 = +prompt('coordinates c2');

let div=2;

if ((a1 + b1) / div === c1 && (a2 + b2) / div === c2) {
    console.log(true);
} else {
    console.log(false);
}
