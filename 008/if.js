console.log('Welcome to If Else world!');

// == tik reiksme lygu
// === reiske ir tipas identiska
// != nelygu
// !== neidentiska

console.log('Start');

console.log('1 km');

console.log('2 km');

if (5 > 31) { 
    console.log('Bar');
} else if (8 > 55) {
    console.log('Shop');
} else {
    console.log('Go Home');
}


//jei if false, tada else (ten jokios salygos nera)

// if gali buti komplektuojamas su else, arba ne (gali buti vienas)

//else if gali buti daug

console.log('3 km');

console.log('4 km');

console.log('End');


// if ((555 == '555') && (5 > 77)) { //pirmiau skliausteliai, poto and
//     console.log('Bar');
//     console.log('Shop');
// }

// if ('abc' > 'bbc') { //pagal ASCII lentele, paima pirma skirtinga raide
//     console.log('Bar');
//     console.log('Shop');
// }


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let digit1 = rand(0, 4);
let digit2 = rand(0, 4);
