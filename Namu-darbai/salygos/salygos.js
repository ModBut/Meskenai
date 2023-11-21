//1.

console.log("Pirma uzduotis");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let digit1 = rand(0, 4);
let digit2 = rand(0, 4);

if (digit1 > digit2); {
  console.log(digit1 / digit2);
} else if (digit2 > digit1);
  console.log(digit2 / digit1);


//2.

console.log("Antra uzduotis");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let digit3 = rand(0, 25);
let digit4 = rand(0, 25);
let digit5 = rand(0, 25);

console.log(digit3, digit4, digit5);

let vidutinereiksme = ((digit3 + digit4 + digit5) / 3);

console.log('Vidurine reiksme:', vidutinereiksme);

//3.

console.log("Trecia uzduotis");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

if (a + b > c && a + c > b && b + c > a) {
  console.log("Galima sudaryti trikampį su kraštinėmis:", a, b, c);
} else {
  console.log("Negalima sudaryti trikampio su kraštinėmis:", a, b, c);
}

//4.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Ketvirtas uzdavinys");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * 2);
}

let d = rand(0, 2);
let e = rand(0, 2);
let f = rand(0, 2);
let g = rand(0, 2);

let nuliai = min(d, e, f, g);
let vienetai = mid((d + e + f + g) / 3);
let dvejetai = max(d, e, f, g);

console.log(nuliai, vienetai, dvejetai);

//5.

console.log("Penktas uzdavinys");

let x = rand(-10, 10);
let z = rand(-10, 10);
let y = rand(-10, 10);

console.log(x, z, y);

if (x < 0) {
  console.log("+", a, "+");
}
if (z < 0) {
  console.log("+", a, "+");
}
if (y < 0) {
  console.log("+", a, "+");
}
if (x > 0) {
  console.log("-", a, "-");
}
if (z > 0) {
  console.log("-", a, "-");
}
if (y > 0) {
  console.log("-", a, "-");
}
if (x === 0) {
  console.log("*", a, "*");
}
if (z === 0) {
  console.log("*", a, "*");
}
if (y === 0) {
  console.log("*", a, "*");
}

//6.

console.log('Sestas uzdavinys';)

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (3000 - 5 + 1)) + 5;
}

let zvakeskaina = 1;
let zvakiukiekis = zvakiukaina;


if (zvakiukiekis > 1000); {
  console.log('Taikoma 3proc. nuolada. Zvakes kaina: 0.97eur/vnt.' );
}

if (zvakiukiekis > 200) {
  console.log('Taikoma 4proc. nuolaida. Zvakes kaina: 0.96eur/vnt.')
}



//7.

console.log('Septintas uzdavinys');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let l = (0, 100);
let k = (0, 100);
let m = (0, 100);

if ((l < k && k < m) || (m < k && k < l)) {
  console.log(k);
} else if ((k < l && l < m) || (m < l && l < k)) {
  console.log(l);
} else console.log(m);

if (k < 10 || k > 90) {
  console.log(k);
}
if (l < 10 || l > 90) {
  console.log(l);
}
if (m < 10 || m > 90) {
  console.log(m);
}
