console.log('Hello from app.js...');

let a = true;
let b = false;

// console.log(a, typeof a);
// console.log(b, typeof b);

let c = a + b;

// console.log(c, typeof c);


// true => 1 (verciasi)
// false => 0 (verciasi)
// 0 => false
// 1, 5, 874, 500, -654.... => true

// OR, AND, NOT

//NOT

let d = !!a; //true

// console.log(d, typeof d);

let e = 0;

let z = !!e;

// console.log(f, typeof f);

//true ! sauktukas, false; !! true
//false ! sauktukas, true; !! false

//OR

// OR => ||

let t = true;
let f = false;

// console.log('t || t', t || t);
// console.log('t || f', t || f);
// console.log('f || t', f || t);
// console.log('f || f', f || f);


//AND => &&

// console.log('t && t', t && t);
// console.log('t && f', t && f);
// console.log('f && t', f && t);
// console.log('f && f', f && f);


let bever = '0'; 

// console.log(!!bever);

let x = 5;
let y = 10;
let v = 0;

console.log(y || v || x); //pirmas pasitaikes true || atveju

console.log(x && v && y); //pirmas pasitaikes false & atveju

console.log(v || !y && x);

