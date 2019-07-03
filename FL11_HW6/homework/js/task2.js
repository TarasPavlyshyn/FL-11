let a = prompt('length of first side');
let b = prompt('length of second side');
let c = prompt('length of third side');



if ( a === 0 || b === 0 || c === 0) {
    console.log('Triangle doesn’t exist');
} else if ( a === b && a === c ){
    console.log('Eequivalent triangle');
} else if ( a === b || b === c || c === a ){
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle'); 
}
