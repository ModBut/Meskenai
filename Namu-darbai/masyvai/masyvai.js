//1.

console.log("Pirmas uzdavinys");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 0; i < 30; i++) {
  let atsitiktiniaiskaiciai = rand(5, 25);
  array.push(atsitiktiniaiskaiciai);
}

// for (let i = 0; i < 30; i++) {
//   array.push(rand(5, 25))
// }

console.log(array);

//2.

console.log("Antras uzdavinys");
console.log("A");

let didesniuzdesimt = 0;

array.forEach((num) => {
  if (num > 10) {
    didesniuzdesimt++;
  }
});

console.log("Reiksmiu didesniu uz desimt yra: ", didesniuzdesimt);

console.log("B");

let didziausiaReiksme = array[0];
let didziausioIndeksas = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] > didziausiaReiksme) {
    didziausiaReiksme = array[i];
    didziausioIndeksas = i;
  }
}

console.log("Didziausia reiksme:", didziausiaReiksme);
console.log("Jos indeksas:", didziausioIndeksas);

console.log("C");

//Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let reiksmiuSuma = 0;

for (let i = 0; i < array.length; i += 2) {
  reiksmiuSuma += array[i];
}

console.log("Poriniu indeksu reiksmiu suma: ", reiksmiuSuma);

console.log("D");

let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray.push(array[i] - i);
}

console.log(newArray);

console.log("E");

//Papildykite masyvą papildomais 10 elementų su
//reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (i = 0; i < 10; i++) {
  let papildomiElementai = rand(5, 25);
  newArray.push(papildomiElementai);
}
console.log(newArray);

console.log("F");

//Iš masyvo elementų sukurkite du naujus masyvus.
//Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
//o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);

let newArray1 = [];
let newArray2 = [];

let neporinesReiksmes = 0;
let porinesReiksmes = 0;

for (let i = 0; i < newArray.length; i += 2) {
  porinesReiksmes = newArray[i];
  newArray2.push(porinesReiksmes);
}

console.log("Poriniu indeksu reiksmes: ", newArray2);

for (let i = 1; i < newArray.length; i += 2) {
  neporinesReiksmes = newArray[i];
  newArray1.push(neporinesReiksmes);
}

console.log("Neporiniu indeksu reiksmes: ", newArray1);

console.log("G");

//Pirminio masyvo elementus su poriniais indeksais
//padarykite lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < newArray2.length; i++) {
  if (newArray2[i] > 15) {
    newArray2[i] = 0;
  }
}

console.log("Elementai didesni uz 15 lygus 0: ", newArray2);

console.log("H");

//Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

let indeksas = -1;

for (let i = 0; i < newArray2.length; i++) {
  if (newArray2[i] > 10) {
    indeksas = i;
    break;
  }
}

console.log("Pirmas indeksas, kurio elemento reiksme didesne uz 10:", indeksas);

//3.

console.log("Trecias uzdavinys");

// const masyvas = [];

// for (i = 0; i < 200; i++) {
//   let atsitiktinesRaides = rand("A", "B", "C", "D");
//   masyvas.push(atsitiktinesRaides);
// }
// console.log(masyvas);

//4.

console.log("Ketvirtas uzdavinys");

//5.

console.log("Penktas uzdavinys");

const masyvas = [];
const masyvas1 = [];

for (i = 0; i < 100; i++) {
  let skaiciai = rand(100, 999);
  masyvas.push(skaiciai);
}

for (i = 0; i < 100; i++) {
  let skaiciai1 = rand(100, 999);
  masyvas1.push(skaiciai1);
}

console.log(masyvas);
console.log(masyvas1);

//6.

console.log("Sestas uzdavinys");

naujasMasyvas = masyvas;

console.log(naujasMasyvas);
