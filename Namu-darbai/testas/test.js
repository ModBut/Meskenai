//1.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);

let kauliukusuma = kauliukas1 + kauliukas2;

console.log(kauliukas1, kauliukas2, kauliukusuma);

if (kauliukusuma > 8) {
  console.log("Jus laimejote!");
} else console.log("Jus pralosete:(");

//2.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let pilkis = rand(3, 6);
let murklys = rand(3, 6);

console.log(pilkis, murklys);

if (pilkis > murklys) {
  console.log(
    "Lengvesnis katinukas yra - Pilkis, kurio svoris: ",
    pilkis,
    "kg"
  );
} else if (murklys < pilkis) {
  console.log(
    "Lengvesnis katinukas yra - Murklys, kurio svoris: ",
    murklys,
    "kg"
  );
} else {
  console.log("Katinukų svoriai vienodi");
}

//3.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//valciu talpumas
let katinukai = 15;
let karves = 15;

let atsitiktiniaikatinukai = rand(0, 30);
let atsitiktineskarves = rand(0, 30);

console.log(atsitiktiniaikatinukai, atsitiktineskarves);

if (atsitiktiniaikatinukai <= katinukai && atsitiktineskarves <= karves) {
  console.log("Telpa");
} else {
  console.log("Netelpa");
}

//4.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let kauliukas = rand(1, 6);

console.log(kauliukas);

if (kauliukas == 1 || kauliukas == 5) {
  console.log("Antanas isrideno: ", kauliukas, "todel pirks televizoriu!");
} else if (kauliukas == 3 || kauliukas == 4) {
  console.log("Antanas isrideno: ", kauliukas, "todel pirks skalbimo masina!");
} else if (kauliukas == 2 || kauliukas == 6) {
  console.log("Antanas isrideno: ", kauliukas, "todel pirks saldytuva!");
} else console.log("Antanas nieko neperka:(");

//5.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaicius1 = rand(1, 7);
let skaicius2 = rand(1, 7);
let skaicius3 = rand(1, 7);
