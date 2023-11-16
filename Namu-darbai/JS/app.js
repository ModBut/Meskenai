//1.

console.log('Pirma uzduotis')

let digit1 = rand(0, 4);
let digit2 = rand(0, 4);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(digit1 / digit2);

//2.

console.log('Antra uzduotis')

let digit3 = rand(0, 25);
let digit4 = rand(0, 25);
let digit5 = rand(0, 25);

console.log(digit3, digit4, digit5);

if ((digit3 < digit4 && digit4 < digit5) || (digit5 < digit4 && digit4 < digit3)) {
    console.log(digit4);
}

else if ((digit4 < digit3 && digit3 < digit5) || (digit5 < digit3 && digit3 < digit4)) {
    console.log(digit3);
}

else console.log(digit5);

//3.

console.log('Trecia uzduotis')

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);




//4.

console.log('Ketvirtas uzdavinys')

let d = rand(0, 2);
let e = rand(0, 2);
let f = rand(0, 2);
let g = rand(0, 2);

console.log(d, e, f, g);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 2 );
}

//5.

console.log('Penktas uzdavinys');

let x = rand(-10, 10);
let z = rand(-10, 10);
let y = rand(-10, 10);

console.log(x, z, y);

if (x < 0) {
    console.log('+', a , '+');
}
if (z < 0) {
    console.log('+', a , '+');
}
if (y < 0) {
    console.log('+', a , '+');
}
if (x > 0) {
    console.log('-', a , '-');
}
if (z > 0) {
    console.log('-', a , '-');
}
if (y > 0) {
    console.log('-', a , '-');
}
if (x === 0) {
    console.log('*', a , '*');
}
if (z === 0) {
    console.log('*', a , '*');
}
if (y === 0) {
    console.log('*', a , '*');
}

//6.


let zvakiuskaicius = 2000;
let zvakiukaina = zvakiuskaicius

console.log(zvakiuskaicius);

if (zvakiuskaicius >= 1000) {
    console.log('Zvakes su 3proc. nuolaida kainuos', '0.97')
} else {
    if (zvakiuskaicius >= 2000 && zvakiuskaicius < 1000 ) {
        console.log('Zvakes su 4% nuolaida kainuos', '0.96')}
         else {console.log(zvakiuskaicius)
    }}

 
//7. 

let l = (0, 100);
let k = (0, 100);
let m = (0, 100);

if ((l < k && k < m) || (m < k && k < l)) {
    console.log(k);
}
else if ((k < l && l < m) || (m < l && l < k)) {
    console.log(l);
}
else console.log(m);

if (k < 10 || k > 90) {
    console.log(k);
}
if (l < 10 || l > 90) {
    console.log(l);
}
if (m < 10 || m > 90) {
    console.log(m);
}


