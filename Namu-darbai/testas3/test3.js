//1.

console.log("Pirma uzduotis");

const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];

bitGirls.unshift("Nausėda");

console.log(bitGirls);

//2.

console.log("Antra uzduotis");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];

const bitCats = [];

cats.forEach((cat) => {
  const randomWeight = Math.random() < 0.5 ? "storas" : "normalus";
  bitCats.push([cat, randomWeight]);
});

console.log(bitCats);

//3.

let storiKatinukai = 0;
let normalusKatinukai = 0;

bitCats.forEach((cat) => {
  if (cat[1] === "storas") {
    storiKatinukai++;
  } else if (cat[1] === "normalus") {
    normalusKatinukai++;
  }
});

console.log("Normaliu katinuku skaicius: ", normalusKatinukai);
console.log("Storu katinuku skaicius: ", storiKatinukai);

//4.

// bitCats.sort((a, b) => a.katinukoVardas.localeCompare(b.katinukoVardas));

// console.log(bitCats);

// Rūšiavimo funkcija pagal antrą raidę abėcėlės tvarka
const rūšiavimoFunkcija = (a, b) => {
  const raidėA = a[0][1].toLowerCase();
  const raidėB = b[0][1].toLowerCase();

  if (raidėA < raidėB) return -1;
  if (raidėA > raidėB) return 1;
  return 0;
};

// Išrūšiuoti bitCats pagal antrą raidę
const išrūšiuotiBitCats = bitCats.sort(rūšiavimoFunkcija);

// Išvesti išrūšiuotą masyvą
console.log(išrūšiuotiBitCats);
